import { useState, useEffect, useCallback } from 'react'
import { YOUR_WA_NUMBER } from '../data/constants'
import { WaIcon } from './Shared'

const SLIDES = [
  {
    bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80',
    badge: 'Special Offer',
    heading: 'Stress-Free Home Shifting',
    sub: 'Professional packing, safe transport, careful placement. Free site survey for all residential bookings.',
    cta: 'Book a Free Survey',
    msg: 'Hello! I am interested in your household relocation services. Please provide a quote.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80',
    badge: 'Warehousing & Storage',
    heading: 'Secure Storage Solutions',
    sub: 'Short-term and long-term warehousing for residential, commercial and industrial goods. Monitored facilities across Delhi NCR.',
    cta: 'Enquire About Storage',
    msg: 'Hello! I need warehousing/storage information. Please share details.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80',
    badge: 'Transportation & Logistics',
    heading: 'Pan-India Logistics Network',
    sub: 'Full truck load, part load and dedicated transport. GPS-tracked fleet for commercial goods, industrial cargo and project logistics.',
    cta: 'Plan Your Shipment',
    msg: 'Hello! I need transportation/logistics services. Please provide details.',
  },
]

export default function PromoBanner() {
  const [cur, setCur] = useState(0)
  const next = useCallback(() => setCur(c => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCur(c => (c - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const s = SLIDES[cur]

  return (
    <div style={{ position:'relative', height:'clamp(300px,38vw,520px)', overflow:'hidden' }}>
      {/* Slides */}
      {SLIDES.map((sl, i) => (
        <div key={i} style={{
          position:'absolute', inset:0,
          backgroundImage:`url(${sl.bg})`,
          backgroundSize:'cover', backgroundPosition:'center',
          opacity: i === cur ? 1 : 0,
          transition:'opacity .9s ease',
        }} />
      ))}

      {/* Overlay */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg,rgba(8,15,36,.82) 0%,rgba(8,15,36,.45) 60%,rgba(8,15,36,.2) 100%)' }} />

      {/* Content */}
      <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 var(--px)', maxWidth:700, zIndex:2 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:'1rem' }}>
          <span style={{ background:'var(--sr-red)', color:'#fff', fontSize:'.62rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', padding:'.28rem .85rem', borderRadius:4 }}>
            {s.badge}
          </span>
        </div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'clamp(1.8rem,4vw,3rem)', color:'#fff', lineHeight:1.12, animation:'fadeUp .6s ease both' }} key={`h-${cur}`}>
          {s.heading}
        </h2>
        <p style={{ marginTop:'.9rem', fontSize:'clamp(.95rem,1.8vw,1.05rem)', color:'rgba(255,255,255,.78)', maxWidth:480, lineHeight:1.75, animation:'fadeUp .6s ease .12s both' }} key={`p-${cur}`}>
          {s.sub}
        </p>
        <div style={{ display:'flex', gap:'.9rem', flexWrap:'wrap', marginTop:'1.8rem', animation:'fadeUp .6s ease .22s both' }} key={`c-${cur}`}>
          <a href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent(s.msg)}`}
             target="_blank" rel="noopener noreferrer"
             className="btn btn--red btn--lg" style={{ gap:'.5rem' }}>
            <WaIcon /> {s.cta}
          </a>
          <a href="#estimate" className="btn btn--outline-white btn--lg">Get Free Estimate</a>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} style={{ position:'absolute', left:'1.5rem', top:'50%', transform:'translateY(-50%)', zIndex:3, width:44, height:44, borderRadius:'50%', border:'2px solid rgba(255,255,255,.3)', background:'rgba(8,15,36,.4)', backdropFilter:'blur(8px)', color:'#fff', fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
           onMouseEnter={e => e.currentTarget.style.background='var(--sr-blue)'} onMouseLeave={e => e.currentTarget.style.background='rgba(8,15,36,.4)'}>←</button>
      <button onClick={next} style={{ position:'absolute', right:'1.5rem', top:'50%', transform:'translateY(-50%)', zIndex:3, width:44, height:44, borderRadius:'50%', border:'2px solid rgba(255,255,255,.3)', background:'rgba(8,15,36,.4)', backdropFilter:'blur(8px)', color:'#fff', fontSize:'1rem', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .2s' }}
           onMouseEnter={e => e.currentTarget.style.background='var(--sr-blue)'} onMouseLeave={e => e.currentTarget.style.background='rgba(8,15,36,.4)'}>→</button>

      {/* Dots */}
      <div style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', zIndex:3, display:'flex', gap:8 }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} style={{ width: i === cur ? 40 : 24, height:4, borderRadius:2, border:'none', background: i === cur ? '#fff' : 'rgba(255,255,255,.35)', cursor:'pointer', transition:'all .35s', padding:0 }} />
        ))}
      </div>
    </div>
  )
}
