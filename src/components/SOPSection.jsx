import { Reveal, SectionLabel } from './Shared'

const STEPS = [
  { step:'01', icon:'🔍', title:'Free Site Survey',           desc:'On-site survey for every industrial, commercial and large residential project. We assess routes, floor loads and project complexity before a single rupee is quoted.',
    img:'/How%20we%20deliver/how%20we%20deliver%201.png' },
  { step:'02', icon:'📋', title:'Detailed Project Planning',  desc:'Movement sequence planned step by step. Phased schedules for corporate moves. Shutdown planning for industrial projects. Single director gives all instructions on complex lifts.',
    img:'/How%20we%20deliver/how%20we%20deliver%202.png' },
  { step:'03', icon:'📦', title:'Professional Grade Packing', desc:'Bubble wrap, fabric sheets, LED boxes for TVs, VCI vacuum film for metal equipment, pine-wood crating for exports. Full goods inventory provided at packing stage.',
    img:'/How%20we%20deliver/how%20we%20deliver%203.jpg' },
  { step:'04', icon:'🦺', title:'Full Safety Protocol',        desc:'No crew works without PPE. Health insurance for all packing, loading and unloading personnel. Zero improvisation on complex lifts — every step is planned and supervised.',
    img:'/How%20we%20deliver/how%20we%20deliver%204.jpg' },
  { step:'05', icon:'🏗️', title:'Specialist Equipment',       desc:'30-ton hydraulic jacks, 40-ton rollers, cranes, forklifts, chain pulley blocks, rigging slings. Right equipment selected per job — never improvised.',
    img:'/How%20we%20deliver/how%20we%20deliver%205.jpg' },
  { step:'06', icon:'🚚', title:'GPS-Tracked Transport',      desc:'Dedicated vehicles — no co-loading your consignment. GPS tracking live throughout transit. Time-critical deliveries managed with dedicated fleet allocation.',
    img:'/How%20we%20deliver/how%20we%20deliver%206.png' },
  { step:'07', icon:'📐', title:'Precision Placement',        desc:'Machines placed per layout drawings. Precision levelling post-relocation for CNC and precision equipment. Alignment verified before handover.',
    img:'/How%20we%20deliver/how%20we%20deliver%207.jpg' },
  { step:'08', icon:'🤝', title:'Personal Shifting Assistant', desc:'One dedicated coordinator from Day 1 to final handover. 24×7 support. Single point of contact. Feedback collected and documented at project completion.',
    img:'/How%20we%20deliver/how%20we%20deliver%208.jpg' },
]

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

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap:'1.5rem', marginTop:'2.5rem' }}>
        {STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 45}>
            <div style={{ background:'#fff', borderRadius:'var(--radius)', overflow:'hidden', border:'1.5px solid var(--border-lt)', boxShadow:'var(--shadow-sm)', transition:'all .3s', cursor:'default' }}
                 onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='var(--shadow-lg)'; e.currentTarget.style.borderColor='var(--sr-blue)' }}
                 onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='var(--shadow-sm)'; e.currentTarget.style.borderColor='' }}>
              {/* Image */}
              <div style={{ height:140, overflow:'hidden', position:'relative' }}>
                <img src={s.img} alt={s.title} loading="lazy"
                     style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .5s' }}
                     onMouseEnter={e => e.currentTarget.style.transform='scale(1.06)'}
                     onMouseLeave={e => e.currentTarget.style.transform='scale(1)'} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(8,15,36,.5) 0%,transparent 60%)' }} />
                <div style={{ position:'absolute', bottom:'.7rem', left:'.9rem', fontFamily:"'Playfair Display',serif", fontSize:'2.5rem', fontWeight:700, color:'rgba(255,255,255,.25)', lineHeight:1 }}>{s.step}</div>
              </div>
              {/* Text */}
              <div style={{ padding:'1.2rem 1.4rem' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'.5rem', marginBottom:'.5rem' }}>
                  <span style={{ fontSize:'1.3rem' }}>{s.icon}</span>
                  <span style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--txt-dark)' }}>{s.title}</span>
                </div>
                <p style={{ fontSize:'.87rem', color:'var(--txt-body)', lineHeight:1.72 }}>{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

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
