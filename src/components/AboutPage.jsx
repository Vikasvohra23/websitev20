import { Reveal, SectionLabel, WaIcon } from './Shared'
import { YOUR_WA_NUMBER } from '../data/constants'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'

const TIMELINE = [
  { year:'2017', title:'Company Founded',        desc:'Started in New Delhi with a simple mission - professional relocation with a standard the industry lacked.' },
  { year:'2018', title:'WHO Partnership Begins', desc:'Selected as the relocation partner for WHO South-East Asia Regional Office - a relationship maintained for 8+ years.' },
  { year:'2019', title:'Industrial Division',    desc:'Expanded into industrial relocation, machine shifting and heavy equipment handling for automotive and manufacturing clients.' },
  { year:'2020', title:'Pandemic IT Migration',  desc:'Relocated IT assets for WNS and affiliated companies during the pandemic. Zero losses. Zero complaints.' },
  { year:'2021', title:'ISO 9001:2015 Certified',desc:'Achieved ISO certification, formalising quality management, safety protocols and SOPs across all verticals.' },
  { year:'2022', title:'Heritage & Art Division',desc:'Selected by Rashtrapati Bhawan\'s Art Secretariat for the Presidential Museum - packing rare sculptures, paintings and artifacts.' },
  { year:'2023', title:'G20 Summit Logistics',   desc:'Complete logistics, setup and dismantling for the G20 Handicraft Pavilion at Bharat Mandapam for CCIC and EPCH.' },
  { year:'2024+', title:'Growing Pan-India',     desc:'Serving 100+ corporate, industrial and government clients with the same quality that built our reputation since 2017.' },
]
const EQUIPMENT = [
  { cat:'Heavy Lifting',     items:['Hydraulic Jacks - 50T','60-Tonne Roller Systems','Forklifts & Cranes','Chain Pulley Blocks','10T Hand Pallet'] },
  { cat:'Material Handling', items:['Electric Forklifts','Hand Pallet Trucks','Rigging Slings & Chains','Custom Skidding Systems'] },
  { cat:'Packing',           items:['Vacuum Packing Machines','Pine & Saw Wood Crating','LED Boxes (TV Safety)','Fabric Furniture Sheets'] },
  { cat:'Transport',         items:['GPS-Tracked Closed Trucks','Dedicated Trailers','Flatbed Vehicles','Specialist Carriers'] },
]

