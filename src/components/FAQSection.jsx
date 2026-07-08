import { useState } from 'react'
import { YOUR_WA_NUMBER, FAQ_DATA } from '../data/constants'
import { Reveal, SectionLabel, WaIcon } from './Shared'

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
