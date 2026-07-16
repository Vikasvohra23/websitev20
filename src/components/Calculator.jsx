import { useEffect, useState } from 'react'
import { CFT_ITEMS, ADMIN_PASSWORD, RATE_PER_CFT, YOUR_WA_NUMBER, YOUR_EMAIL } from '../data/constants'
import { calculateEstimate } from '../utils/cftCalculator'
import { buildEstimateWaUrl } from '../utils/whatsapp'
import { Reveal, SectionLabel, WaIcon } from './Shared'

/* ── Phone-number modal shown before sending lead ─────────── */
function PhoneModal({ onConfirm, onCancel, waItemText, moveType, origin, destination }) {
  const [phone,  setPhone]  = useState('')
  const [error,  setError]  = useState('')

  const validate = () => {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) { setError('Please enter a valid 10-digit mobile number.'); return }
    setError('')
    onConfirm(phone, digits)
  }

  return (
    <div className="overlay">
      <div className="phone-modal">
        <div className="label mb-2"><div className="label__bar" /><span className="label__text">One last step</span></div>
        <h3>Your contact number</h3>
        <p style={{ marginTop:'0.5rem', marginBottom:'1.2rem' }}>
          Share your WhatsApp number and we'll reach out with a personalised quote within the hour.
        </p>

        {/* Summary recap */}
        <div style={{ padding:'0.9rem 1rem', background:'rgba(27,58,140,0.05)', border:'1px solid rgba(201,168,76,0.22)', marginBottom:'1.2rem', fontSize:'0.78rem', color:'var(--txt-muted)', lineHeight:1.6 }}>
          <div><strong style={{ color:'var(--txt-dark)' }}>Move:</strong> {moveType} &nbsp;|&nbsp; {origin} → {destination}</div>
          <div style={{ marginTop:4, whiteSpace:'pre-wrap' }}>{waItemText}</div>
        </div>

        <label className="field-label">Mobile Number *</label>
        <div style={{ display:'flex', gap:'0.7rem' }}>
          <input
            className="field"
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && validate()}
            autoFocus
            style={{ flex:1 }}
          />
        </div>
        {error && <p style={{ color:'#e24b4a', fontSize:'0.75rem', marginTop:6 }}>{error}</p>}

        <div style={{ display:'flex', gap:'0.8rem', marginTop:'1.2rem' }}>
          <button className="btn btn--wa" style={{ flex:2 }} onClick={validate}>
            <WaIcon /> Send My Estimate Request
          </button>
          <button className="btn btn--ghost" style={{ flex:1 }} onClick={onCancel}>
            Back
          </button>
        </div>

        <p style={{ fontSize:'0.65rem', textAlign:'center', marginTop:'0.8rem', color:'var(--txt-muted)', opacity:0.6 }}>
          We'll never share your number with third parties.
        </p>
      </div>
    </div>
  )
}

/* ── Success screen ───────────────────────────────────────── */
function SuccessScreen({ onReset }) {
  return (
    <div style={{ textAlign:'center', padding:'3rem 1rem' }}>
      <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>🙏</div>
      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.6rem', marginBottom:'0.6rem' }}>
        Request <em style={{ fontStyle:'italic', color:'var(--gold-light)' }}>sent!</em>
      </h3>
      <p style={{ maxWidth:360, margin:'0 auto 1.5rem' }}>
        Your estimate request has been received. Our team will contact you within the hour to discuss your move.
      </p>
      <button className="btn btn--ghost btn--sm" onClick={onReset}>Calculate Another</button>
    </div>
  )
}

