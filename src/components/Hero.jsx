import { useState, useEffect, useCallback } from 'react'
import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'

const SLIDES = [
  {
    bg: '/images/hero-1.jpg',
    eyebrow: 'Industrial Plant Relocation',
    heading: <>We Move <em>Entire Factories.</em></>,
    sub: 'Hydraulic rigging, precision placement and zero-damage machinery relocation. Trusted by Daikin, GKN Driveline, Samsung and 100+ manufacturers.',
  },
  {
    bg: '/images/hero-2.jpg',
    eyebrow: 'Household Relocation',
    heading: <>Your Home, <em>Handled With Care.</em></>,
    sub: 'From a single apartment to a villa — professional packing, secure transport, and careful placement at your new home.',
  },
  {
    bg: '/images/hero-3.jpg',
    eyebrow: 'Corporate & IT Asset Relocation',
    heading: <>Office Shifts <em>Done Overnight.</em></>,
    sub: '100,000+ IT assets relocated for WHO, WNS and Ameriprise - with zero data loss and Monday-morning operational readiness.',
  },
  {
    bg: '/images/hero-4.jpg',
    eyebrow: 'Export Packing & International Logistics',
    heading: <>Export-Grade <em>Packing That Protects.</em></>,
    sub: 'Vacuum packing, pine-wood crating and container stuffing for international shipments to USA, UK, Australia and Dubai.',
  },
  {
    bg: '/images/hero-5.jpg',
    eyebrow: 'Heritage & Art Handling',
    heading: <>Trusted by <em>Rashtrapati Bhawan.</em></>,
    sub: 'Museum-grade packing of rare sculptures, paintings and presidential artifacts. The highest trust in India - placed in us.',
  },
]

const STATS = [
  { icon:'🏗️', num:'100+', lbl:'Industrial Clients' },
  { icon:'📦', num:'1L+',  lbl:'IT Assets Moved'   },
  { icon:'🏆', num:'9+',   lbl:'Years of Trust'     },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev,    setPrev]    = useState(null)

  const goTo = useCallback((idx) => {
    setPrev(current)
    setCurrent(idx)
  }, [current])

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % SLIDES.length), 5500)
    return () => clearInterval(t)
  }, [current, goTo])

  return (
    <>
      <section id="home" className="hero">
        {/* Slides */}
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`hero__slide${i === current ? ' hero__slide--active' : ''}`}
            style={{ backgroundImage:`url(${s.bg})`, opacity: i === current ? 1 : 0 }}
          />
        ))}

        {/* Overlay */}
        <div className="hero__overlay" />

        {/* Content */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text" key={current}>
              {SLIDES[current].eyebrow}
            </span>
          </div>

          <h1 className="hero__heading" key={`h-${current}`}>
            {SLIDES[current].heading}
          </h1>

          <p className="hero__sub" key={`s-${current}`}>
            {SLIDES[current].sub}
          </p>

          <div className="hero__ctas">
            <a
              href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a quote for my relocation project.')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn--red btn--lg"
            >
              <WaIcon /> Get Free Quote
            </a>
            <a href="#estimate" className="btn btn--outline-white btn--lg">
              Instant Estimate
            </a>
          </div>

          {/* ISO badge */}
          <div className="hero__badges" style={{ display:'flex', alignItems:'center', gap:'.7rem', flexWrap:'wrap', marginTop:'2.5rem', animation:'fadeUp .8s ease .8s both' }}>
            {['ISO Certified','Est. 2017','Pan India','Govt. Trusted'].map(b => (
              <span key={b} style={{ fontSize:'.65rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.65)', padding:'.3rem .8rem', border:'1px solid rgba(255,255,255,.18)', borderRadius:4, whiteSpace:'nowrap' }}>{b}</span>
            ))}
          </div>
        </div>

        {/* Prev/Next */}
        <button className="hero__arrow hero__arrow--prev" onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}>←</button>
        <button className="hero__arrow hero__arrow--next" onClick={() => goTo((current + 1) % SLIDES.length)}>→</button>

        {/* Dots */}
        <div className="hero__dots">
          {SLIDES.map((_, i) => (
            <button key={i} className={`hero__dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>

        {/* Floating stat cards */}
        <div className="hero__stats">
          {STATS.map(s => (
            <div key={s.lbl} className="hero__stat-card">
              <div className="hero__stat-icon">{s.icon}</div>
              <div>
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-lbl">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="trust-bar__inner">
          {['Rashtrapati Bhawan · Art Secretariat','WHO South-East Asia · 2018–2026','G20 Summit · CCIC','Shilp Guru Awards · EPCH','Maharaja Express · IRCTC','100+ MNCs & Institutions'].map((t, i) => (
            <div key={i} className="trust-item">
              <div className="trust-item__dot" />
              <span className="trust-item__text">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
