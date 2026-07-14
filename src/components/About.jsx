import { STATS, CREDENTIALS } from '../data/constants'
import { Reveal, SectionLabel } from './Shared'

export default function About() {
  return (
    <>
      {/* ── HOMEPAGE TEASER ─────────────────────────────────── */}
      <section id="about" style={{ background:'var(--off-white)' }}>
        <div className="about-teaser">
          {/* Left — real photo */}
          <div className="about-teaser__img">
            <img
              src="/images/about-1.jpg"
              alt="SR Relocation team at work - industrial machinery handling"
            />
            <div className="about-teaser__img-overlay" />
          </div>

          {/* Right — content */}
          <div className="about-teaser__content">
            <Reveal><SectionLabel text="About Us" /></Reveal>
            <Reveal delay={80}>
              <h2>Eight years of <em>earned trust.</em></h2>
            </Reveal>

            <Reveal delay={140}>
              <blockquote className="about-quote">
                "We don't just transport your goods - we move them with your feelings intact, so wherever you go, you always feel the same."
              </blockquote>
              <p style={{ fontSize:'.78rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--sr-blue)', marginBottom:'1.2rem' }}>
                - Sanjeev Vohra, Head of Operations
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p>
                Founded in 2017, Shree Radhey Relocation Services has grown from a household-shifting company into one of India's most trusted names in industrial relocation, heritage packing, export logistics and government project execution. Based in New Delhi, we serve clients across India.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="about-cred-list" style={{ marginTop:'1.5rem' }}>
                {CREDENTIALS.map((c, i) => (
                  <div key={i} className="about-cred">
                    <div className="about-cred__dot" />
                    <div>
                      <div className="about-cred__org">{c.org}</div>
                      <div className="about-cred__desc">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div style={{ display:'flex', gap:'1rem', marginTop:'2rem', flexWrap:'wrap' }}>
                <a href="#contact" className="btn btn--blue">
                  Discuss Your Project
                </a>
                <a href="#gallery" className="btn btn--outline-blue" onClick={e => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior:'smooth' }) }}>
                  View Our Work
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <div className="stats-row">
        {[
          { n:'2017', l:'Founded' },
          { n:'100+', l:'Industrial Clients' },
          { n:'1L+',  l:'IT Assets Relocated' },
          { n:'9+',   l:'Years of Trust' },
        ].map(s => (
          <div key={s.l} className="stat-box">
            <div className="stat-box__n">{s.n}</div>
            <div className="stat-box__l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── WHY CHOOSE — full band with image ───────────────── */}
      <section className="section sec-white">
        <div className="two-col" style={{ alignItems:'center' }}>
          <div>
            <Reveal><SectionLabel text="Why Choose Us" /></Reveal>
            <Reveal delay={80}><h2>ISO Certified. <em>Precision-driven.</em></h2></Reveal>
            <Reveal delay={130}>
              <p style={{ marginTop:'.8rem' }}>
                We are ISO 9001:2015 certified — our processes, safety protocols and quality checks are documented and followed on every project, from a household move to a 40-tonne industrial relocation.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.2rem', marginTop:'2rem' }}>
                {[
                  { icon:'✅', t:'ISO 9001:2015',      d:'Certified quality management for every project.' },
                  { icon:'🛡️', t:'Goods Insurance',    d:'Transit insurance at 2.5% of declared value.' },
                  { icon:'📍', t:'GPS Tracking',        d:'Live consignment tracking on all vehicles.' },
                  { icon:'📋', t:'Goods Inventory',     d:'Full itemised inventory provided at packing.' },
                  { icon:'🦺', t:'Safety First',        d:'PPE mandatory. Health insurance for all crew.' },
                  { icon:'🤝', t:'Shifting Assistant',  d:'Personal coordinator from Day 1 to handover.' },
                ].map(w => (
                  <div key={w.t} style={{ display:'flex', gap:'.8rem', alignItems:'flex-start', padding:'1rem', background:'var(--off-white)', borderRadius:'var(--radius-sm)', border:'1px solid var(--border-lt)' }}>
                    <span style={{ fontSize:'1.3rem', flexShrink:0, marginTop:2 }}>{w.icon}</span>
                    <div>
                      <div style={{ fontSize:'.78rem', fontWeight:700, color:'var(--txt-dark)', marginBottom:3 }}>{w.t}</div>
                      <div style={{ fontSize:'.82rem', color:'var(--txt-body)' }}>{w.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div style={{ position:'relative', borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-xl)' }}>
              <img
                src="/images/about-2.jpg"
                alt="Team with safety equipment at industrial site"
                style={{ width:'100%', height:480, objectFit:'cover', display:'block' }}
              />
              {/* Floating ISO badge */}
              <div style={{ position:'absolute', bottom:'1.5rem', left:'1.5rem', background:'rgba(255,255,255,.95)', borderRadius:'var(--radius-sm)', padding:'.9rem 1.2rem', boxShadow:'var(--shadow-md)', display:'flex', alignItems:'center', gap:'.8rem' }}>
                <span style={{ fontSize:'1.6rem' }}>🏅</span>
                <div>
                  <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--sr-red)' }}>ISO Certified</div>
                  <div style={{ fontSize:'.82rem', fontWeight:600, color:'var(--txt-dark)' }}>9001:2015 Certified</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EQUIPMENT LIST ─────────────────────────────────── */}
      <section className="section sec-off" style={{ paddingTop:'3rem', paddingBottom:'3rem' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <SectionLabel text="Our Equipment" />
            <h3 style={{ marginTop:'.4rem' }}>The right tools for <em>every job.</em></h3>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'.8rem', justifyContent:'center' }}>
            {['Hydraulic Jacks (30T)','40-Ton Rollers','Overhead Cranes','Forklifts','Chain Pulley Blocks','Hand Pallets','Rigging Slings','Vacuum Packing Machines','Pine Wood Crating','Custom Foam Inserts','GPS Tracked Trucks','Dedicated Trailers'].map(e => (
              <span key={e} style={{ padding:'.5rem 1.2rem', background:'#fff', border:'1.5px solid var(--border-lt)', borderRadius:6, fontSize:'.82rem', fontWeight:500, color:'var(--txt-body)' }}>{e}</span>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  )
}
