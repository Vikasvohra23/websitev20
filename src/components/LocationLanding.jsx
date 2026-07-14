import { useDocumentHead, SITE_URL } from '../hooks/useDocumentHead'
import { Reveal, SectionLabel } from './Shared'

/* ── Micro-Authority Landing Page — commercial long-tail intent ──
   Rendered by App.jsx at /industrial-relocation/:slug for each
   entry in src/data/locationPages.js. Injects its own FAQPage
   JSON-LD scoped to jsonLdId so it's cleaned up on route change. ── */
export default function LocationLanding({ slug, location }) {
  const faqs = [
    {
      q: "How is a factory machine shifted without disassembly?",
      a: "Heavy machines like CNC and CMM units are lifted using 30-ton hydraulic toe jacks to gain ground clearance, then moved on 40-ton capacity pipe rollers or skates. This roll-and-jack method avoids full disassembly, preserving machine calibration and cutting downtime versus crane-and-crate methods.",
    },
    {
      q: "What is VCI vacuum packing and why is it used for machinery?",
      a: "VCI (Volatile Corrosion Inhibitor) vacuum packing seals machinery in an airtight barrier film that releases corrosion-inhibiting vapor. It protects precision surfaces like CNC beds and spindles from humidity and salt air during transport or export shipping, without oil-based coatings that require cleaning later.",
    },
    {
      q: "How much notice is needed for an industrial plant relocation?",
      a: "For single machines, 3-5 days is typical. For full factory or plant relocations involving multiple CNC/CMM units, rigging, and IT asset migration, we recommend 2-4 weeks for site survey, method statement approval, and logistics scheduling.",
    },
    {
      q: `Do you handle industrial relocation in ${location}?`,
      a: `Yes. We operate dedicated rigging and transport crews covering ${location} and the wider Delhi NCR industrial belt, including Gurugram and Bhiwadi manufacturing clusters.`,
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  useDocumentHead({
    title: `Industrial Machinery & Plant Shifting Services in ${location} | Shree Radhey Relocation Services`,
    description: `ISO 9001:2015 certified rigging and relocation for CNC, CMM, and heavy plant machinery in ${location} — zero-disassembly moves, precision re-installation, and IT asset migration.`,
    path: `/industrial-relocation/${slug}`,
    jsonLd: faqJsonLd,
    jsonLdId: `location-faq-${slug}`,
  })

  return (
    <main className="section" style={{ maxWidth: 960, margin: '0 auto', padding: '3rem 1.25rem' }}>
      <Reveal>
        <SectionLabel text="Industrial Relocation" />
      </Reveal>
      <Reveal delay={80}>
        <h1 style={{ fontSize: '2.1rem', lineHeight: 1.2, marginBottom: '1rem' }}>
          Professional Industrial Machinery & Plant Shifting Services in {location}
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p style={{ maxWidth: 620, color: 'var(--muted)', marginBottom: '2.5rem' }}>
          ISO 9001:2015 certified rigging and relocation for CNC, CMM, and heavy plant machinery in {location} —
          zero-disassembly moves, precision re-installation, and IT asset migration.
        </p>
      </Reveal>

      {/* Section A — Engineering specification block */}
      <Reveal delay={180}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Engineering Specifications & Rigging Equipment</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
        <SpecCard title="30-Ton Hydraulic Jacks" desc="Toe jacks for zero-clearance lifting of CNC/CMM beds without base disassembly." />
        <SpecCard title="40-Ton Roller Systems" desc="Pipe rollers and skates rated to 40 tons for controlled floor-level transport of heavy machine tools." />
        <SpecCard title="VCI Vacuum Packing" desc="Corrosion-inhibiting vacuum-sealed barrier packing for export-grade machinery protection." />
      </div>

      {/* Section B — AEO / Featured Snippet FAQ block */}
      <Reveal delay={220}>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Frequently Asked Questions</h2>
      </Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
        {faqs.map((f, i) => (
          <Reveal key={i} delay={i * 40}>
            <div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.q}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{f.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  )
}

function SpecCard({ title, desc }) {
  return (
    <div style={{ border: '1px solid var(--border,#2a2a2a)', borderRadius: 8, padding: '1.1rem' }}>
      <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{desc}</p>
    </div>
  )
}
