import { ALL_PROJECTS } from '../data/constants'
import { Reveal, SectionLabel, BreadcrumbBar } from './Shared'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'
import { slugifyProject } from './Projects'
import NotFound from './NotFound'

const CAT_IMAGES = {
  government: '/images/Corporate%20Office%20Relocation.jpg',
  corporate:  '/images/International%20Office%20Move.jpg',
  industrial: '/images/Industrial%20Plant%20Support.jpg',
  luxury:     '/images/Luxury%20Train%20Interiors.jpg',
  events:     '/images/G20%20Summit%20Exhibition.jpg',
}
const PROJECT_IMAGES = {
  'Presidential Museum':          '/Signature%20Projects/presidential%20museum.jpg',
  'International Office Move':    '/Signature%20Projects/International%20Office%20Move.jpg',
  'Maharaja Express Interiors':   '/Signature%20Projects/Maharaja%20Express%20Interiors.jpg',
  '1 Lakh IT Asset Migration':    '/Signature%20Projects/1%20Lakh%20IT%20Asset%20Migration.jpg',
  'Corporate Office Relocation':  '/Signature%20Projects/Corporate%20Office%20Relocation.jpg',
  'G20 Summit Exhibition':        '/Signature%20Projects/G20%20Summit%20Exhibition.jpg',
  'Shilp Guru Awards':            '/Signature%20Projects/Shilp%20Guru%20Awards.jpeg',
  '13-Foot Production Line':      '/Signature%20Projects/13-Foot%20Production%20Line.jpg',
  'Air Tank Vertical Erection':   '/Signature%20Projects/Air%20Tank%20Vertical%20Erection.jpg',
  'Equipment Handling':           '/Signature%20Projects/Equipment%20Handling.jpeg',
  'HVAC Equipment Move':          '/Signature%20Projects/HVAC%20Equipment%20Move.jpg',
  'Automotive Plant Support':     '/Signature%20Projects/Automotive%20Plant%20Support.jpg',
  'Hotel Furniture Relocation':   '/Signature%20Projects/Hotel%20Furniture%20Relocation.jpg',
  'Industrial Plant Support':     '/Signature%20Projects/Industrial%20Plant%20Support.jpg',
  'Luxury Train Interiors':       '/Signature%20Projects/Luxury%20Train%20Interiors.jpg',
}

// Category-level engineering equipment stats — scales to any project without new data entry
const CATEGORY_STATS = {
  government: [ ['Handling Grade','Museum / Govt.'], ['Security Clearance','Full Escort'], ['Packing Method','Custom Crating + VCI'], ['Team','Senior Rigging Crew'] ],
  corporate:  [ ['Assets Handled','1,000+ per phase'], ['Downtime Window','Overnight / Weekend'], ['Tracking','Chain-of-Custody Log'], ['Team','ESD-Safe IT Crew'] ],
  industrial: [ ['Lifting Capacity','30-Ton Hydraulic Jacks'], ['Transport Load','40-Ton Roller Systems'], ['Alignment','Laser-Verified Levelling'], ['Team','Certified Rigging Crew'] ],
  luxury:     [ ['Handling Grade','Heritage / Fragile'], ['Packing Method','Fabric-Wrapped Custom Crating'], ['Recurrence','Annual Contract'], ['Team','Specialist Interiors Crew'] ],
  events:     [ ['Timeline','Time-Critical Setup'], ['Scope','Setup + Dismantling'], ['Scale','Full Pavilion Logistics'], ['Team','Dedicated Event Crew'] ],
}
const CATEGORY_CHALLENGE = {
  government: 'The project required museum-grade handling of irreplaceable artifacts with zero tolerance for damage, full security clearance and coordination with government protocol teams.',
  corporate:  'Sensitive IT infrastructure and business-critical assets had to move with zero data loss and zero unplanned downtime, on a strict overnight or weekend window.',
  industrial: 'Heavy machinery had to be relocated without disassembly to protect calibration, using rigging equipment rated well beyond the load to keep every lift within a safe margin.',
  luxury:     'Heritage furniture and custom fittings needed handling that preserved fragile finishes and bespoke joinery, repeated to the same standard on a recurring schedule.',
  events:     'A full exhibition build-out and teardown had to run on a fixed, non-negotiable government-event timeline with zero room for delay.',
}

export default function ProjectDetail({ slug, onBack }) {
  const project = ALL_PROJECTS.find(p => slugifyProject(p.title) === slug)
  if (!project) return <NotFound />

  const img = PROJECT_IMAGES[project.title] || CAT_IMAGES[project.category] || CAT_IMAGES.corporate
  const stats = CATEGORY_STATS[project.category] || CATEGORY_STATS.corporate
  const challenge = CATEGORY_CHALLENGE[project.category] || CATEGORY_CHALLENGE.corporate

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/#projects` },
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
        <img src={img} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(8,15,36,.1) 0%, rgba(8,15,36,.9) 90%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'var(--px) var(--px) 3rem' }}>
          <span style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', padding:'.3rem .8rem', borderRadius:4, background:'var(--sr-blue)', color:'#fff', width:'fit-content', marginBottom:'1rem' }}>{project.tag}</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.8rem,4.5vw,3.2rem)', fontWeight:700, color:'#fff', maxWidth:700 }}>{project.title}</h1>
          <div style={{ color:'rgba(255,255,255,.7)', marginTop:'.6rem', fontSize:'.9rem' }}>{project.client} · {project.year}</div>
        </div>
      </div>

      {/* Engineering stats + challenge */}
      <section style={{ background:'#fff', padding:'var(--py) var(--px)' }}>
        <div className="two-col">
          <div>
            <Reveal><SectionLabel text="Engineering Challenge" /></Reveal>
            <Reveal delay={80}><h2 style={{ marginTop:'.4rem' }}>What made this <em>non-standard.</em></h2></Reveal>
            <Reveal delay={140}><p style={{ marginTop:'1.2rem' }}>{challenge}</p></Reveal>
            <Reveal delay={200}><p style={{ marginTop:'.9rem' }}>{project.desc}</p></Reveal>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', alignContent:'start' }}>
            {stats.map(([label, val], i) => (
              <Reveal key={label} delay={i * 70}>
                <div className="hover-float" style={{ background:'var(--off-white)', border:'1.5px solid var(--border-lt)', borderRadius:'var(--radius-sm)', padding:'1.1rem' }}>
                  <div style={{ fontSize:'.65rem', fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--sr-red)', marginBottom:'.4rem' }}>{label}</div>
                  <div style={{ fontSize:'.95rem', fontWeight:600, color:'var(--txt-dark)' }}>{val}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media column */}
      <section style={{ background:'var(--off-white)', padding:'var(--py) var(--px)' }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <SectionLabel text="Project Gallery" />
            <h2 style={{ marginTop:'.4rem' }}>On-site <em>documentation.</em></h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ maxWidth:900, margin:'0 auto', borderRadius:'var(--radius)', overflow:'hidden', boxShadow:'var(--shadow-lg)' }}>
            <img src={img} alt={`${project.title} on-site`} style={{ width:'100%', display:'block' }} />
          </div>
        </Reveal>
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
