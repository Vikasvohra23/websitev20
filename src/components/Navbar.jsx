import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'
import srLogo from '../assets/sr-logo.png'

// Order matches actual homepage section order (FAQ renders before Insights/BlogSection)
const LINKS = [
  { label:'Home',     id:'home',     path:'/'        },
  { label:'About Us', id:'about',    path:'/about'   },
  { label:'Services', id:'services', matchPrefix:'/services' },
  { label:'Projects', id:'projects', path:'/projects' },
  { label:'Gallery',  id:'gallery',  path:'/gallery'  },
  { label:'FAQ',      id:'faq'      },
  { label:'Insights', id:'insights', matchPrefix:'/insights' },
  { label:'Contact',  id:'contact'  },
]

// currentPage is the current pathname (e.g. '/services/foo') or null when on the homepage
export default function Navbar({ onHome, onAbout, currentPage }) {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('home')
  const onHomepage = !currentPage

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (!onHomepage) return
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(LINKS[i].id)
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(LINKS[i].id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHomepage])

  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : '' }, [menuOpen])

  // For real pages (Home, About, Projects, Gallery) — use router Link so crawlers
  // get a real href. For in-page anchors (Services, FAQ, Insights, Contact) —
  // scroll on the homepage, or navigate home first and scroll once it's mounted.
  const go = (link) => {
    setMenuOpen(false)
    if (link.id === 'home') { onHome(); return }
    if (link.id === 'about') { onAbout(); return }
    if (link.path) { navigate(link.path); return }
    if (!onHomepage) {
      onHome()
      setTimeout(() => document.getElementById(link.id)?.scrollIntoView({ behavior:'smooth', block:'start' }), 150)
      return
    }
    document.getElementById(link.id)?.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  const isActive = (link) => {
    if (onHomepage) return active === link.id
    if (link.path && currentPage === link.path) return true
    if (link.matchPrefix && currentPage?.startsWith(link.matchPrefix)) return true
    return false
  }
  const hrefFor = (link) => {
    if (link.path) return link.path
    return onHomepage ? `#${link.id}` : `/#${link.id}`
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} style={{
        background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(8,15,36,.75) 0%, transparent 100%)',
      }}>
        <div className="nav__inner">

          {/* Brand — bigger, bolder */}
          <Link to="/" className="nav__brand" style={{ gap:'1rem' }}>
            <img src={srLogo} alt="Shree Radhey Logo" className="nav__logo"
                 style={{ height:54, width:54, filter:'drop-shadow(0 2px 8px rgba(0,0,0,.3))' }} />
            <div className="nav__name">
              <span className="nav__name-main" style={{ fontSize:'1.1rem', letterSpacing:'.04em' }}>Shree Radhey</span>
              <span className="nav__name-sub" style={{ fontSize:'.6rem', letterSpacing:'.2em' }}>Relocation Services · Est. 2017</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav__links" style={{ gap:'1.6rem' }}>
            {LINKS.map(l => (
              <li key={l.id}>
                <a
                  href={hrefFor(l)}
                  className={isActive(l) ? 'active' : ''}
                  onClick={e => { e.preventDefault(); go(l) }}
                  style={{ fontSize:'.72rem', fontWeight:600, letterSpacing:'.1em', position:'relative' }}
                >
                  {l.label}
                  {isActive(l) && (
                    <span style={{ position:'absolute', bottom:-4, left:0, right:0, height:2, background:'var(--sr-red)', borderRadius:2 }} />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a className="nav__cta btn btn--red btn--sm"
             href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a quote.')}`}
             target="_blank" rel="noopener noreferrer"
             style={{ gap:'.5rem', borderRadius:6 }}>
            <WaIcon /> Get Quote
          </a>

          <button className={`nav__hamburger${menuOpen ? ' open' : ''}`}
                  onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          <div style={{ display:'flex', alignItems:'center', gap:'.9rem', marginBottom:'2.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid rgba(255,255,255,.1)', width:'80%', maxWidth:320 }}>
            <img src={srLogo} alt="" style={{ height:48, width:48, objectFit:'contain' }} />
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:'#fff', fontSize:'1.05rem' }}>Shree Radhey</div>
              <div style={{ fontSize:'.55rem', letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.45)' }}>Relocation Services</div>
            </div>
          </div>
          {LINKS.map((l, i) => (
            <a key={l.id} href={hrefFor(l)}
               onClick={e => { e.preventDefault(); go(l) }}
               style={{ animationDelay:`${i*55}ms`, animation:'fadeUp .4s ease both', color: isActive(l) ? '#fff' : undefined }}>
              {l.label}
            </a>
          ))}
          <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a quote.')}`}
             target="_blank" rel="noopener noreferrer"
             className="btn btn--wa mt-3" onClick={() => setMenuOpen(false)}
             style={{ fontSize:'.78rem', marginTop:'2rem' }}>
            <WaIcon /> WhatsApp Us
          </a>
        </div>
      )}
    </>
  )
}
