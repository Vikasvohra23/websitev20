import { useState, useEffect, useRef } from 'react'
import { Reveal, SectionLabel } from './Shared'

const STEPS = [
  { step:'01', icon:'🔍', title:'Free Site Survey',           desc:'On-site survey for every industrial, commercial and large residential project. We assess routes, floor loads and project complexity before a single rupee is quoted.',
    img:'/How%20we%20deliver/how%20we%20deliver%201.png' },
  { step:'02', icon:'📋', title:'Detailed Project Planning',  desc:'Movement sequence planned step by step. Phased schedules for corporate moves. Shutdown planning for industrial projects. Single director gives all instructions on complex lifts.',
    img:'/How%20we%20deliver/how%20we%20deliver%202.png' },
  { step:'03', icon:'📦', title:'Professional Grade Packing', desc:'Bubble wrap, fabric sheets, LED boxes for TVs, VCI vacuum film for metal equipment, pine-wood crating for exports. Full goods inventory provided at packing stage.',
    img:'/How%20we%20deliver/how%20we%20deliver%203.jpg' },
  { step:'04', icon:'🦺', title:'Full Safety Protocol',        desc:'No crew works without PPE. Health insurance for all packing, loading and unloading personnel. Zero improvisation on complex lifts - every step is planned and supervised.',
    img:'/How%20we%20deliver/how%20we%20deliver%204.jpg' },
  { step:'05', icon:'🏗️', title:'Specialist Equipment',       desc:'50-ton hydraulic jacks, 60-ton rollers, cranes, forklifts, chain pulley blocks, rigging slings. Right equipment selected per job - never improvised.',
    img:'/How%20we%20deliver/how%20we%20deliver%205.jpg' },
  { step:'06', icon:'🚚', title:'GPS-Tracked Transport',      desc:'Dedicated vehicles - no co-loading your consignment. GPS tracking live throughout transit. Time-critical deliveries managed with dedicated fleet allocation.',
    img:'/How%20we%20deliver/how%20we%20deliver%206.png' },
  { step:'07', icon:'📐', title:'Precision Placement',        desc:'Machines placed per layout drawings. Precision levelling post-relocation for CNC and precision equipment. Alignment verified before handover.',
    img:'/How%20we%20deliver/how%20we%20deliver%207.jpg' },
  { step:'08', icon:'🤝', title:'Personal Shifting Assistant', desc:'One dedicated coordinator from Day 1 to final handover. 24×7 support. Single point of contact. Feedback collected and documented at project completion.',
    img:'/How%20we%20deliver/how%20we%20deliver%208.jpg' },
]

function SopCard({ s, onImgClick }) {
  return (
    <div className="sop-card">
      <div className="sop-card__top">
        <span className="sop-card__num">{s.step}</span>
        <span className="sop-card__line" />
        <span className="sop-card__icon">{s.icon}</span>
      </div>
      <div className="sop-card__img" onClick={() => onImgClick(s)}>
        <img src={s.img} alt={s.title} loading="lazy" />
        <span className="sop-card__img-zoom" aria-hidden="true">⤢</span>
      </div>
      <h3 className="sop-card__title">{s.title}</h3>
      <p className="sop-card__desc">{s.desc}</p>
    </div>
  )
}

/* Full-screen accessible lightbox — reuses the same overlay styles as Services */
function SopLightbox({ s, onClose }) {
  if (!s) return null
  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={s.title} onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img src={s.img} alt={s.title} className="lightbox-img" onClick={e => e.stopPropagation()} />
      <div className="lightbox-caption">{s.step} — {s.title}</div>
    </div>
  )
}

// Sliding carousel — same behaviour as the testimonial carousel:
// 3/2/1 visible depending on viewport, auto-advances one card at a time, loops.
function SopCarousel() {
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 560 ? 1 : typeof window !== 'undefined' && window.innerWidth <= 900 ? 2 : 3
  )
  const [startIdx, setStartIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const [lightbox, setLightbox] = useState(null)
  const total = STEPS.length
  const timerRef = useRef(null)

  useEffect(() => {
    const onResize = () => {
      const next = window.innerWidth <= 560 ? 1 : window.innerWidth <= 900 ? 2 : 3
      setVisibleCount(v => (v === next ? v : next))
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const VISIBLE = visibleCount

  const advance = (dir = 'next') => {
    if (animating) return
    setAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setStartIdx(i => dir === 'next' ? (i + 1) % total : (i - 1 + total) % total)
      setAnimating(false)
    }, 500)
  }

  useEffect(() => {
    if (lightbox) return
    timerRef.current = setInterval(() => advance('next'), 4000)
    return () => clearInterval(timerRef.current)
  })

  const visible = []
  for (let i = 0; i < VISIBLE; i++) visible.push(STEPS[(startIdx + i) % total])
  const slideFraction = 100 / VISIBLE

  return (
    <div style={{ marginTop:'2.5rem' }}>
      <div className="sop-track-wrap">
        <div
          className="sop-track-grid"
          style={{
            gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
            transition: animating ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none',
            transform: animating
              ? direction === 'next' ? `translateX(calc(-${slideFraction}% - ${1.5 / VISIBLE}rem))` : `translateX(calc(${slideFraction}% + ${1.5 / VISIBLE}rem))`
              : 'translateX(0)',
          }}
        >
          {visible.map((s, i) => <SopCard key={`${s.step}-${i}`} s={s} onImgClick={setLightbox} />)}
        </div>
      </div>

      <SopLightbox s={lightbox} onClose={() => setLightbox(null)} />

      {/* Controls */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginTop:'2rem' }}>
        <button onClick={() => advance('prev')} className="sop-nav-btn">←</button>
        <div style={{ display:'flex', gap:6 }}>
          {STEPS.map((_, i) => (
            <button key={i} onClick={() => { if (i !== startIdx && !animating) { setDirection(i > startIdx ? 'next' : 'prev'); setStartIdx(i) } }}
              style={{ width: i === startIdx ? 28 : 8, height:8, borderRadius:4, border:'none', background: i === startIdx ? 'var(--sr-blue)' : 'var(--border-lt)', cursor:'pointer', transition:'all .35s', padding:0 }} />
          ))}
        </div>
        <button onClick={() => advance('next')} className="sop-nav-btn">→</button>
      </div>
    </div>
  )
}

export default function SOPSection() {
  return (
    <section id="process" className="section sec-pale">
      <Reveal>
        <SectionLabel text="Our Process" />
        <h2 style={{ marginTop:'.4rem' }}>How we <em>deliver.</em></h2>
        <p style={{ marginTop:'.8rem', maxWidth:540 }}>
          Every project follows the same ISO 9001:2015 documented process — from the first site survey to final handover. No shortcuts. No improvisation.
        </p>
      </Reveal>

      <SopCarousel />

      {/* Bottom CTA band */}
      <Reveal delay={300}>
        <div style={{ marginTop:'3rem', background:'var(--sr-blue)', borderRadius:'var(--radius)', padding:'2.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'1.5rem', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontSize:'.7rem', fontWeight:700, letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(255,255,255,.6)', marginBottom:'.4rem' }}>ISO 9001:2015 Certified</div>
            <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:'#fff', fontSize:'clamp(1.2rem,2.5vw,1.7rem)' }}>
              The same standard for <em style={{ color:'var(--gold-lt)' }}>every project, every time.</em>
            </h3>
          </div>
          <a href="#contact" className="btn btn--red btn--lg"
             onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' }) }}>
            Get a Free Survey →
          </a>
        </div>
      </Reveal>
    </section>
  )
}
