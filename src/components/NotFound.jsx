import { Link } from 'react-router-dom'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { WaIcon } from './Shared'
import { YOUR_WA_NUMBER } from '../data/constants'

export default function NotFound() {
  useDocumentHead({
    title: 'Page Not Found | Shree Radhey Relocation Services',
    description: 'The page you are looking for could not be found. Explore our relocation services, projects and insights.',
    path: '/404',
  })

  return (
    <main className="page-enter" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--py) var(--px)' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 'clamp(3rem,8vw,5rem)', color: 'var(--sr-blue)', lineHeight: 1 }}>404</div>
        <h2 style={{ marginTop: '1rem' }}>Page not <em>found.</em></h2>
        <p style={{ marginTop: '.8rem' }}>
          The page you're looking for doesn't exist or may have moved. Try heading back home or get in touch with us directly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link to="/" className="btn btn--blue">Back to Home</Link>
          <a
            href={`https://wa.me/${YOUR_WA_NUMBER}?text=${encodeURIComponent('Hello! I need help finding information on your website.')}`}
            target="_blank" rel="noopener noreferrer" className="btn btn--wa"
          >
            <WaIcon /> WhatsApp Us
          </a>
        </div>
      </div>
    </main>
  )
}
