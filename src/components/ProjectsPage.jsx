import Projects from './Projects'
import { Reveal, SectionLabel, BreadcrumbBar } from './Shared'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'

export default function ProjectsPage({ onBack }) {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
    ],
  }

  useDocumentHead({
    title: 'Signature Projects & Case Studies | Shree Radhey Relocation Services',
    description: 'Industrial machinery relocation, IT asset migration and heritage moving case studies — Rashtrapati Bhawan, WHO SEARO, G20 Summit, IRCTC Maharaja Express and more.',
    path: '/projects',
    jsonLd: breadcrumbLd,
    jsonLdId: 'projects-page-breadcrumb',
  })

  return (
    <main className="page-enter">
      <BreadcrumbBar label="Projects" onBack={onBack} />

      <div style={{ background:'var(--navy)', padding:'3.5rem var(--px) 2.5rem', textAlign:'center' }}>
        <Reveal>
          <SectionLabel text="Signature Projects" light />
          <h1 style={{ marginTop:'.5rem', color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)' }}>
            Work that defines <em style={{ color:'var(--gold-lt)' }}>our standard.</em>
          </h1>
          <p style={{ maxWidth:600, margin:'1rem auto 0', color:'rgba(255,255,255,.7)' }}>
            From presidential heritage artifacts to 1-lakh-asset IT migrations — every project follows the
            same ISO 9001:2015 documented process, regardless of scale.
          </p>
        </Reveal>
      </div>

      <Projects hideHeader />
    </main>
  )
}
