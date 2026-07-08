import { Link, useNavigate } from 'react-router-dom'
import srLogo from '../assets/sr-logo.png'
import { YOUR_WA_NUMBER, YOUR_EMAIL, SERVICE_PAGES } from '../data/constants'
import { WaIcon } from './Shared'

const SERVICE_LINKS = [
  ['Household Relocation','household-relocation'],
  ['Office Relocation','office-relocation'],
  ['Industrial Relocation','industrial-relocation'],
  ['Machine Shifting','machine-shifting'],
  ['Export Packing','export-packing'],
  ['Exhibition Logistics','exhibition-logistics'],
  ['Transportation','transportation'],
  ['Warehousing','warehousing'],
  ['Project Logistics','project-logistics'],
]

// label, target anchor id (scrolled to on homepage) — Home/About handled separately as real routes
const QUICK_LINKS = [
  ['Services','services'],
  ['Projects','projects'],
  ['Gallery','gallery'],
  ['Estimate','estimate'],
  ['Contact','contact'],
]

export default function Footer({ onAbout }) {
  const y = new Date().getFullYear()
  const navigate = useNavigate()

  const scrollTo = (id) => {
    // Always route home first with scroll intent — works whether we're
    // already on the homepage (just scrolls) or on a sub-page (navigates then scrolls).
    if (window.location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <footer>
      {/* ── Red top accent ─────────────────────────────────── */}
      <div style={{ height:4, background:'linear-gradient(90deg, var(--sr-blue) 0%, var(--sr-red) 100%)' }} />

      {/* ── Main footer body ───────────────────────────────── */}
      <div style={{ background:'var(--navy-deep)', padding:'4rem var(--px) 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap:'3rem', paddingBottom:'3rem', borderBottom:'1px solid rgba(255,255,255,.07)' }}>

          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'.8rem', marginBottom:'1.2rem' }}>
              <img src={srLogo} alt="SR Logo" style={{ height:50, width:50, objectFit:'contain', flexShrink:0 }} />
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'1rem', color:'#fff', letterSpacing:'.05em' }}>Shree Radhey</div>
                <div style={{ fontSize:'.52rem', letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginTop:1 }}>Relocation Services</div>
              </div>
            </div>
            <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.55)', lineHeight:1.75, maxWidth:240 }}>
              ISO 9001:2015 Certified relocation & logistics company. Trusted by governments, MNCs and institutions since 2017.
            </p>
            <div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap', marginTop:'1rem' }}>
              {['ISO Certified','Est. 2017','Pan India'].map(b => (
                <span key={b} style={{ fontSize:'.55rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', padding:'.25rem .65rem', border:'1px solid rgba(255,255,255,.12)', borderRadius:4, color:'rgba(255,255,255,.5)' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Services — real links to each service page (also helps internal SEO linking) */}
          <div>
            <div style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'1rem', paddingBottom:'.5rem', borderBottom:'1px solid rgba(255,255,255,.06)' }}>Services</div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.45rem' }}>
              {SERVICE_LINKS.map(([label, slug]) => (
                <li key={label}>
                  <Link to={SERVICE_PAGES[slug] ? `/services/${slug}` : '/'}
                     style={{ fontSize:'.85rem', color:'rgba(255,255,255,.5)', transition:'color .2s' }}
                     onMouseEnter={e => e.target.style.color='#fff'}
                     onMouseLeave={e => e.target.style.color='rgba(255,255,255,.5)'}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'1rem', paddingBottom:'.5rem', borderBottom:'1px solid rgba(255,255,255,.06)' }}>Quick Links</div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.45rem' }}>
              <li>
                <Link to="/" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.5)', transition:'color .2s' }}
                   onMouseEnter={e => e.target.style.color='#fff'}
                   onMouseLeave={e => e.target.style.color='rgba(255,255,255,.5)'}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.5)', transition:'color .2s' }}
                   onMouseEnter={e => e.target.style.color='#fff'}
                   onMouseLeave={e => e.target.style.color='rgba(255,255,255,.5)'}>About</Link>
              </li>
              {QUICK_LINKS.map(([l, id]) => (
                <li key={l}>
                  <a href={`/#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}
                     style={{ fontSize:'.85rem', color:'rgba(255,255,255,.5)', transition:'color .2s' }}
                     onMouseEnter={e => e.target.style.color='#fff'}
                     onMouseLeave={e => e.target.style.color='rgba(255,255,255,.5)'}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.26em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'1rem', paddingBottom:'.5rem', borderBottom:'1px solid rgba(255,255,255,.06)' }}>Contact</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'.9rem' }}>
              {[
                { l:'Address', v:'WZ 283/309, Vishnu Garden\nNew Delhi — 110018' },
                { l:'WhatsApp', v:'+91 9319571414' },
                { l:'Phone', v:'+91 9810499121' },
                { l:'Email', v:'sr.relocationservices@gmail.com' },
                { l:'Website', v:'www.srrelocationservices.com' },
              ].map(r => (
                <div key={r.l}>
                  <div style={{ fontSize:'.55rem', fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:2 }}>{r.l}</div>
                  <div style={{ fontSize:'.85rem', color:'rgba(255,255,255,.65)', whiteSpace:'pre-line' }}>{r.v}</div>
                </div>
              ))}
              <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a relocation quote.')}`}
                 target="_blank" rel="noopener noreferrer"
                 className="btn btn--wa btn--sm" style={{ marginTop:'.5rem', width:'fit-content', gap:'.5rem' }}>
                <WaIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'.8rem', padding:'1.4rem 0' }}>
          <span style={{ fontSize:'.72rem', color:'rgba(255,255,255,.3)' }}>© {y} Shree Radhey Relocation Services. All rights reserved.</span>
          <span style={{ fontSize:'.72rem', color:'rgba(255,255,255,.3)' }}>ISO 9001:2015 Certified · New Delhi, India · Precision · Trust</span>
        </div>
      </div>
    </footer>
  )
}