/* ── Main Calculator ──────────────────────────────────────── */
export default function Calculator() {
  const [qty,                    setQty]                    = useState({})
  const [moveType,               setMoveType]               = useState('local')  // 'local' | 'intercity'
  const [origin,                 setOrigin]                 = useState('')
  const [destination,            setDestination]            = useState('')
  const [originSuggestions,      setOriginSuggestions]      = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [originFocused,          setOriginFocused]          = useState(false)
  const [destinationFocused,     setDestinationFocused]     = useState(false)
  const [showModal,              setShowModal]              = useState(false)
  const [success,                setSuccess]                = useState(false)

  const fetchPlaceSuggestions = async (query, setter) => {
    if (!query.trim() || query.trim().length < 3) {
      setter([])
      return
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&addressdetails=1&limit=6`
      )
      if (!response.ok) return
      const data = await response.json()
      setter(data.map(place => place.display_name).filter(Boolean))
    } catch {
      setter([])
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => fetchPlaceSuggestions(origin, setOriginSuggestions), 300)
    return () => clearTimeout(timer)
  }, [origin])

  useEffect(() => {
    const timer = setTimeout(() => fetchPlaceSuggestions(destination, setDestinationSuggestions), 300)
    return () => clearTimeout(timer)
  }, [destination])

  // Admin panel (hidden rate view)
  const [adminMode,   setAdminMode]    = useState(false)
  const [adminPass,   setAdminPass]    = useState('')
  const [showAdminIn, setShowAdminIn]  = useState(false)

  const updateQty = (id, delta) =>
    setQty(q => ({ ...q, [id]: Math.max(0, (parseInt(q[id] || 0) + delta)) }))

  const setQtyDirect = (id, val) =>
    setQty(q => ({ ...q, [id]: Math.max(0, parseInt(val) || 0) }))

  const { totalCFT, totalCost, lineItems, waItemText } = calculateEstimate(qty)
  const hasItems = lineItems.length > 0
  const canSubmit = hasItems && origin.trim() && destination.trim()

  /* ── Send lead: open WA + mailto ──────────────────────────── */
  const sendLead = (phone, digits) => {
    const waUrl = buildEstimateWaUrl({
      items: waItemText,
      phone: `+91 ${digits}`,
      moveType: moveType === 'local' ? 'Local (same city)' : 'Inter-City',
      origin,
      destination,
    })
    // Open WhatsApp (sends to YOUR number)
    window.open(waUrl, '_blank', 'noopener')

    // Email fallback — mailto opens the user's mail client
    const emailBody =
`New Estimate Lead — Shree Radhey Relocation Services

Phone:       +91 ${digits}
Move Type:   ${moveType === 'local' ? 'Local (same city)' : 'Inter-City'}
From:        ${origin}
To:          ${destination}

Items:
${waItemText}

--- Admin Info (not shown to client) ---
Total CFT:   ${totalCFT}
Est. Cost:   ₹${totalCost.toLocaleString('en-IN')}
Rate:        ₹${RATE_PER_CFT}/CFT
`
    const mailto = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent('New Estimate Lead — SRRS')}&body=${encodeURIComponent(emailBody)}`
    window.open(mailto, '_self')

    setShowModal(false)
    setSuccess(true)
  }

  const handleReset = () => {
    setQty({}); setOrigin(''); setDestination(''); setMoveType('local'); setSuccess(false)
  }

  return (
    <section id="estimate" className="section sec-white">
      <Reveal><SectionLabel text="Instant Estimate" /></Reveal>
      <Reveal delay={80}>
        <h2>Calculate your <em>packing estimate.</em></h2>
      </Reveal>
      <Reveal delay={130}>
        <p style={{ marginTop:'0.7rem', maxWidth:520 }}>
          Select your items and move details below. This estimate covers <strong style={{ color:'var(--txt-dark)', fontWeight:500 }}>packing charges only</strong> —
          our team will provide the complete quote including transportation after you submit.
        </p>
      </Reveal>

      {success ? (
        <SuccessScreen onReset={handleReset} />
      ) : (
        <div className="estimate-layout">
          {/* ── Left: item selector ───────────────────────── */}
          <Reveal delay={160}>
            <div className="items-panel">
              <div className="items-panel__header">Select items &amp; quantity</div>
              <div className="items-panel__body">
                {CFT_ITEMS.map(item => (
                  <div key={item.id} className="item-row">
                    <div className="item-row__info">
                      <div className="item-row__name">{item.label}</div>
                    </div>
                    <div className="qty-ctrl">
                      <button onClick={() => updateQty(item.id, -1)} aria-label={`Remove ${item.label}`}>−</button>
                      <input
                        type="number" min={0}
                        value={qty[item.id] || 0}
                        onChange={e => setQtyDirect(item.id, e.target.value)}
                        aria-label={`Quantity of ${item.label}`}
                      />
                      <button onClick={() => updateQty(item.id, 1)} aria-label={`Add ${item.label}`}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right: summary + move details ─────────────── */}
          <Reveal delay={220}>
            <div className="summary-panel">

              {/* Move type */}
              <div>
                <label className="field-label">Move Type</label>
                <div className="move-toggle">
                  <button
                    className={`move-toggle__btn${moveType === 'local' ? ' active' : ''}`}
                    onClick={() => setMoveType('local')}
                  >
                    📍 Local (Same City)
                  </button>
                  <button
                    className={`move-toggle__btn${moveType === 'intercity' ? ' active' : ''}`}
                    onClick={() => setMoveType('intercity')}
                  >
                    🚛 Inter-City
                  </button>
                </div>
              </div>

              {/* Origin & destination */}
              <div className="field-group">
                <div style={{ position:'relative' }}>
                  <label className="field-label">Moving From</label>
                  <input
                    className="field"
                    type="text"
                    placeholder="e.g. Sector 62, Noida"
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    onFocus={() => setOriginFocused(true)}
                    onBlur={() => setTimeout(() => setOriginFocused(false), 120)}
                    autoComplete="off"
                  />
                  {originFocused && originSuggestions.length > 0 && (
                    <div style={{
                      position:'absolute',
                      top:'100%',
                      left:0,
                      right:0,
                      marginTop:'0.55rem',
                      background:'#fff',
                      border:'1px solid rgba(0,0,0,.12)',
                      borderRadius:10,
                      boxShadow:'0 12px 30px rgba(15,23,42,.12)',
                      zIndex:20,
                      overflow:'hidden',
                    }}>
                      {originSuggestions.map((text, idx) => (
                        <button
                          key={`${text}-${idx}`}
                          type="button"
                          onMouseDown={() => { setOrigin(text); setOriginSuggestions([]) }}
                          style={{
                            width:'100%',
                            textAlign:'left',
                            padding:'0.85rem 1rem',
                            border:'none',
                            background:'transparent',
                            cursor:'pointer',
                            fontSize:'0.95rem',
                            color:'var(--txt-dark)',
                          }}
                        >
                          {text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ position:'relative' }}>
                  <label className="field-label">Moving To</label>
                  <input
                    className="field"
                    type="text"
                    placeholder="e.g. Dwarka, New Delhi"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    onFocus={() => setDestinationFocused(true)}
                    onBlur={() => setTimeout(() => setDestinationFocused(false), 120)}
                    autoComplete="off"
                  />
                  {destinationFocused && destinationSuggestions.length > 0 && (
                    <div style={{
                      position:'absolute',
                      top:'100%',
                      left:0,
                      right:0,
                      marginTop:'0.55rem',
                      background:'#fff',
                      border:'1px solid rgba(0,0,0,.12)',
                      borderRadius:10,
                      boxShadow:'0 12px 30px rgba(15,23,42,.12)',
                      zIndex:20,
                      overflow:'hidden',
                    }}>
                      {destinationSuggestions.map((text, idx) => (
                        <button
                          key={`${text}-${idx}`}
                          type="button"
                          onMouseDown={() => { setDestination(text); setDestinationSuggestions([]) }}
                          style={{
                            width:'100%',
                            textAlign:'left',
                            padding:'0.85rem 1rem',
                            border:'none',
                            background:'transparent',
                            cursor:'pointer',
                            fontSize:'0.95rem',
                            color:'var(--txt-dark)',
                          }}
                        >
                          {text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Summary box */}
              <div className="estimate-box">
                <div className="estimate-box__label">Your Packing Estimate</div>
                {hasItems ? (
                  <>
                    <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:12 }}>
                      {lineItems.map(l => (
                        <div key={l.label} className="estimate-line">
                          <span>{l.label} × {l.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="estimate-total-row">
                      <div className="estimate-note">
                        <div className="estimate-note__label">Estimated Packing Charges</div>
                        <div style={{ display:'flex', alignItems:'baseline', gap:'0.5rem', marginTop:'0.4rem' }}>
                          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'2rem', color:'var(--gold)', fontWeight:700 }}>
                            ₹{totalCost.toLocaleString('en-IN')}
                          </span>
                          <span style={{ fontSize:'0.72rem', color:'var(--txt-muted)' }}>approx.</span>
                        </div>
                        <div style={{ marginTop:'0.75rem', padding:'0.7rem 0.9rem', background:'rgba(27,58,140,0.05)', border:'1px solid rgba(201,168,76,0.22)', borderRadius:6, fontSize:'0.78rem', color:'var(--txt-muted)', lineHeight:1.6 }}>
                          💬 <strong style={{ color:'var(--txt-dark)' }}>Want a discount or need transport?</strong><br />
                          Submit your list on WhatsApp and our team will contact you shortly with a complete quote including transport, floor charges &amp; special handling.
                        </div>
                      </div>
                      <p style={{ fontSize:'0.68rem', color:'var(--txt-muted)', opacity:0.6, marginTop:'0.6rem' }}>
                        * Packing estimate only. Final charges may vary based on distance, floors &amp; access conditions.
                      </p>
                    </div>

                    {/* Admin: shows actual cost */}
                    {adminMode && (
                      <div style={{ marginTop:12, padding:'0.8rem 1rem', background:'rgba(201,168,76,0.07)', border:'1px dashed rgba(201,168,76,0.22)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
                        <span style={{ fontSize:'0.58rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', opacity:0.7 }}>
                          Admin · {totalCFT} CFT × ₹{RATE_PER_CFT}
                        </span>
                        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.5rem', color:'var(--gold)', fontWeight:700 }}>
                          ₹{totalCost.toLocaleString('en-IN')}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="estimate-box__empty">Add items on the left to see your estimate</div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                className="btn btn--wa"
                disabled={!canSubmit}
                style={{ opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
                onClick={() => canSubmit && setShowModal(true)}
              >
                <WaIcon />
                {canSubmit ? 'Get My Quote on WhatsApp' : 'Fill in items & locations above'}
              </button>

              {!canSubmit && hasItems && (!origin || !destination) && (
                <p style={{ fontSize:'0.72rem', color:'var(--gold)', opacity:0.7, textAlign:'center', marginTop:'-0.3rem' }}>
                  Please fill in your origin and destination.
                </p>
              )}

              {/* Admin toggle */}
              <div className="admin-toggle">
                {!adminMode ? (
                  <>
                    {!showAdminIn ? (
                      <button
                        style={{ background:'transparent', border:'none', fontSize:'0.58rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--txt-muted)', opacity:0.4, cursor:'pointer', textAlign:'left' }}
                        onClick={() => setShowAdminIn(true)}
                      >
                        Admin
                      </button>
                    ) : (
                      <div className="admin-toggle__unlock">
                        <input
                          className="field"
                          type="password"
                          placeholder="Admin password"
                          value={adminPass}
                          onChange={e => setAdminPass(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter' && adminPass === ADMIN_PASSWORD) {
                              setAdminMode(true); setShowAdminIn(false)
                            }
                          }}
                          style={{ flex:1 }}
                        />
                        <button
                          className="btn btn--gold btn--sm"
                          onClick={() => { if (adminPass === ADMIN_PASSWORD) { setAdminMode(true); setShowAdminIn(false) } }}
                        >
                          Unlock
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--gold)', opacity:0.7 }}>
                      Admin mode — ₹{RATE_PER_CFT}/CFT
                    </span>
                    <button
                      style={{ background:'transparent', border:'none', fontSize:'0.62rem', color:'var(--txt-muted)', cursor:'pointer' }}
                      onClick={() => { setAdminMode(false); setAdminPass('') }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      )}

      {/* Phone modal */}
      {showModal && (
        <PhoneModal
          waItemText={waItemText}
          moveType={moveType === 'local' ? 'Local (same city)' : 'Inter-City'}
          origin={origin}
          destination={destination}
          onConfirm={sendLead}
          onCancel={() => setShowModal(false)}
        />
      )}
    </section>
  )
}
