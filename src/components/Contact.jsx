import { useState } from 'react'
import { CONTACT_INFO, SERVICE_TYPES, YOUR_WA_NUMBER } from '../data/constants'
import { buildContactWaUrl } from '../utils/whatsapp'
import { Reveal, SectionLabel, WaIcon } from './Shared'

const INFO_ITEMS = [
  { icon:'📍', label:'Head Office',  value:'WZ 283/309, Vishnu Garden\nNew Delhi — 110018',  link:null },
  { icon:'💬', label:'WhatsApp',     value:'+91 8929329666',  link:`https://wa.me/${YOUR_WA_NUMBER}` },
  { icon:'📞', label:'Phone',        value:'+91 9810499121 / 9319571414',  link:'tel:+919810499121' },
  { icon:'✉️', label:'Email',        value:'sr.relocationservices@gmail.com',  link:'mailto:sr.relocationservices@gmail.com' },
  { icon:'🌐', label:'Website',      value:'www.srrelocationservices.com',  link:'https://www.srrelocationservices.com' },
]

const TRUST_BADGES = [
  { icon:'🏅', label:'ISO 9001:2015 Certified' },
  { icon:'📍', label:'GPS Tracked Fleet' },
  { icon:'🛡️', label:'Goods Insurance' },
  { icon:'🤝', label:'24×7 Support' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', org:'', phone:'', email:'', service:'', from:'', to:'', date:'', notes:'' })
  const set = (k, v) => setForm(f => ({...f, [k]:v}))
  const waUrl = buildContactWaUrl(form)

  const Field = ({ ph, k, type='text', span=false }) => (
    <input className="field" type={type} placeholder={ph} value={form[k]}
           onChange={e => set(k, e.target.value)}
           style={{ gridColumn: span ? '1 / -1' : undefined }} />
  )

  return (
    <section id="contact" itemScope itemType="https://schema.org/LocalBusiness">
      <span className="seo-text" itemProp="name">Shree Radhey Relocation Services</span>
      <span className="seo-text" itemProp="telephone">+91-8929329666</span>
      <span className="seo-text" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">WZ 283/309, Vishnu Garden</span>
        <span itemProp="addressLocality">New Delhi</span>
        <span itemProp="postalCode">110018</span>
        <span itemProp="addressCountry">IN</span>
      </span>

      {/* ── Two-panel premium layout ── */}
      <div className="contact-premium">

        {/* LEFT — rich info panel with dark bg */}
        <div style={{ background:'var(--navy)', padding:'clamp(2.5rem,6vw,5rem)', display:'flex', flexDirection:'column', justifyContent:'space-between', gap:'3rem' }}>
          <div>
            <Reveal>
              <SectionLabel text="Contact Us" />
              <h2 style={{ marginTop:'.5rem', color:'#fff', fontSize:'clamp(2rem,4vw,2.8rem)' }}>
                Let's discuss your <em style={{ color:'var(--gold-lt)' }}>project.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ marginTop:'1rem', color:'rgba(255,255,255,.68)', maxWidth:360, fontSize:'1rem', lineHeight:1.8 }}>
                Industrial, government, corporate or household — fill in your details and we respond within the hour. Survey visits are free.
              </p>
            </Reveal>

            {/* Contact details */}
            <Reveal delay={160}>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem', marginTop:'2rem' }}>
                {INFO_ITEMS.map(r => (
                  <div key={r.label} style={{ display:'flex', gap:'1rem', alignItems:'flex-start' }}>
                    <span style={{ fontSize:'1.2rem', flexShrink:0, marginTop:2 }}>{r.icon}</span>
                    <div>
                      <div style={{ fontSize:'.62rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:2 }}>{r.label}</div>
                      {r.link
                        ? <a href={r.link} style={{ fontSize:'.9rem', color:'rgba(255,255,255,.8)', whiteSpace:'pre-line', transition:'color .2s' }}
                             onMouseEnter={e => e.currentTarget.style.color='#fff'}
                             onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,.8)'}>{r.value}</a>
                        : <div style={{ fontSize:'.9rem', color:'rgba(255,255,255,.8)', whiteSpace:'pre-line' }}>{r.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Trust badges */}
          <Reveal delay={220}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'.8rem' }}>
              {TRUST_BADGES.map(b => (
                <div key={b.label} style={{ display:'flex', gap:'.6rem', alignItems:'center', padding:'.8rem', background:'rgba(255,255,255,.05)', borderRadius:'var(--radius-sm)', border:'1px solid rgba(255,255,255,.08)' }}>
                  <span style={{ fontSize:'1.1rem' }}>{b.icon}</span>
                  <span style={{ fontSize:'.75rem', fontWeight:600, color:'rgba(255,255,255,.7)' }}>{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Map image */}
          <Reveal delay={280}>
            <div style={{ borderRadius:'var(--radius)', overflow:'hidden', height:160, position:'relative' }}>
              <img src="/images/contact-1.jpg"
                   alt="New Delhi location map"
                   style={{ width:'100%', height:'100%', objectFit:'cover', filter:'saturate(.5) brightness(.6)' }} />
              <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'.3rem' }}>
                <span style={{ fontSize:'1.8rem' }}>📍</span>
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontSize:'.72rem', fontWeight:700, color:'rgba(255,255,255,.8)', letterSpacing:'.1em', textTransform:'uppercase' }}>WZ 283/309, Vishnu Garden</div>
                  <div style={{ fontSize:'.75rem', color:'rgba(255,255,255,.6)' }}>New Delhi — 110018</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — premium form ── */}
        <div style={{ background:'var(--off-white)', padding:'clamp(2.5rem,6vw,5rem)', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <Reveal>
            <div style={{ marginBottom:'2rem' }}>
              <div style={{ fontSize:'.72rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--sr-blue)', marginBottom:'.4rem' }}>Get a Free Quote</div>
              <h3 style={{ fontSize:'clamp(1.4rem,2.5vw,1.8rem)' }}>Tell us about <em>your move.</em></h3>
              <p style={{ marginTop:'.5rem', fontSize:'.92rem' }}>We respond within 1 hour. Free site survey available.</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ background:'#fff', borderRadius:'var(--radius)', padding:'clamp(1.5rem,3vw,2.2rem)', boxShadow:'var(--shadow-lg)', border:'1.5px solid var(--border-lt)' }}>
              <div className="contact-form-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
                <Field ph="Full Name *"          k="name" />
                <Field ph="Organisation / Co."   k="org"  />
                <Field ph="Phone / WhatsApp *"   k="phone" type="tel" />
                <Field ph="Email Address"         k="email" type="email" />

                {/* Service select — full width */}
                <select className="field" value={form.service} onChange={e => set('service', e.target.value)}
                        style={{ gridColumn:'1 / -1', cursor:'pointer' }}>
                  <option value="">Select a service…</option>
                  {SERVICE_TYPES?.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <Field ph="Shifting From (City)"  k="from" />
                <Field ph="Shifting To (City)"    k="to"   />
                <Field ph="Preferred Date"         k="date" type="date" span />
                <textarea className="field" placeholder="Type of goods, floor no., special requirements, volume approx…"
                          value={form.notes} onChange={e => set('notes', e.target.value)}
                          rows={3} style={{ gridColumn:'1 / -1', resize:'vertical' }} />
              </div>

              <div className="contact-cta-row" style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:'.8rem', marginTop:'1.3rem' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ width:'100%', gap:'.5rem' }}>
                  <WaIcon /> Send via WhatsApp
                </a>
                <a href={`mailto:sr.relocationservices@gmail.com?subject=${encodeURIComponent(`Relocation Enquiry — ${form.service || 'General'}`)}&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nFrom: ${form.from}\nTo: ${form.to}\nNotes: ${form.notes}`)}`}
                   className="btn btn--outline-blue" style={{ width:'100%' }}>
                  Send Email
                </a>
              </div>

              <p style={{ fontSize:'.75rem', color:'var(--txt-muted)', marginTop:'.9rem', textAlign:'center', lineHeight:1.5 }}>
                No obligation · Free site survey available · Response within 1 hour
              </p>
            </div>
          </Reveal>

          {/* Social proof strip */}
          <Reveal delay={160}>
            <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap', marginTop:'1.5rem', justifyContent:'center' }}>
              {['ISO Certified','Est. 2017','Pan India Network','100+ Clients'].map(b => (
                <span key={b} style={{ fontSize:'.7rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--txt-muted)', display:'flex', alignItems:'center', gap:'.4rem' }}>
                  <span style={{ width:5, height:5, background:'var(--sr-red)', borderRadius:'50%', display:'inline-block' }} />{b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
