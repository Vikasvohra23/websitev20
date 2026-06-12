import { useState } from 'react'
import { YOUR_WA_NUMBER } from '../data/constants'
import { Reveal, SectionLabel, WaIcon } from './Shared'

const FAQ_DATA = {
  General: [
    { q:'How long have you been in business?',         a:'Shree Radhey Relocation Services was established in 2017. We are ISO 9001:2015 certified and have been the trusted relocation partner for WHO South-East Asia for 8 consecutive years.' },
    { q:'Are you ISO certified?',                       a:'Yes. We hold ISO 9001:2015 certification, meaning our quality management systems, safety protocols and processes are independently audited and documented.' },
    { q:'Do you provide a free site survey?',           a:'Yes. Free on-site surveys are available for industrial, commercial and large residential projects. This helps us provide an accurate estimate and proper project plan.' },
    { q:'Do you serve locations outside Delhi?',        a:'Yes. We provide relocation and logistics services across India. Our transportation network covers all major cities and industrial corridors.' },
  ],
  Pricing: [
    { q:'How is relocation cost calculated?',          a:'Cost depends on distance, volume, manpower, equipment required and project scope. Use our Instant Estimate calculator for household moves, or request a free site survey for commercial and industrial projects.' },
    { q:'Do you provide transit insurance?',           a:'Yes. Transit insurance is available at 2.5% of declared value. We provide documentation from a named, verifiable insurer — not just a verbal assurance.' },
    { q:'Do you charge for packing materials?',        a:'Packing materials are included in the quotation. We use professional-grade materials suited to each item — bubble wrap, stretch film, wooden crates, vacuum packing, LED boxes for TVs and fabric sheets for furniture.' },
    { q:'Is a goods inventory provided?',              a:'Yes. A complete itemised inventory with photographs is provided at the packing stage, giving you full visibility of everything packed and a record for insurance purposes.' },
  ],
  Services: [
    { q:'Can you relocate industrial machinery?',      a:'Yes. Industrial relocation and machine shifting are core specialities. We use 30-ton hydraulic jacks, 40-ton rollers, cranes and specialised rigging systems for complex machinery projects.' },
    { q:'Do you handle export packing?',               a:'Yes. Vacuum packing, ISPM-15 certified wooden crating, moisture protection and container stuffing for international shipments to USA, UK, Australia, Canada, Dubai and more.' },
    { q:'Do you handle government projects?',          a:'Yes. We have worked with Rashtrapati Bhawan, WHO South-East Asia, IRCTC, EPCH and CCIC. Government clients are welcome to request references and credentials.' },
    { q:'Can you work weekends and night shifts?',     a:'Yes. We regularly execute projects during weekends, public holidays and overnight shifts to minimise disruption to business operations and household routines.' },
  ],
  Operations: [
    { q:'Do you co-load with other customers?',        a:'No. We never co-load your consignment with another customer\'s goods. Your move gets a dedicated vehicle — a key reason goods arrive without damage or delay.' },
    { q:'Is GPS tracking available?',                  a:'Yes. All vehicles carry GPS tracking and you can request live status updates on your consignment throughout transit.' },
    { q:'Do you provide warehousing?',                 a:'Yes. Short-term and long-term warehousing for residential, commercial and industrial goods. Secure, monitored facilities across Delhi NCR.' },
    { q:'Who is my point of contact during the move?', a:'You are assigned a dedicated Shifting Assistant — a single point of contact from Day 1 to final handover and feedback. No being passed between departments or teams.' },
  ],
}

