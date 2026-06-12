import { useState } from 'react'
import { SERVICE_PAGES } from '../data/constants'
import { Reveal, SectionLabel, WaIcon } from './Shared'

const SERVICE_IMAGES = {
  'household-relocation':  'https://images.unsplash.com/photo-1521334884684-d80222895322?w=1400&q=80',
  'office-relocation':     'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80',
  'industrial-relocation': 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80',
  'machine-shifting':      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80',
  'export-packing':        'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80',
  'exhibition-logistics':  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80',
  'transportation':        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80',
  'warehousing':           'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80',
  'project-logistics':     'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
  'heritage-packing':      'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1400&q=80',
  'premium-relocation':    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80',
}

export default function ServiceDetail({ slug, onBack }) {
  const page = SERVICE_PAGES[slug]
  const [tab, setTab] = useState('scope')
  if (!page) return null

  const img = SERVICE_IMAGES[slug] || SERVICE_IMAGES['industrial-relocation']
  const waMsg = encodeURIComponent(`Hello! I'd like a quote for ${page.title}.`)

  return (
    <main className="page-enter" itemScope itemType="https://schema.org/Service">
      {/* ── Sticky breadcrumb — always below fixed nav ── */}
      <div className="breadcrumb-bar">
        <button className="breadcrumb-btn" onClick={onBack}>Back to Services</button>
      </div>

      {/* ── SEO ── */}
      <span className="seo-text" itemProp="name">{page.title}</span>
      <span className="seo-text" itemProp="description">{page.metaDesc}</span>
      <span className="seo-text" itemProp="provider" itemScope itemType="https://schema.org/Organization">
        <span itemProp="name">Shree Radhey Relocation Services</span>
      </span>

      {/* ── Hero ── */}
      <div style={{ position:'relative', height:'clamp(280px,36vw,460px)', overflow:'hidden' }}>
        <img src={img} alt={page.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg,rgba(8,15,36,.85) 0%,rgba(8,15,36,.45) 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'var(--px) var(--px) 3rem' }}>
          <div style={{ fontSize:'.7rem', fontWeight:700, letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(255,255,255,.6)', marginBottom:'.7rem' }}>Our Services</div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2rem,5vw,3.8rem)', fontWeight:700, color:'#fff', lineHeight:1.1 }} itemProp="name">{page.title}</h1>
          <p style={{ marginTop:'.8rem', fontSize:'clamp(.95rem,2vw,1.1rem)', color:'rgba(255,255,255,.78)', fontStyle:'italic', fontFamily:"'Playfair Display',serif", maxWidth:600 }}>{page.tagline}</p>
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div style={{ background:'var(--off-white)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 320px', gap:'2.5rem', padding:'3rem var(--px) var(--py)', maxWidth:1200, margin:'0 auto' }}>

          {/* Main content */}
          <div>
            <Reveal>
              <p style={{ fontSize:'1.02rem', lineHeight:1.9, color:'var(--txt-body)' }}>{page.hero}</p>
            </Reveal>

            {/* Tabs */}
            <Reveal delay={80}>
              <div style={{ display:'flex', gap:0, border:'1.5px solid var(--border-lt)', borderRadius:8, overflow:'hidden', marginTop:'2.5rem', width:'fit-content' }}>
                {['scope','process'].map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    style={{ padding:'.75rem 1.8rem', border:'none', background: tab===t ? 'var(--sr-blue)' : '#fff', color: tab===t ? '#fff' : 'var(--txt-body)', fontSize:'.78rem', fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', transition:'all .2s', borderRight: t==='scope' ? '1.5px solid var(--border-lt)' : 'none', fontFamily:"'Inter',sans-serif" }}>
                    {t==='scope' ? '📋 Scope of Work' : '⚙️ How We Work'}
                  </button>
                ))}
              </div>
            </Reveal>

            {tab === 'scope' && (
              <Reveal delay={100}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,260px),1fr))', gap:'.8rem', marginTop:'1.5rem' }}>
                  {page.services.map((s, i) => (
                    <div key={i} className="hover-float" style={{ display:'flex', gap:'.75rem', alignItems:'center', padding:'.9rem 1.1rem', background:'#fff', borderRadius:'var(--radius-sm)', border:'1.5px solid var(--border-lt)', fontSize:'.92rem', fontWeight:500, color:'var(--txt-dark)', boxShadow:'var(--shadow-sm)' }}>
                      <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--sr-red)', flexShrink:0 }} />{s}
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {tab === 'process' && (
              <Reveal delay={100}>
                <div style={{ marginTop:'1.5rem', display:'flex', flexDirection:'column', gap:'.8rem' }}>
                  {page.process.map((p, i) => (
                    <div key={i} className="hover-float" style={{ display:'flex', gap:'1.2rem', alignItems:'flex-start', padding:'1.4rem', background:'#fff', borderRadius:'var(--radius-sm)', border:'1.5px solid var(--border-lt)', boxShadow:'var(--shadow-sm)' }}>
                      <div style={{ width:42, height:42, borderRadius:'50%', background:'var(--sr-blue)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.75rem', fontWeight:700, flexShrink:0 }}>{p.step}</div>
                      <div>
                        <div style={{ fontSize:'.88rem', fontWeight:700, color:'var(--txt-dark)', marginBottom:'.3rem' }}>{p.title}</div>
                        <p style={{ fontSize:'.9rem', color:'var(--txt-body)', lineHeight:1.75 }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sticky sidebar */}
          <div style={{ position:'sticky', top:'calc(var(--nav-h) + 16px)', alignSelf:'start' }}>
            <div style={{ background:'#fff', borderRadius:'var(--radius)', border:'1.5px solid var(--border-lt)', boxShadow:'var(--shadow-lg)', overflow:'hidden' }}>
              <div style={{ background:'var(--sr-blue)', padding:'1.5rem', color:'#fff' }}>
                <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(255,255,255,.65)', marginBottom:'.4rem' }}>Get Started</div>
                <h4 style={{ color:'#fff', fontSize:'1.1rem', fontFamily:"'Playfair Display',serif" }}>Request a Free Quote</h4>
                <p style={{ fontSize:'.82rem', color:'rgba(255,255,255,.7)', marginTop:'.3rem' }}>We respond within 1 hour.</p>
              </div>
              <div style={{ padding:'1.4rem', display:'flex', flexDirection:'column', gap:'.9rem' }}>
                <a href={`https://wa.me/919319571414?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ width:'100%' }}>
                  <WaIcon /> WhatsApp Us Now
                </a>
                <button className="btn btn--outline-blue" style={{ width:'100%' }}
                  onClick={() => { onBack(); setTimeout(() => document.getElementById('estimate')?.scrollIntoView({ behavior:'smooth' }), 120) }}>
                  Get Instant Estimate
                </button>
                <div style={{ padding:'1rem', background:'var(--off-white)', borderRadius:'var(--radius-sm)', fontSize:'.82rem', color:'var(--txt-body)', lineHeight:1.65 }}>
                  <div style={{ fontWeight:700, marginBottom:'.3rem', color:'var(--txt-dark)' }}>🔍 Free Site Survey</div>
                  Available for industrial, commercial and large residential projects.
                </div>
                {['ISO 9001:2015 Certified','GPS Tracked Transport','Goods Insurance Available','Personal Shifting Assistant','24×7 Customer Support'].map(f => (
                  <div key={f} style={{ display:'flex', alignItems:'center', gap:'.6rem', fontSize:'.83rem', color:'var(--txt-body)' }}>
                    <span style={{ color:'#22aa55', fontWeight:700 }}>✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
