import { useState, useEffect, useRef } from 'react'
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

const CAT_IMAGES = {
  government: 'https://images.unsplash.com/photo-1555374018-13a8994ab246?w=600&q=75',
  corporate:  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=75',
  industrial: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=75',
  luxury:     'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=75',
  events:     'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=75',
}

const TESTIMONIALS = [
  { quote:"Shree Radhey has been our trusted relocation partner for over 8 years. Their professionalism, attention to detail and ability to handle sensitive materials without damage makes them irreplaceable.", stars:5, attr:"WHO South-East Asia Office", role:"New Delhi Regional Office", initials:"WHO", color:"#0077B6" },
  { quote:"We entrusted them with irreplaceable presidential artifacts — sculptures, paintings and rare collectibles for the Presidential Museum. Their museum-grade handling exceeded every expectation.", stars:5, attr:"Rashtrapati Bhawan", role:"Art Secretariat, President's Office", initials:"RB", color:"#1B3A8C" },
  { quote:"Over 1 lakh IT assets — laptops, servers, hubs and workstations — relocated to employees' homes during the pandemic. Zero losses. Complete professionalism throughout.", stars:5, attr:"WNS Global Services", role:"Corporate Client", initials:"WNS", color:"#2D6A4F" },
  { quote:"Our annual Maharaja Express packing is handled by Shree Radhey with remarkable care for our heritage furniture and custom fittings. The same quality, year after year. Highly recommended.", stars:5, attr:"IRCTC — Maharaja Express", role:"India's Premier Luxury Train", initials:"IRT", color:"#6B2737" },
  { quote:"They handled our entire G20 exhibition logistics at Bharat Mandapam — setup, display packing and post-event dismantling — flawlessly. Time-critical, high-stakes, perfectly executed.", stars:5, attr:"CCIC / EPCH", role:"G20 Summit Exhibition, 2023", initials:"G20", color:"#b85a10" },
  { quote:"Machine shifting for our automotive plant required precision we didn't think was possible. Shree Radhey proved us wrong — zero misalignment, zero downtime.", stars:5, attr:"GKN Driveline India", role:"Automotive Manufacturer", initials:"GKN", color:"#1B3A8C" },
]

function Stars({ n }) {
  return <div style={{ display:'flex', gap:2 }}>{[...Array(n)].map((_,i) => <span key={i} style={{ color:'#f5b50a', fontSize:'.95rem' }}>★</span>)}</div>
}

