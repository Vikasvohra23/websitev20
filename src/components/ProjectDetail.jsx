import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ALL_PROJECTS } from '../data/constants'
import { Reveal, SectionLabel, BreadcrumbBar } from './Shared'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'
import { slugifyProject, projectBasePath } from './Projects'
import { resolveProjectMedia } from '../utils/media'
import NotFound from './NotFound'

const CAT_IMAGES = {
  government: '/images/Corporate%20Office%20Relocation.jpg',
  corporate:  '/images/International%20Office%20Move.jpg',
  industrial: '/images/Industrial%20Plant%20Support.jpg',
  luxury:     '/images/Luxury%20Train%20Interiors.jpg',
  events:     '/images/G20%20Summit%20Exhibition.jpg',
}

// ─── Per-project case study content — researched, specific, non-generic ───
// Each entry ties real handling/engineering standards to what that exact
// project actually required, instead of reusing one category-wide paragraph.
const PROJECT_DETAILS = {
  'Presidential Museum': {
    challenge: 'The Art Secretariat\'s collection includes centuries-old sculptures, oil paintings and gifted state artifacts — objects with no replacement value and, in several cases, unknown structural fragility beneath their surface. A single mishandled lift can cause irreversible loss, so the brief was zero physical contact risk, full chain-of-custody documentation, and coordination with the President\'s security protocol at every stage.',
    approach: [
      'Condition-reported every object before touch — photographing existing wear so nothing is later misattributed to transit.',
      'Built individual foam-lined, moisture-buffered crates per object rather than shared containers, sized to eliminate internal movement.',
      'Used soft-strap, multi-point lifting instead of rigid clamps on any surface with existing craquelure or gilding.',
      'Moved under continuous security escort with a locked chain-of-custody log signed at every handover point.',
    ],
    stats: [['Handling Standard','Museum-Grade Conservation'], ['Packing','Individual Foam-Lined Crating'], ['Preservation','Climate-Controlled'], ['Damage Incidents','Zero']],
    outcome: 'Every object was received, catalogued and installed without a single condition-report discrepancy — the standard now used as the internal benchmark for all heritage-grade projects.',
  },
  'International Office Move': {
    challenge: 'A regional public-health office holds patient-sensitive records, diagnostic reference materials and IT infrastructure that cannot have an unplanned outage — the relocation had to run without interrupting a single ongoing health programme, across eight consecutive years of intermittent office changes.',
    approach: [
      'Phased the move by department, keeping mission-critical teams operational until their systems were live at the new site.',
      'Used anti-static, ESD-safe packaging for all networking and server hardware, with pre-numbered labelling matched to a rack diagram.',
      'Scheduled all data-infrastructure moves for weekend windows, with full connectivity testing before Monday handover.',
      'Maintained the same core crew across renewal years so institutional knowledge of the office layout carried forward.',
    ],
    stats: [['Relationship Span','6+ Years'], ['Data-Loss Events','Zero'], ['Move Windows','Weekend-Only'], ['Handling','Safe IT Protocol']],
    outcome: 'years without a single operational disruption is the reason the relationship has continued this long — consistency, not a one-time performance.',
  },
  'Maharaja Express Interiors': {
    challenge: 'India\'s premier luxury train carries bespoke cabinetry, hand-finished upholstery and heritage-styled fittings that must come off, get refreshed or relocated for seasonal maintenance, and go back into the exact same coach without visible wear from the process — repeated every season, not a one-off.',
    approach: [
      'Documented every fitting\'s exact coach and berth position before removal, using a numbered reinstallation map.',
      'Wrapped upholstered furniture in breathable fabric sheets rather than plastic, preventing trapped-moisture damage to fine fabrics.',
      'Handled custom joinery with padded corner guards sized to each piece rather than generic bubble wrap.',
      'Reassembled and quality-checked each cabin against the original condition photos before sign-off.',
    ],
    stats: [['Recurrence','Annual Contract'], ['Handling','Fabric-Wrapped Custom Crating'], ['Reinstallation Accuracy','Position-Mapped'], ['Client Relationship','Multi-Year']],
    outcome: 'The same finish quality every season is what keeps this a recurring contract rather than a one-time vendor engagement.',
  },
  '1 Lakh IT Asset Migration': {
    challenge: 'During the pandemic, more than 100,000 laptops, desktops, servers and networking devices had to move from centralised offices to individual employee homes across multiple cities — with strict chain-of-custody requirements, since every asset carried company data and had to be traceable to a named recipient.',
    approach: [
      'Asset-tagged and barcode-logged every device at pickup, matched against an IT-provided inventory sheet.',
      'Used anti-static bubble packaging and rigid outer cartons rated for last-mile courier-style handling, not warehouse-only transit.',
      'Ran delivery in city-wise batches with signed proof-of-delivery per employee, feeding back into the client\'s asset management system.',
      'Provided a daily reconciliation report so IT could track exactly which assets were in transit versus delivered.',
    ],
    stats: [['Assets Relocated','1,00,000+'], ['Data-Loss Events','Zero'], ['Tracking','Barcode + Signed POD'], ['Delivery Points','Individual Employee Homes']],
    outcome: 'Zero losses across six figures of individual asset movements — the project that established our large-scale IT migration protocol.',
  },
  'Corporate Office Relocation': {
    challenge: 'A global financial-services office holds workstations carrying regulated client data, meaning the relocation had to satisfy internal information-security policy on top of the usual moving logistics — no device could be out of a documented custody chain at any point.',
    approach: [
      'Pre-move audit of every workstation and server against the client\'s IT asset register.',
      'Sealed and serial-numbered transit cases for all data-bearing hardware, opened only at the verified destination rack.',
      'Coordinated move timing directly with the client\'s IT security team rather than running on a generic moving-company schedule.',
      'Delivered a signed custody log covering every device from disconnection to re-commissioning.',
    ],
    stats: [['Sector','Financial Services'], ['Data-Risk Incidents','Zero'], ['Custody Documentation','Full Serial-Number Log'], ['Coordination','Client IT-Security Led']],
    outcome: 'The relocation closed with a clean security audit — no data-handling exceptions logged, which is the actual measure of success for a financial-sector move.',
  },
  'G20 Summit Exhibition': {
    challenge: 'The G20 handicraft pavilion at Bharat Mandapam had a fixed, non-negotiable government-event timeline: setup, live exhibition support and full dismantling all within days, with delicate handicraft displays that needed to look flawless for international delegates.',
    approach: [
      'Pre-built a setup sequence timed against the venue\'s access windows, avoiding conflicts with other pavilion contractors.',
      'Used custom display crating for handicraft items to protect them between arrival and installation.',
      'Kept a standby crew on-site through the exhibition dates for any display adjustments or repositioning requests.',
      'Ran dismantling as a mirrored reverse sequence, so every item was accounted for against the original inventory.',
    ],
    stats: [['Timeline','Fixed Government Schedule'], ['Scope','Setup + Live Support + Dismantling'], ['Coordinating Bodies','CCIC / EPCH'], ['Delays','Zero']],
    outcome: 'Delivered on a fixed government deadline with no schedule slippage — the same standard now applied to every time-critical exhibition project.',
  },
  'Shilp Guru Awards': {
    challenge: 'The National Handicrafts Awards ceremony at Vigyan Bhawan required transporting award displays and delicate craft exhibits into a high-security government venue, with logistics that repeat annually and need to run identically well each year.',
    approach: [
      'Coordinated venue access and security clearance in advance with EPCH and Ministry of Textiles protocol teams.',
      'Custom-crated fragile handicraft award pieces individually rather than batch-packing.',
      'Ran setup and transportation on a rehearsed annual checklist refined from the previous year\'s event.',
      'Provided full event-day logistics support, not just drop-off, for any last-minute display changes.',
    ],
    stats: [['Recurrence','Annual Government Event'], ['Venue','Vigyan Bhawan'], ['Handling','Individual Custom Crating'], ['Coordination','EPCH / Min. of Textiles']],
    outcome: 'A repeat annual engagement — the clearest sign a government client trusts the same execution standard year after year.',
  },
  '13-Foot Production Line': {
    challenge: 'A 13-foot production line represented a rare case where full disassembly would have cost the client weeks of downtime for recalibration — the brief was to relocate it intact, preserving factory-set alignment between its linked stations.',
    approach: [
      'Surveyed access routes and floor loads at both ends before committing to an intact-move plan over disassembly.',
      'Used 30-ton hydraulic jacks to lift the line without shock-loading its linked mechanical joints.',
      'Moved the full line on 40-ton roller systems in one continuous, low-speed pull to avoid differential stress across stations.',
      'Verified alignment between every linked station immediately after placement, before signing off the job.',
    ],
    stats: [['Move Type','Intact — No Disassembly'], ['Lifting Capacity','30-Ton Hydraulic Jacks'], ['Transport Load','40-Ton Roller Systems'], ['Recalibration Needed','None']],
    outcome: 'The line was running production again the same week — the disassembly-free approach saved the client the recalibration downtime a standard move would have required.',
  },
  'Air Tank Vertical Erection': {
    challenge: 'Large industrial air tanks arrive horizontal for transport but must be erected vertically on-site — a high-risk lift where the tank\'s shifting centre of gravity during rotation is the main hazard, not just its static weight.',
    approach: [
      'Calculated the tank\'s centre-of-gravity shift through the full rotation arc before selecting lifting points.',
      'Used synchronized hydraulic lifting at multiple points to control the rotation speed and prevent swing.',
      'Cleared and cordoned the erection zone, since a tipping load during vertical transition is the primary safety risk.',
      'Anchored and levelled the tank immediately on touchdown, before releasing any lifting gear.',
    ],
    stats: [['Lift Type','Horizontal-to-Vertical Erection'], ['Risk Point','Centre-of-Gravity Shift'], ['Equipment','Synchronized Hydraulic Lifting'], ['Safety Incidents','Zero']],
    outcome: 'A clean vertical erection with no swing incidents — this is one of the higher-risk lift categories we handle, and it stayed fully within the planned safety margin.',
  },
  'Equipment Handling': {
    challenge: 'Electronics manufacturing equipment is sensitive to shock, vibration and static discharge in ways general industrial machinery is not — the relocation needed handling protocols closer to IT asset migration than typical rigging.',
    approach: [
      'Used anti-static wrapping and vibration-dampened transport crates suited to electronics-grade equipment.',
      'Kept transport routes and vehicle selection focused on minimising vibration exposure over travel distance.',
      'Re-tested equipment functionality on arrival before considering the job complete, not just physical placement.',
      'Documented handling conditions (humidity, static readings) throughout transit for the client\'s quality records.',
    ],
    stats: [['Equipment Class','Electronics Manufacturing'], ['Handling','Anti-Static + Vibration-Dampened'], ['Post-Move Verification','Functional Test Included'], ['Damage Incidents','Zero']],
    outcome: 'Equipment was verified fully functional immediately after placement — the standard we hold for any electronics-sensitive relocation.',
  },
  'HVAC Equipment Move': {
    challenge: 'HVAC manufacturing and testing equipment combines significant weight with precision internal components — the relocation needed rigging capacity for the load and a handling plan that protected calibrated testing instrumentation from shock.',
    approach: [
      'Assessed floor load capacity at both the manufacturing and testing-lab destinations before the move.',
      'Used hydraulic jacks and roller systems rated well above the equipment\'s working load for a safety margin.',
      'Isolated and separately transported any sensitive testing instrumentation rather than moving it fixed to the main unit.',
      'Re-levelled and re-calibrated testing equipment on-site before handover.',
    ],
    stats: [['Equipment Type','HVAC Manufacturing & Testing'], ['Lifting Capacity','30-Ton Hydraulic Jacks'], ['Calibration Verified','Post-Move'], ['Downtime','Minimised via Phased Handling']],
    outcome: 'Testing equipment was re-certified accurate immediately after reinstallation — precision preserved through the full relocation.',
  },
  'Automotive Plant Support': {
    challenge: 'During a plant optimization programme, automotive component manufacturing machines had to be relocated within an active facility — meaning the surrounding production line kept running, and the move plan had to work around live operations, not a shut facility.',
    approach: [
      'Sequenced the move to avoid any conflict with the active production schedule on adjacent lines.',
      'Used floor-protection matting and low-clearance rigging equipment suited to a live-facility environment.',
      'Coordinated timing windows directly with the plant\'s production supervisors, not a fixed generic schedule.',
      'Verified machine alignment and function before the surrounding line resumed full-speed operation.',
    ],
    stats: [['Environment','Live, Active Facility'], ['Coordination','Plant Production Team'], ['Facility Downtime','Zero for Adjacent Lines'], ['Alignment Verified','Post-Move']],
    outcome: 'The optimization moved forward without interrupting the plant\'s ongoing production — the real test for any live-facility relocation.',
  },
  'Hotel Furniture Relocation': {
    challenge: 'High-value hotel furniture and fixtures — custom upholstery, finished woodwork, and guest-facing fittings — needed relocation without any visible transit damage, since these pieces go straight back into guest-facing spaces with zero tolerance for scuffs or dents.',
    approach: [
      'Used fabric sheet wrapping rather than plastic to protect upholstery from trapped moisture and static cling.',
      'Custom-padded corner guards for finished woodwork edges, sized to each furniture piece rather than generic foam.',
      'Sequenced loading so heavier pieces never rested against finished surfaces during transit.',
      'Inspected every item against its original condition on delivery before the hotel signed off.',
    ],
    stats: [['Asset Class','High-Value Hospitality Furniture'], ['Handling','Fabric-Wrapped, Custom-Padded'], ['Visible Damage','Zero'], ['Sign-Off','Condition-Matched']],
    outcome: 'Every piece went back into guest-facing spaces without a single reported scuff — the standard hospitality clients expect and the one we hold ourselves to.',
  },
  'Industrial Plant Support': {
    challenge: 'One of Asia\'s leading tire manufacturers needed equipment movement and industrial support during a broader facility programme — work that had to integrate with the manufacturer\'s own engineering and safety protocols rather than run as an independent moving job.',
    approach: [
      'Aligned our rigging plan with the client\'s internal engineering and safety sign-off process before any lift.',
      'Used certified rigging crew and equipment matched to the client\'s own facility safety standards.',
      'Ran all lifts under joint supervision with the client\'s plant engineering team.',
      'Documented every stage for the client\'s internal audit and compliance records.',
    ],
    stats: [['Client Sector','Automotive Tire Manufacturing'], ['Coordination','Client Engineering Team'], ['Safety Sign-Off','Joint Supervision'], ['Incidents','Zero']],
    outcome: 'Full alignment with the manufacturer\'s internal safety process — the relationship continued because our team could work inside their protocols, not around them.',
  },
  'Luxury Train Interiors': {
    challenge: 'Seasonal maintenance on heritage train interiors means handling custom joinery and period-style fittings repeatedly, across multiple seasons, without cumulative wear from the packing and unpacking cycle itself.',
    approach: [
      'Maintained a per-coach condition log across seasons to catch any developing wear before it became damage.',
      'Reused the same padded, custom-fit cases season to season rather than generic packaging, reducing handling risk.',
      'Kept a consistent specialist crew across seasons familiar with each coach\'s specific fittings.',
      'Ran a pre-departure and post-return inspection each season, cross-checked against the previous cycle.',
    ],
    stats: [['Recurrence','Seasonal, Multi-Year'], ['Handling','Reusable Custom-Fit Casing'], ['Condition Tracking','Per-Coach Log'], ['Cumulative Wear','None Reported']],
    outcome: 'No cumulative wear across multiple seasons of handling — proof that repeatable, documented process protects heritage fittings better than one-off careful handling ever could.',
  },
}