const CAT_META = {
  General:    { icon:'ℹ️',  color:'#1B3A8C' },
  Pricing:    { icon:'💰',  color:'#157a40' },
  Services:   { icon:'🚛',  color:'#b85a10' },
  Operations: { icon:'⚙️',  color:'#6B2737' },
}

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom:'1.5px solid var(--border-lt)' }}>
      <button
        onClick={onToggle}
        style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', padding:'1.3rem 0', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}
        aria-expanded={open}
      >
        <span style={{ fontSize:'1rem', fontWeight:600, color:'var(--txt-dark)', lineHeight:1.4 }}>{q}</span>
        <span style={{
          width:30, height:30, borderRadius:'50%',
          border:'2px solid var(--sr-blue)',
          display:'flex', alignItems:'center', justifyContent:'center',
          flexShrink:0, fontWeight:700, fontSize:'1.1rem',
          background: open ? 'var(--sr-blue)' : 'transparent',
          color: open ? '#fff' : 'var(--sr-blue)',
          transform: open ? 'rotate(45deg)' : 'none',
          transition:'all .25s',
        }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom:'1.3rem', fontSize:'.97rem', color:'var(--txt-body)', lineHeight:1.85, animation:'fadeUp .22s ease' }}>{a}</div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [activeCat, setActiveCat] = useState('General')
  const [openIdx,   setOpenIdx]   = useState(0)
  const faqs = FAQ_DATA[activeCat]

  return (
    <section id="faq" className="section sec-white">
      <div className="faq-layout">

        {/* LEFT — sticky panel */}
        <div className="faq-sticky" style={{ position:'sticky', top:'calc(var(--nav-h) + 20px)' }}>
          <Reveal>
            <SectionLabel text="FAQ" />
            <h2 style={{ marginTop:'.4rem', fontSize:'clamp(1.8rem,3vw,2.4rem)' }}>Common <em>questions.</em></h2>
            <p style={{ marginTop:'1rem', fontSize:'.97rem', lineHeight:1.8 }}>
              Everything you need to know before starting your project.
            </p>
          </Reveal>

          {/* Category tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem', marginTop:'1.6rem' }}>
            {Object.entries(CAT_META).map(([cat, meta]) => (
              <button key={cat} onClick={() => { setActiveCat(cat); setOpenIdx(0) }}
                style={{
                  display:'flex', alignItems:'center', gap:'.75rem', padding:'.82rem 1rem',
                  border:`1.5px solid ${activeCat===cat ? meta.color : 'var(--border-lt)'}`,
                  borderRadius:'var(--radius-sm)',
                  background: activeCat===cat ? `${meta.color}11` : '#fff',
                  cursor:'pointer', transition:'all .2s', textAlign:'left',
                  fontFamily:"'Inter',sans-serif",
                }}>
                <span style={{ fontSize:'1.1rem' }}>{meta.icon}</span>
                <span style={{ fontSize:'.83rem', fontWeight:700, color: activeCat===cat ? meta.color : 'var(--txt-body)', flex:1 }}>{cat}</span>
                {activeCat===cat && <span style={{ fontSize:'.7rem', color:meta.color }}>▶</span>}
              </button>
            ))}
          </div>

          {/* WA CTA */}
          <div style={{ marginTop:'1.4rem', padding:'1.3rem', background:'var(--off-white)', borderRadius:'var(--radius)', border:'1.5px solid var(--border-lt)' }}>
            <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--sr-blue)', marginBottom:'.4rem' }}>Still have a question?</div>
            <p style={{ fontSize:'.87rem', marginBottom:'.9rem', lineHeight:1.6 }}>Our team responds within the hour, even on weekends.</p>
            <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I have a question about your services.')}`}
               target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--sm" style={{ width:'100%' }}>
              <WaIcon /> Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — accordion — always full of content, no blank space */}
        <div>
          <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color: CAT_META[activeCat].color, marginBottom:'1.4rem', display:'flex', alignItems:'center', gap:'.5rem' }}>
            <span>{CAT_META[activeCat].icon}</span> {activeCat} Questions
          </div>
          {faqs.map((f, i) => (
            <Reveal key={`${activeCat}-${i}`} delay={i * 35}>
              <AccordionItem q={f.q} a={f.a} open={openIdx===i} onToggle={() => setOpenIdx(o => o===i ? null : i)} />
            </Reveal>
          ))}

          {/* Bottom trust strip — fills remaining space visually */}
          <Reveal delay={200}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginTop:'2.5rem' }}>
              {[
                { icon:'🏅', t:'ISO 9001:2015',       d:'Certified quality management.' },
                { icon:'📍', t:'GPS Tracked',          d:'Live tracking on all vehicles.' },
                { icon:'🛡️', t:'Goods Insurance',     d:'2.5% of declared value.' },
                { icon:'🤝', t:'24×7 Support',         d:'Always reachable, always responsive.' },
              ].map(w => (
                <div key={w.t} style={{ display:'flex', gap:'.7rem', padding:'.9rem', background:'var(--off-white)', borderRadius:'var(--radius-sm)', border:'1.5px solid var(--border-lt)', alignItems:'flex-start' }}>
                  <span style={{ fontSize:'1.2rem', flexShrink:0 }}>{w.icon}</span>
                  <div>
                    <div style={{ fontSize:'.78rem', fontWeight:700, color:'var(--txt-dark)', marginBottom:2 }}>{w.t}</div>
                    <div style={{ fontSize:'.8rem', color:'var(--txt-body)' }}>{w.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