// Sliding carousel — 3 visible, loops continuously, 1 slides in from right each tick
function TestimonialCarousel() {
  const VISIBLE = 3
  const [startIdx, setStartIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const total = TESTIMONIALS.length
  const timerRef = useRef(null)

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
    timerRef.current = setInterval(() => advance('next'), 4000)
    return () => clearInterval(timerRef.current)
  })

  // Build array of 3 visible + 1 entering/leaving
  const visible = []
  for (let i = 0; i < VISIBLE; i++) {
    visible.push(TESTIMONIALS[(startIdx + i) % total])
  }
  // The incoming card (rightmost when going next, leftmost when going prev)
  const incoming = direction === 'next'
    ? TESTIMONIALS[(startIdx + VISIBLE) % total]
    : TESTIMONIALS[(startIdx - 1 + total) % total]

  return (
    <div>
      {/* Track with overflow hidden */}
      <div style={{ overflow:'hidden', position:'relative' }}>
        <div style={{
          display:'grid',
          gridTemplateColumns:`repeat(${VISIBLE}, 1fr)`,
          gap:'1.4rem',
          transition: animating ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none',
          transform: animating
            ? direction === 'next' ? 'translateX(calc(-33.333% - .47rem))' : 'translateX(calc(33.333% + .47rem))'
            : 'translateX(0)',
        }}>
          {visible.map((t, i) => {
            const isActive = i === 1 // middle card always glows
            return (
              <div key={`${t.attr}-${i}`} className="testi-card" style={{ background: isActive ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.05)', border: isActive ? '1.5px solid rgba(201,168,76,.45)' : '1.5px solid rgba(255,255,255,.08)', boxShadow: isActive ? '0 0 0 1px rgba(201,168,76,.25), 0 0 60px rgba(201,168,76,.1), 0 20px 40px rgba(0,0,0,.3)' : 'none', transform: isActive ? 'translateY(-5px)' : 'none' }}>
                <Stars n={t.stars} />
                <p style={{ color:'rgba(255,255,255,.82)', fontSize:'.92rem', lineHeight:1.8, fontStyle:'italic', marginTop:'.8rem' }}>"{t.quote}"</p>
                <div style={{ marginTop:'1.2rem', paddingTop:'1rem', borderTop:'1px solid rgba(255,255,255,.08)', display:'flex', gap:'.8rem', alignItems:'center' }}>
                  <div style={{ width:38, height:38, borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:'.58rem', fontWeight:700, color:'#fff', letterSpacing:'.04em' }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize:'.8rem', fontWeight:700, color:'#fff' }}>{t.attr}</div>
                    <div style={{ fontSize:'.68rem', color:'rgba(255,255,255,.45)', marginTop:1 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginTop:'2rem' }}>
        <button onClick={() => advance('prev')} style={{ width:40, height:40, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.06)', color:'rgba(255,255,255,.7)', cursor:'pointer', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--sr-blue)'; e.currentTarget.style.borderColor='var(--sr-blue)'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,.2)'; e.currentTarget.style.color='rgba(255,255,255,.7)' }}>←</button>
        <div style={{ display:'flex', gap:6 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => { if (i !== startIdx) { setDirection(i > startIdx ? 'next' : 'prev'); setStartIdx(i) } }}
              style={{ width: i === startIdx ? 28 : 8, height:8, borderRadius:4, border:'none', background: i === startIdx ? 'var(--gold-lt)' : 'rgba(255,255,255,.25)', cursor:'pointer', transition:'all .35s', padding:0 }} />
          ))}
        </div>
        <button onClick={() => advance('next')} style={{ width:40, height:40, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.06)', color:'rgba(255,255,255,.7)', cursor:'pointer', fontSize:'1rem', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--sr-blue)'; e.currentTarget.style.borderColor='var(--sr-blue)'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.06)'; e.currentTarget.style.borderColor='rgba(255,255,255,.2)'; e.currentTarget.style.color='rgba(255,255,255,.7)' }}>→</button>
      </div>

      {/* Mobile */}
      <style>{`@media(max-width:700px){ .testi-card{ flex: 0 0 100% !important; } }`}</style>
    </div>
  )
}

function ProjectCard({ p }) {
  const img = CAT_IMAGES[p.category] || CAT_IMAGES.corporate
  return (
    <div className="project-card hover-float">
      <div className="project-card__img">
        <img src={img} alt={p.title} loading="lazy" />
        <span className="project-card__cat">{p.tag}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__client">{p.client}</div>
        <h4 className="project-card__title">{p.title}</h4>
        <p className="project-card__desc">{p.desc}</p>
        <div style={{ fontSize:'.68rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--txt-muted)', marginTop:'.8rem' }}>{p.year}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active)

  return (
    <>
      <section id="projects" className="section sec-off">
        <Reveal>
          <SectionLabel text="Signature Projects" />
          <h2 style={{ marginTop:'.4rem' }}>Work that defines <em>our standard.</em></h2>
          <p style={{ marginTop:'.8rem', maxWidth:520 }}>Government institutions, multinationals, industrial plants and luxury heritage properties — the same precision every time.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="filter-tabs" style={{ marginTop:'2rem' }}>
            {PROJECT_CATEGORIES.map(c => (
              <button key={c.id} className={`filter-tab${active===c.id?' active':''}`} onClick={() => setActive(c.id)}>{c.label}</button>
            ))}
          </div>
        </Reveal>
        <div className="projects-grid stagger-children">
          {filtered.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </section>

      {/* Client logos */}
      <section className="section sec-white" style={{ paddingTop:'4rem', paddingBottom:'4rem' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <SectionLabel text="Our Clients" />
            <h2 style={{ marginTop:'.4rem' }}>Trusted by <em>industry leaders.</em></h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="client-grid stagger-children">
            {[
              { name:'WHO South-East Asia', cat:"Int'l Org" },{ name:'Rashtrapati Bhawan', cat:'Government' },
              { name:'IRCTC', cat:'Government' },{ name:'CCIC India', cat:'Government' },
              { name:'Ameriprise Financial', cat:'Finance' },{ name:'WNS Global', cat:'BPO' },
              { name:'Samsung India', cat:'Electronics' },{ name:'Daikin India', cat:'HVAC' },
              { name:'GKN Driveline', cat:'Automotive' },{ name:'Hankook Tires', cat:'Automotive' },
              { name:'Hyatt Hotels', cat:'Hospitality' },{ name:'Denso India', cat:'Automotive' },
              { name:'Airtel', cat:'Telecom' },{ name:'JSW Energy', cat:'Energy' },
              { name:'Yakult', cat:'FMCG' },{ name:'Sun Pharma', cat:'Pharma' },
              { name:'Flyjac', cat:'Logistics' },{ name:'Bando India', cat:'Industrial' },
              { name:'Senior India', cat:'Industrial' },{ name:'Unicharm', cat:'FMCG' },
            ].map((c, i) => (
              <div key={i} className="client-cell hover-float">
                <div className="client-cell__name">{c.name}</div>
                <div className="client-cell__cat">{c.cat}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="section sec-navy" style={{ paddingTop:'5rem', paddingBottom:'5rem' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <SectionLabel text="Client Trust" />
            <h2 style={{ marginTop:'.4rem', color:'#fff' }}>What our <em>clients say.</em></h2>
            <p style={{ maxWidth:480, margin:'.8rem auto 0', color:'rgba(255,255,255,.6)' }}>Relationships built over years of consistent delivery — not one-off transactions.</p>
          </div>
        </Reveal>
        <TestimonialCarousel />
      </section>
    </>
  )
}