export default function AboutPage({ onBack }) {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about` },
    ],
  }

  useDocumentHead({
    title: 'About Us | Shree Radhey Relocation Services - 9 Years of Trust',
    description: "ISO 9001:2015 certified relocation company in New Delhi offering household, office, industrial, export packing and logistics services across India. Founded 2017.",
    path: '/about',
    jsonLd: breadcrumbLd,
    jsonLdId: 'about-page',
  })

  return (
    <main className="page-enter" itemScope itemType="https://schema.org/Organization">
      {/* ── Sticky breadcrumb below nav ── */}
      <div className="breadcrumb-bar">
        <button className="btn btn--outline-blue btn--lg" onClick={onBack}>Back to About</button>
      </div>

      {/* ── SEO hidden org data ── */}
      <span className="seo-text" itemProp="name">Shree Radhey Relocation Services</span>
      <span className="seo-text" itemProp="foundingDate">2017</span>
      <span className="seo-text" itemProp="description">ISO 9001:2015 certified relocation company in New Delhi offering household, office, industrial, export packing and logistics services across India.</span>

      {/* ── Hero ── */}
      <div style={{ position:'relative', height:'clamp(340px,42vw,520px)', overflow:'hidden' }}>
        <img
          src="/How%20we%20deliver/how%20we%20deliver%204.jpg"
          alt="Shree Radhey Relocation Services professional team"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 35%' }}
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg,rgba(8,15,36,.85) 0%,rgba(8,15,36,.4) 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'var(--px) var(--px) 3.5rem' }}>
          <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(255,255,255,.6)', marginBottom:'.8rem' }}>About Us</div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2rem,5vw,4rem)', fontWeight:700, color:'#fff', lineHeight:1.1, maxWidth:640 }}>
            Eight years of precision,<br /><em style={{ color:'var(--gold-lt)', fontStyle:'italic' }}>earned one project at a time.</em>
          </h1>
        </div>
      </div>

      {/* ── Story + Mission/Vision ── */}
      <section style={{ background:'#fff', padding:'var(--py) var(--px)' }}>
        <div className="two-col">
          <div>
            <Reveal><SectionLabel text="Our Story" /></Reveal>
            <Reveal delay={80}><h2 style={{ marginTop:'.4rem' }}>From household moves to <em>presidential museums.</em></h2></Reveal>
            <Reveal delay={140}>
              <p style={{ marginTop:'1.2rem' }}>Shree Radhey Relocation Services was founded in 2017 with one conviction: India deserved a relocation company that treated every project - a studio apartment or a factory floor  with the same rigour and professionalism.</p>
              <p style={{ marginTop:'.9rem' }}>That belief attracted clients with the highest stakes. WHO South-East Asia trusted us with their office. Rashtrapati Bhawan trusted us with irreplaceable presidential artifacts. IRCTC trusted us with the Maharaja Express interiors. These are not transactions - they are partnerships built over years of consistent delivery.</p>
              <p style={{ marginTop:'.9rem' }}>Today we serve 100+ corporate and industrial clients across India, ISO certified and led by the same founding values: integrity, safety, accountability and customer satisfaction.</p>
            </Reveal>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'1.2rem' }}>
            {[
              { icon:'🎯', t:'Our Mission', d:'To provide reliable, efficient and safe relocation solutions that exceed customer expectations through professionalism, innovation and quality service.' },
              { icon:'🔭', t:'Our Vision',  d:"To become India's most trusted and respected relocation, logistics and industrial movement company - known for precision, safety and the clients who trust us." },
              { icon:'❤️', t:'Our Values',  d:'Integrity · Safety · Reliability · Professionalism · Accountability · Customer Satisfaction - operating principles enforced on every job.' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="hover-float" style={{ background:'var(--off-white)', border:'1.5px solid var(--border-lt)', borderRadius:'var(--radius)', padding:'1.5rem', display:'flex', gap:'1rem' }}>
                  <span style={{ fontSize:'1.8rem', flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'1.05rem', marginBottom:'.4rem' }}>{c.t}</div>
                    <p style={{ fontSize:'.92rem' }}>{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ background:'var(--off-white)', padding:'var(--py) var(--px)' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'3rem' }}>
            <SectionLabel text="Our Journey" />
            <h2 style={{ marginTop:'.4rem' }}>A timeline of <em>milestones.</em></h2>
          </div>
        </Reveal>
        <div className="timeline" style={{ position:'relative', maxWidth:800, margin:'0 auto' }}>
          <div className="timeline__spine" style={{ position:'absolute', left:'calc(50% - 1px)', top:0, bottom:0, width:2, background:'var(--border-lt)' }} />
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <div className="timeline__row" style={{ display:'grid', gridTemplateColumns:'1fr 48px 1fr', gap:'1rem', marginBottom:'2rem', alignItems:'start' }}>
                {i % 2 === 0
                  ? <div className="timeline__text timeline__text--right" style={{ textAlign:'right', paddingRight:'1.2rem', paddingTop:'.3rem' }}>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'1.05rem', color:'var(--txt-dark)' }}>{t.title}</div>
                      <p style={{ fontSize:'.88rem', marginTop:'.35rem' }}>{t.desc}</p>
                    </div>
                  : <div className="timeline__spacer" />
                }
                <div className="timeline__node" style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', background:'var(--sr-blue)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:'0 0 0 5px var(--off-white), 0 0 0 7px var(--border-lt)', zIndex:1 }}>
                    <span style={{ fontSize:'.6rem', fontWeight:700, color:'#fff', letterSpacing:'.04em' }}>{t.year.slice(0,4)}</span>
                  </div>
                </div>
                {i % 2 === 1
                  ? <div className="timeline__text timeline__text--left" style={{ paddingLeft:'1.2rem', paddingTop:'.3rem' }}>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'1.05rem', color:'var(--txt-dark)' }}>{t.title}</div>
                      <p style={{ fontSize:'.88rem', marginTop:'.35rem' }}>{t.desc}</p>
                    </div>
                  : <div className="timeline__spacer" />
                }
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Equipment ── */}
      <section style={{ background:'#fff', padding:'var(--py) var(--px)' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
            <SectionLabel text="Our Equipment" />
            <h2 style={{ marginTop:'.4rem' }}>The right tools for <em>every job.</em></h2>
          </div>
        </Reveal>
        <div className="four-col stagger-children">
          {EQUIPMENT.map(e => (
            <div key={e.cat} className="hover-float" style={{ background:'var(--off-white)', border:'1.5px solid var(--border-lt)', borderRadius:'var(--radius)', padding:'1.5rem' }}>
              <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'.8rem', paddingBottom:'.6rem', borderBottom:'2px solid var(--sr-red)' }}>{e.cat}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.5rem' }}>
                {e.items.map(item => (
                  <li key={item} style={{ fontSize:'.9rem', color:'var(--txt-body)', display:'flex', gap:'.6rem', alignItems:'center' }}>
                    <span style={{ width:6, height:6, background:'var(--sr-blue)', borderRadius:'50%', flexShrink:0 }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:'var(--navy)', padding:'5rem var(--px)', textAlign:'center' }}>
        <Reveal>
          <h2 style={{ color:'#fff' }}>Ready to work with <em>India's most trusted movers?</em></h2>
          <p style={{ maxWidth:480, margin:'1rem auto 0', color:'rgba(255,255,255,.7)' }}>Free site survey. Detailed quotation. Response within the hour.</p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginTop:'2rem' }}>
            <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need a relocation quote.')}`}
               target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg">
              <WaIcon /> WhatsApp Us
            </a>
            <button className="btn btn--outline-white btn--lg" onClick={onBack}>← Back</button>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
