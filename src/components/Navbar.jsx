import { useState, useEffect } from 'react'
import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'
import srLogo from '../assets/sr-logo.png'

// Correct nav order per brief
const LINKS = [
  { label:'Home',     id:'home'     },
  { label:'About Us', id:'about'    },
  { label:'Services', id:'services' },
  { label:'Projects', id:'projects' },
  { label:'Insights', id:'insights' },
  { label:'FAQ',      id:'faq'      },
  { label:'Contact',  id:'contact'  },
]

export default function Navbar({ onHome, onAbout, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active,   setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (currentPage) return
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(LINKS[i].id)
        if (el && window.scrollY >= el.offsetTop - 100) { setActive(LINKS[i].id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [currentPage])

  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : '' }, [menuOpen])

  const go = (id) => {
    setMenuOpen(false)
    if (id === 'about' && onAbout) { onAbout(); return }
    if (currentPage) {
      // go back to home first, then scroll
      onHome()
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' }), 120)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })
  }

  const isActive = (id) => !currentPage && active === id

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} style={{
        background: scrolled ? undefined : 'linear-gradient(to bottom, rgba(8,15,36,.75) 0%, transparent 100%)',
      }}>
        <div className="nav__inner">

          {/* Brand — bigger, bolder */}
          <div className="nav__brand" onClick={onHome} style={{ gap:'1rem' }}>
            <img src={srLogo} alt="Shree Radhey Logo" className="nav__logo"
                 style={{ height:54, width:54, filter:'drop-shadow(0 2px 8px rgba(0,0,0,.3))' }} />
            <div className="nav__name">
              <span className="nav__name-main" style={{ fontSize:'1.1rem', letterSpacing:'.04em' }}>Shree Radhey</span>
              <span className="nav__name-sub" style={{ fontSize:'.6rem', letterSpacing:'.2em' }}>Relocation Services · Est. 2017</span>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="nav__links" style={{ gap:'1.6rem' }}>
            {LINKS.map(l => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={isActive(l.id) ? 'active' : ''}
                  onClick={e => { e.preventDefault(); go(l.id) }}
                  style={{ fontSize:'.72rem', fontWeight:600, letterSpacing:'.1em', position:'relative' }}
                >
                  {l.label}
                  {isActive(l.id) && (
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
            <a key={l.id} href={`#${l.id}`}
               onClick={e => { e.preventDefault(); go(l.id) }}
               style={{ animationDelay:`${i*55}ms`, animation:'fadeUp .4s ease both', color: isActive(l.id) ? '#fff' : undefined }}>
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
