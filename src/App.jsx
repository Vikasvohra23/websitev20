import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import AboutTeaser   from './components/AboutTeaser'
import PromoBanner   from './components/PromoBanner'
import Services      from './components/Services'
import SOPSection    from './components/SOPSection'
import Projects      from './components/Projects'
import Gallery       from './components/Gallery'
import FAQSection    from './components/FAQSection'
import BlogSection   from './components/BlogSection'
import Calculator    from './components/Calculator'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import WaFloat       from './components/WaFloat'
import ClientSlider  from './components/ClientSlider'
import AboutPage     from './components/AboutPage'
import BlogDetail    from './components/BlogDetail'
import ServiceDetail from './components/ServiceDetail'
import NotFound      from './components/NotFound'
import { useDocumentHead, SITE_URL } from './hooks/useDocumentHead'
import { SERVICE_PAGES, BLOG_POSTS, FAQS } from './data/constants'

// The section IDs in navigation order (homepage in-page anchors)
export const NAV_ORDER = ['home','about','services','projects','insights','faq','contact']

const HOME_TITLE = 'Shree Radhey Relocation Services | ISO Certified Packers & Movers in Delhi'
const HOME_DESC  = 'ISO 9001:2015 certified packers and movers in New Delhi. Industrial relocation, office shifting, household moving, export packing, machine shifting and logistics. Trusted by WHO, Rashtrapati Bhawan, IRCTC and 100+ clients since 2017.'

/* ── Scrolls to top on every route change, and to an in-page
   section when navigated home with a `scrollTo` location state ── */
function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      // Wait a tick for the homepage to mount before scrolling
      const t = setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.state])
  return null
}

function HomePage() {
  const navigate = useNavigate()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  useDocumentHead({
    title: HOME_TITLE,
    description: HOME_DESC,
    path: '/',
    jsonLd: faqJsonLd,
    jsonLdId: 'homepage-faq',
  })

  const openService = (slug) => navigate(`/services/${slug}`)
  const openBlog    = (id)   => navigate(`/insights/${id}`)

  return (
    <main>
      <Hero />
      <ClientSlider />
      <AboutTeaser onLearnMore={() => navigate('/about')} />
      <PromoBanner />
      <Services onServiceClick={openService} />
      <SOPSection />
      <Projects />
      <Gallery />
      <FAQSection />
      <BlogSection onBlogClick={openBlog} />
      <Calculator />
      <Contact />
    </main>
  )
}

function AboutRoute() {
  const navigate = useNavigate()
  return <AboutPage onBack={() => navigate('/')} />
}

function ServiceRoute() {
  const navigate = useNavigate()
  const { slug } = useParams()
  if (!SERVICE_PAGES[slug]) return <NotFound />
  return <ServiceDetail slug={slug} onBack={() => navigate('/', { state: { scrollTo: 'services' } })} />
}

function BlogRoute() {
  const navigate = useNavigate()
  const { postId } = useParams()
  if (!BLOG_POSTS.find(p => p.id === postId)) return <NotFound />
  return <BlogDetail postId={postId} onBack={() => navigate('/', { state: { scrollTo: 'insights' } })} />
}

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const goHome  = () => navigate('/')
  const goAbout = () => navigate('/about')

  // currentPage tells Navbar it's not on the homepage, so it skips
  // in-page scroll-spying of anchor sections
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar onHome={goHome} onAbout={goAbout} currentPage={isHome ? null : location.pathname} />
      {children}
      <Footer />
      <WaFloat />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/services/:slug" element={<ServiceRoute />} />
          <Route path="/insights/:postId" element={<BlogRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export { SITE_URL }
