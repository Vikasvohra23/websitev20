import Gallery from './Gallery'
import { Reveal, SectionLabel, BreadcrumbBar } from './Shared'
import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'

export default function GalleryPage({ onBack }) {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE_URL}/gallery` },
    ],
  }

  useDocumentHead({
    title: 'Project Gallery | Shree Radhey Relocation Services',
    description: 'Photo and video gallery of industrial machinery relocation, rigging, IT asset migration and heritage moving projects across Delhi NCR, Gurugram and Bhiwadi.',
    path: '/gallery',
    jsonLd: breadcrumbLd,
    jsonLdId: 'gallery-page-breadcrumb',
  })

  return (
    <main className="page-enter">
      <BreadcrumbBar label="Gallery" onBack={onBack} />

      <div style={{ background:'var(--navy)', padding:'3.5rem var(--px) 2.5rem', textAlign:'center' }}>
        <Reveal>
          <SectionLabel text="Our Work" light />
          <h1 style={{ marginTop:'.5rem', color:'#fff', fontSize:'clamp(1.8rem,4vw,2.8rem)' }}>
            Every project <em style={{ color:'var(--gold-lt)' }}>tells a story.</em>
          </h1>
          <p style={{ maxWidth:600, margin:'1rem auto 0', color:'rgba(255,255,255,.7)' }}>
            A glimpse of the work we've done — from presidential heritage to industrial precision,
            luxury trains to export packing.
          </p>
        </Reveal>
      </div>

      <Gallery hideHeader />
    </main>
  )
}
