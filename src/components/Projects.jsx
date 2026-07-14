import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

export const slugifyProject = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const CAT_IMAGES = {
  government: '/images/Corporate%20Office%20Relocation.jpg',
  corporate:  '/images/International%20Office%20Move.jpg',
  industrial: '/images/Industrial%20Plant%20Support.jpg',
  luxury:     '/images/Luxury%20Train%20Interiors.jpg',
  events:     '/images/G20%20Summit%20Exhibition.jpg',
}

const PROJECT_IMAGES = {
  'Presidential Museum':          '/Signature%20Projects/presidential%20museum.jpg',
  'International Office Move':    '/Signature%20Projects/International%20Office%20Move.jpg',
  'Maharaja Express Interiors':   '/Signature%20Projects/Maharaja%20Express%20Interiors.jpg',
  '1 Lakh IT Asset Migration':    '/Signature%20Projects/1%20Lakh%20IT%20Asset%20Migration.jpg',
  'Corporate Office Relocation':  '/Signature%20Projects/Corporate%20Office%20Relocation.jpg',
  'G20 Summit Exhibition':        '/Signature%20Projects/G20%20Summit%20Exhibition.jpg',
  'Shilp Guru Awards':            '/Signature%20Projects/Shilp%20Guru%20Awards.jpeg',
  '13-Foot Production Line':      '/Signature%20Projects/13-Foot%20Production%20Line.jpg',
  'Air Tank Vertical Erection':   '/Signature%20Projects/Air%20Tank%20Vertical%20Erection.jpg',
  'Equipment Handling':           '/Signature%20Projects/Equipment%20Handling.jpeg',
  'HVAC Equipment Move':          '/Signature%20Projects/HVAC%20Equipment%20Move.jpg',
  'Automotive Plant Support':     '/Signature%20Projects/Automotive%20Plant%20Support.jpg',
  'Hotel Furniture Relocation':   '/Signature%20Projects/Hotel%20Furniture%20Relocation.jpg',
  'Industrial Plant Support':     '/Signature%20Projects/Industrial%20Plant%20Support.jpg',
  'Luxury Train Interiors':       '/Signature%20Projects/Luxury%20Train%20Interiors.jpg',
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

// Sliding carousel — 3/2/1 visible depending on viewport, loops continuously
function TestimonialCarousel() {
  const [visibleCount, setVisibleCount] = useState(
    typeof window !== 'undefined' && window.innerWidth <= 560 ? 1 : typeof window !== 'undefined' && window.innerWidth <= 860 ? 2 : 3
  )
  const [startIdx, setStartIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const total = TESTIMONIALS.length
  const timerRef = useRef(null)

  useEffect(() => {
    const onResize = () => {
      const next = window.innerWidth <= 560 ? 1 : window.innerWidth <= 860 ? 2 : 3
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
    timerRef.current = setInterval(() => advance('next'), 4000)
    return () => clearInterval(timerRef.current)
  })

  // Build array of VISIBLE cards starting at startIdx
  const visible = []
  for (let i = 0; i < VISIBLE; i++) {
    visible.push(TESTIMONIALS[(startIdx + i) % total])
  }

  // The middle card glows when there are 3 visible; on 1-2 column layouts
  // the first card is the highlighted one instead.
  const activeIndex = VISIBLE === 3 ? 1 : 0
  const slideFraction = 100 / VISIBLE

  return (
    <div>
      {/* Track with overflow hidden */}
      <div className="testi-track-wrap">
        <div
          className="testi-track-grid"
          style={{
            gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
            transition: animating ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none',
            transform: animating
              ? direction === 'next' ? `translateX(calc(-${slideFraction}% - ${1.4 / VISIBLE}rem))` : `translateX(calc(${slideFraction}% + ${1.4 / VISIBLE}rem))`
              : 'translateX(0)',
          }}
        >
          {visible.map((t, i) => {
            const isActive = i === activeIndex
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
    </div>
  )
}

function ProjectCard({ p }) {
  const img = PROJECT_IMAGES[p.title] || CAT_IMAGES[p.category] || CAT_IMAGES.corporate
  return (
    <Link to={`/projects/${slugifyProject(p.title)}`} className="project-card project-card--lift">
      <div className="project-card__img">
        <img src={img} alt={p.title} loading="lazy" />
        <span className="project-card__cat">{p.tag}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__client">{p.client}</div>
        <h4 className="project-card__title">{p.title}</h4>
        <p className="project-card__desc">{p.desc}</p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'.8rem' }}>
          <span style={{ fontSize:'.68rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--txt-muted)' }}>{p.year}</span>
          <span className="project-card__arrow">→</span>
        </div>
      </div>
    </Link>
  )
}

const CLIENT_LOGOS = {
  'WHO South-East Asia': '/Client%20Logo/WHO.png',
  'Rashtrapati Bhawan': '/Client%20Logo/Rashtrapati_Bhavan_Logo.png',
  'IRCTC': '/Client%20Logo/IRCTC.png',
  'CCIC India': '/Client%20Logo/ccic.jpg',
  'Ameriprise Financial': '/Client%20Logo/ameriprise%20f.jpg',
  'WNS Global': '/Client%20Logo/wns.png',
  'Samsung India': '/Client%20Logo/samsung.png',
  'Daikin India': '/Client%20Logo/daikin.png',
  'GKN Driveline': '/Client%20Logo/gkn.jpg',
  'Hankook Tires': '/Client%20Logo/hankook.png',
  'Senior India': '/Client%20Logo/senior.jpg',
  'Yakult Danone': '/Client%20Logo/yakult.png',
  'Hyatt Hotels': '/Client%20Logo/hyatt.png',
  'Airtel India': '/Client%20Logo/airtel.jpg',
  'JSW Energy': '/Client%20Logo/jsw.png',
  'Flyjac Logistics': '/Client%20Logo/flyjack.jpg',
  'Bando India': '/Client%20Logo/bando.jpg',
  'Denso India': '/Client%20Logo/denso.png',
  'CoinTribe': '/Client%20Logo/coin%20tribe.jpg',
  'Cheil India': '/Client%20Logo/cheil.png',
  'JTEKT India': '/Client%20Logo/jk_logo_original.png',
  'Takahata Precision': '/Client%20Logo/takahata.png',
  'Sun Pharma': '/Client%20Logo/Sun%20Pharma.png',
  'Unicharm India': '/Client%20Logo/unicharm.png',
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
              { name:'Airtel India', cat:'Telecom' },{ name:'JSW Energy', cat:'Energy' },
              { name:'Yakult Danone', cat:'FMCG' },{ name:'Sun Pharma', cat:'Pharma' },
              { name:'Flyjac Logistics', cat:'Logistics' },{ name:'Bando India', cat:'Industrial' },
              { name:'Senior India', cat:'Industrial' },{ name:'Unicharm India', cat:'FMCG' },
            ].map((c, i) => {
              const logo = CLIENT_LOGOS[c.name]
              return (
                <div key={i} className="client-cell hover-float" style={{ flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                  {logo ? (
                    <img src={logo} alt={c.name} style={{ maxWidth:'100%', maxHeight:48, objectFit:'contain', marginBottom:'.75rem' }} />
                  ) : (
                    <div className="client-cell__name">{c.name}</div>
                  )}
                  <div className="client-cell__cat">{c.cat}</div>
                </div>
              )
            })}
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
