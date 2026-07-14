import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ALL_SERVICES } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

// 8 service cards — 4 per row on desktop = perfect symmetry
const SERVICE_CARDS = [
  { num:'01', slug:'industrial-relocation', title:'Industrial Plant Relocation', badge:'Specialist',    desc:'Full factory moves, heavy machinery, robots, CMM machines and production lines. Zero disassembly where possible.', tags:['Rigging','Hydraulic Jacks'],   img:'/images/service-01.jpg' },
  { num:'02', slug:'office-relocation',     title:'Office & IT Asset Relocation',badge:'Zero Downtime', desc:'Weekend and overnight moves for corporates. 1 lakh+ IT assets relocated for WHO, WNS and Ameriprise.', tags:['ESD-Safe','Overnight'],         img:'/images/service-02.jpg' },
  { num:'03', slug:'household-relocation',  title:'Household Relocation',        badge:'Pan India',     desc:'Local or intercity — professional packing, secure transport, careful furniture placement. All across India.', tags:['Local','Intercity'],            img:'/images/service-03.jpg' },
  { num:'04', slug:'export-packing',        title:'Export & International Packing',badge:'Global',      desc:'Vacuum packing, pine-wood crating and container stuffing. Exports to USA, UK, Australia, Dubai and beyond.', tags:['Vacuum Packing','ISPM-15'],    img:'/images/service-04.jpg' },
  { num:'05', slug:'heritage-packing',      title:'Art, Heritage & Artifacts',   badge:'Govt. Trusted', desc:'Museum-grade handling. Trusted by Rashtrapati Bhawan\'s Art Secretariat for the Presidential Museum.', tags:['White Glove','Govt. Cleared'], img:'/images/service-05.jpg' },
  { num:'06', slug:'exhibition-logistics',  title:'Exhibition & Event Logistics', badge:'Time-Critical', desc:'G20 Summit, Shilp Guru Awards, Vigyan Bhawan. Full setup, display packing and post-event dismantling.', tags:['Govt. Events','Setup'],         img:'/images/service-06.jpg' },
  { num:'07', slug:'warehousing',           title:'Warehousing & Storage',       badge:'Secure',        desc:'Short-term and long-term storage for residential, commercial and industrial goods. Monitored facilities.', tags:['Short-Term','Long-Term'],      img:'/images/service-07.jpg' },
  { num:'08', slug:'transportation',        title:'Car & Bike Relocation',       badge:'Pan India',     desc:'Fully enclosed car carriers and bike transport across India. GPS tracked, insured, door-to-door service.', tags:['Enclosed Carrier','GPS'],      img:'/images/service-08.jpg' },
]

function ServiceCard({ s, onClick, onImgClick }) {
  return (
    <Link
      to={`/services/${s.slug}`}
      className="service-card service-card--lift"
      onClick={e => { e.preventDefault(); onClick() }}
    >
      <div className="service-card__img-wrap" onClick={e => { e.preventDefault(); e.stopPropagation(); onImgClick(s) }}>
        <img src={s.img} alt={s.title} className="service-card__img" loading="lazy" />
        <div className="service-card__img-overlay" />
        <span className="service-card__badge">{s.badge}</span>
        <span className="service-card__zoom" aria-hidden="true">⤢</span>
      </div>
      <div className="service-card__body">
        <div className="service-card__num">{s.num} ——</div>
        <h3 className="service-card__title">{s.title}</h3>
        <p className="service-card__desc">{s.desc}</p>
        <div className="service-card__tags">
          {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div className="service-card__cta">
          <span className="service-card__link">View Service</span>
          <div className="service-card__arrow">→</div>
        </div>
      </div>
    </Link>
  )
}

/* Full-screen accessible lightbox for a single service image */
function ServiceLightbox({ s, onClose }) {
  if (!s) return null
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={s.title} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img src={s.img} alt={s.title} className="lightbox-img" onClick={e => e.stopPropagation()} />
      <div className="lightbox-caption">{s.title}</div>
    </div>
  )
}

export default function Services({ onServiceClick }) {
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="services" className="section sec-white">
      <Reveal>
        <SectionLabel text="Our Services" />
        <h2 style={{ marginTop:'.4rem' }}>What we <em>specialise</em> in.</h2>
        <p style={{ marginTop:'.8rem', maxWidth:540 }}>
          From a household move to relocating an entire manufacturing plant — every project gets the same ISO-certified process, specialist equipment and professional team.
        </p>
      </Reveal>

      {/* 4-column symmetrical grid */}
      <div className="services-4col" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem', marginTop:'3rem' }}>
        {SERVICE_CARDS.map((s, i) => (
          <Reveal key={s.num} delay={i * 50}>
            <ServiceCard s={s} onClick={() => onServiceClick(s.slug)} onImgClick={setLightbox} />
          </Reveal>
        ))}
      </div>
      <ServiceLightbox s={lightbox} onClose={() => setLightbox(null)} />

      {/* Full list toggle */}
      <Reveal delay={200}>
        <div style={{ marginTop:'2.5rem', padding:'1.8rem 2rem', background:'var(--off-white)', border:'1.5px solid var(--border-lt)', borderRadius:'var(--radius)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
          <div>
            <div style={{ fontSize:'.75rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--sr-blue)' }}>Complete Service Range</div>
            <p style={{ margin:'.25rem 0 0', fontSize:'.9rem' }}>Residential · Corporate · Industrial · Logistics · Specialized</p>
          </div>
          <button className="btn btn--outline-blue btn--sm" onClick={() => setExpanded(e => !e)}>
            {expanded ? 'Hide Details' : 'View All Services'}
          </button>
        </div>
        {expanded && (
          <div style={{ background:'#fff', border:'1.5px solid var(--border-lt)', borderTop:'none', borderRadius:'0 0 var(--radius) var(--radius)', padding:'2rem', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap:'1.5rem' }}>
            {Object.values(ALL_SERVICES).map(cat => (
              <div key={cat.label}>
                <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'.7rem', paddingBottom:'.5rem', borderBottom:'2px solid var(--sr-red)' }}>{cat.label}</div>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.38rem' }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ fontSize:'.87rem', color:'var(--txt-body)', display:'flex', alignItems:'center', gap:'.5rem' }}>
                      <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--sr-blue)', opacity:.5, flexShrink:0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}