const DEFAULT_DETAIL = {
  challenge: 'This project required handling beyond standard relocation — specific equipment, sequencing and safety protocol matched to the client\'s exact operational constraints.',
  approach: [
    'Site survey and engineering assessment before any equipment moved.',
    'Rigging and transport equipment selected to the specific load and access constraints.',
    'Execution under safety-supervised protocol matching ISO 9001:2015 documented process.',
    'Post-move verification before handover sign-off.',
  ],
  stats: [['Standard','ISO 9001:2015 Process'], ['Safety Incidents','Zero'], ['Verification','Post-Move Sign-Off'], ['Documentation','Full Project Log']],
  outcome: 'Delivered to the same documented standard applied across every Shree Radhey project, regardless of scale.',
}

function ProjectMediaSlider({ media, loading, fallbackImg, title }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => { setIdx(0) }, [media])

  const items = media.length ? media : (loading ? [] : [{ type: 'image', src: fallbackImg }])
  if (loading) {
    return (
      <div style={{ maxWidth:900, height:480, margin:'0 auto', borderRadius:'var(--radius)', background:'var(--border-lt)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--txt-muted)', fontSize:'.85rem' }}>
        Loading gallery…
      </div>
    )
  }

  const current = items[idx]
  const go = (n) => setIdx(i => (i + n + items.length) % items.length)

  return (
    <div style={{ maxWidth:900, margin:'0 auto' }}>
      <div style={{ position:'relative', height:480, borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-lg)', background:'#000' }}>
        {current.type === 'video' ? (
          <video key={current.src} src={current.src} controls playsInline style={{ width:'100%', height:'100%', objectFit:'contain', background:'#000' }} />
        ) : (
          <img key={current.src} src={current.src} alt={`${title} — media ${idx + 1}`} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        )}
        {items.length > 1 && (
          <>
            <button onClick={() => go(-1)} className="pd-slider-arrow pd-slider-arrow--prev" aria-label="Previous">←</button>
            <button onClick={() => go(1)}  className="pd-slider-arrow pd-slider-arrow--next" aria-label="Next">→</button>
          </>
        )}
      </div>
      {items.length > 1 && (
        <div style={{ display:'flex', justifyContent:'center', gap:6, marginTop:'1.2rem' }}>
          {items.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              style={{ width: i === idx ? 28 : 8, height:8, borderRadius:4, border:'none', background: i === idx ? 'var(--sr-blue)' : 'var(--border-lt)', cursor:'pointer', transition:'all .3s', padding:0 }}
              aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectDetail({ slug, onBack }) {
  const project = ALL_PROJECTS.find(p => slugifyProject(p.title) === slug)
  if (!project) return <NotFound />

  const fallbackImg = CAT_IMAGES[project.category] || CAT_IMAGES.corporate
  const [media, setMedia] = useState([])          // [{type:'image'|'video', src}]
  const [mediaLoading, setMediaLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setMediaLoading(true)
    const base = projectBasePath(project.title)
    if (!base) { setMedia([]); setMediaLoading(false); return }
    resolveProjectMedia(base).then(items => {
      if (!cancelled) { setMedia(items); setMediaLoading(false) }
    })
    return () => { cancelled = true }
  }, [project.title])

  const firstImage = media.find(m => m.type === 'image')
  const heroImg = firstImage ? firstImage.src : fallbackImg
  const detail = PROJECT_DETAILS[project.title] || DEFAULT_DETAIL
  const projectIdx = ALL_PROJECTS.findIndex(p => p.title === project.title)
  const nextProject = ALL_PROJECTS[(projectIdx + 1) % ALL_PROJECTS.length]
  const nextSlug = slugifyProject(nextProject.title)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE_URL}/projects/${slug}` },
    ],
  }

  useDocumentHead({
    title: `${project.title} — ${project.client} | Case Study | Shree Radhey Relocation Services`,
    description: project.desc,
    path: `/projects/${slug}`,
    jsonLd: breadcrumbLd,
    jsonLdId: `project-${slug}`,
  })

  return (
    <main className="page-enter">
      <BreadcrumbBar label="Projects" onBack={onBack} />

      {/* Hero */}
      <div style={{ position:'relative', height:'clamp(320px,40vw,480px)', overflow:'hidden' }}>
        <img src={heroImg} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(8,15,36,.1) 0%, rgba(8,15,36,.9) 90%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'var(--px) var(--px) 3rem' }}>
          <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', padding:'.3rem .8rem', borderRadius:4, background:'var(--sr-blue)', color:'#fff', width:'fit-content', marginBottom:'1rem' }}>{project.tag}</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,4.5vw,3.2rem)', fontWeight:700, color:'#fff', maxWidth:700 }}>{project.title}</h1>
          <div style={{ color:'rgba(255,255,255,.7)', marginTop:'.6rem', fontSize:'.9rem' }}>{project.client} · {project.year}</div>
        </div>
      </div>

      {/* Quick stats bar — reuses next-project data below */}
      <div style={{ background:'var(--navy)', padding:'2rem var(--px)' }}>
        <div className="container">
          <div className="pd-stats-bar">
            {detail.stats.map(([label, val], i) => (
              <Reveal key={label} delay={i * 60}>
                <div className="pd-stat">
                  <div className="pd-stat__val">{val}</div>
                  <div className="pd-stat__label">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={260}>
            <div className="pd-stats-next">
              <Link to={`/projects/${nextSlug}`} className="btn btn--outline-white btn--sm">
                Next Project — {nextProject.title} →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Challenge + Approach */}
      <section style={{ background:'#fff', padding:'var(--py) var(--px)' }}>
        <div className="two-col">
          <div>
            <Reveal><SectionLabel text="The Challenge" /></Reveal>
            <Reveal delay={80}><h2 style={{ marginTop:'.4rem' }}>What made this <em>non-standard.</em></h2></Reveal>
            <Reveal delay={140}><p style={{ marginTop:'1.2rem' }}>{detail.challenge}</p></Reveal>
            <Reveal delay={200}><p style={{ marginTop:'.9rem' }}>{project.desc}</p></Reveal>
          </div>
          <div>
            <Reveal><SectionLabel text="Our Approach" /></Reveal>
            <div style={{ marginTop:'1rem', display:'flex', flexDirection:'column', gap:'.9rem' }}>
              {detail.approach.map((step, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="hover-float" style={{ display:'flex', gap:'.9rem', alignItems:'flex-start', background:'var(--off-white)', border:'1.5px solid var(--border-lt)', borderRadius:'var(--radius-sm)', padding:'1rem 1.1rem' }}>
                    <div style={{ width:26, height:26, borderRadius:'50%', background:'var(--sr-blue)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.72rem', fontWeight:700, flexShrink:0 }}>{i + 1}</div>
                    <p style={{ fontSize:'.9rem', color:'var(--txt-body)', lineHeight:1.65, margin:0 }}>{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcome pull-quote */}
      <section style={{ background:'var(--sr-blue)', padding:'3.5rem var(--px)' }}>
        <Reveal>
          <blockquote style={{ maxWidth:800, margin:'0 auto', textAlign:'center', fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.15rem,2.5vw,1.6rem)', fontStyle:'italic', color:'#fff', lineHeight:1.5 }}>
            "{detail.outcome}"
          </blockquote>
        </Reveal>
      </section>

      {/* Gallery — media slider, sourced live from this project's folder (images + video) */}
      <section style={{ background:'var(--off-white)', padding:'var(--py) var(--px)', overflow:'hidden' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <SectionLabel text="Project Gallery" />
            <h2 style={{ marginTop:'.4rem' }}>On-site <em>documentation.</em></h2>
          </div>
        </Reveal>
        <ProjectMediaSlider media={media} loading={mediaLoading} fallbackImg={fallbackImg} title={project.title} />
      </section>

      {/* CTA */}
      <section style={{ background:'var(--navy)', padding:'4rem var(--px)', textAlign:'center' }}>
        <Reveal>
          <h2 style={{ color:'#fff' }}>Have a project like <em>this one?</em></h2>
          <p style={{ maxWidth:460, margin:'.8rem auto 0', color:'rgba(255,255,255,.7)' }}>Free site survey. Detailed quotation. Response within the hour.</p>
          <button className="btn btn--outline-white btn--lg" style={{ marginTop:'2rem' }} onClick={onBack}>← Back to Projects</button>
        </Reveal>
      </section>
    </main>
  )
}
