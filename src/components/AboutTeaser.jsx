import { Reveal, SectionLabel } from './Shared'

const WHY = [
  { icon:'🏅', t:'ISO 9001:2015 Certified',     d:'Quality management and safety protocols certified to international standards on every project.' },
  { icon:'🛡️', t:'Goods Insurance',             d:'Transit insurance at just 2.5% of declared value. Full itemised inventory at packing stage.' },
  { icon:'📍', t:'GPS Live Tracking',            d:'Real-time consignment tracking on all vehicles throughout transit.' },
  { icon:'🦺', t:'Safety-First Culture',         d:'PPE mandatory for all crew. Health insurance for every packing and loading team member.' },
  { icon:'🤝', t:'Personal Shifting Assistant',  d:'Dedicated coordinator from Day 1 to final handover. 24×7 response guaranteed.' },
  { icon:'🔧', t:'Specialist Equipment',         d:'30-ton hydraulic jacks, 40-ton rollers, cranes and vacuum packing machines on every job.' },
]

export default function AboutTeaser({ onLearnMore }) {
  return (
    <section id="about" style={{ background:'var(--off-white)', overflow:'hidden' }}>

      {/* ── Split teaser ── */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:480 }}>
        {/* Image */}
        <div style={{ position:'relative', overflow:'hidden', minHeight:380 }}>
          <img
            src="/images/about-1.jpg"
            alt="Shree Radhey professional packing team"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }}
          />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(8,15,36,.5) 0%,transparent 65%)' }} />
          {/* Trust card */}
          <div style={{ position:'absolute', bottom:'2rem', left:'2rem', background:'rgba(255,255,255,.97)', borderRadius:12, padding:'1rem 1.4rem', boxShadow:'0 8px 32px rgba(0,0,0,.18)', maxWidth:220, animation:'fadeUp .7s ease .4s both' }}>
            <div style={{ fontSize:'.6rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:5 }}>Est. 2017</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1rem', fontWeight:700, color:'var(--txt-dark)', lineHeight:1.3 }}>8 Years of Unbroken Trust</div>
            <div style={{ fontSize:'.78rem', color:'var(--txt-body)', marginTop:4 }}>Govt · MNCs · Industrial · Residential</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding:'clamp(2.5rem,6vw,5rem)', display:'flex', flexDirection:'column', justifyContent:'center', background:'#fff' }}>
          <Reveal><SectionLabel text="About Us" /></Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop:'.5rem', fontSize:'clamp(1.8rem,3.5vw,2.6rem)' }}>
              India's most <em>trusted</em> relocation company.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ marginTop:'1.2rem', fontSize:'1.02rem', lineHeight:1.85 }}>
              Founded in New Delhi in 2017, Shree Radhey Relocation Services is an ISO 9001:2015 certified company delivering professional relocation for households, corporations, industrial facilities and government institutions across India.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ marginTop:'.9rem', fontSize:'1.02rem', lineHeight:1.85 }}>
              From the President of India's Museum to WHO South-East Asia, Maharaja Express and 100+ industrial clients — our reputation is built on precision, safety and trust.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div style={{ display:'flex', gap:'2rem', flexWrap:'wrap', marginTop:'1.5rem' }}>
              {[{ n:'ISO', l:'9001:2015' },{ n:'50+', l:'Govt & MNC Clients' },{ n:'Pan', l:'India Network' }].map(s => (
                <div key={s.l} style={{ display:'flex', flexDirection:'column', gap:2 }}>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.6rem', fontWeight:700, color:'var(--sr-blue)', lineHeight:1 }}>{s.n}</span>
                  <span style={{ fontSize:'.7rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--txt-body)' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div style={{ marginTop:'2rem' }}>
              <button className="btn btn--blue" onClick={onLearnMore}>Know Our Story →</button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', background:'var(--navy)' }}>
        {[{ n:'2017', l:'Founded' },{ n:'100+', l:'Industrial Clients' },{ n:'1L+', l:'IT Assets Moved' },{ n:'8+', l:'Years of Trust' }].map((s, i) => (
          <div key={s.l} style={{ padding:'2rem 1.5rem', textAlign:'center', borderRight: i<3 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:700, color:'#fff', lineHeight:1 }}>{s.n}</div>
            <div style={{ fontSize:'.68rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.45)', marginTop:6 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── Why Choose Us — perfect 3×2 grid ── */}
      <div style={{ background:'var(--off-white)', padding:'var(--py) var(--px)' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
            <SectionLabel text="Why Choose Us" />
            <h2 style={{ marginTop:'.4rem' }}>The standard others <em>aspire to.</em></h2>
          </div>
        </Reveal>
        <div className="why-grid">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 55}>
              <div className="why-card">
                <div className="why-card__icon">{w.icon}</div>
                <div className="why-card__title">{w.t}</div>
                <div className="why-card__desc">{w.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <style>{`@media(max-width:700px){ #about .split-grid{grid-template-columns:1fr!important} }`}</style>
    </section>
  )
}
