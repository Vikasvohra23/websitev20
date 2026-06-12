import { useState, useEffect, useCallback } from 'react'
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

// The page IDs in navigation order
export const NAV_ORDER = ['home','about','services','projects','insights','faq','contact']

export default function App() {
  const [activePage, setActivePage]   = useState(null) // service slug
  const [activeBlog, setActiveBlog]   = useState(null) // blog post id
  const [showAbout,  setShowAbout]    = useState(false)
  const [returnSection, setReturn]    = useState(null) // section to scroll back to

  // Cross-blog navigation from BlogDetail
  useEffect(() => {
    const h = (e) => { setActiveBlog(e.detail); window.scrollTo(0,0) }
    window.addEventListener('navigate-blog', h)
    return () => window.removeEventListener('navigate-blog', h)
  }, [])

  const openService = useCallback((slug, fromSection = 'services') => {
    setReturn(fromSection)
    setActivePage(slug)
    window.scrollTo(0,0)
  }, [])

  const openBlog = useCallback((id, fromSection = 'insights') => {
    setReturn(fromSection)
    setActiveBlog(id)
    window.scrollTo(0,0)
  }, [])

  const openAbout = useCallback(() => {
    setReturn('about')
    setShowAbout(true)
    window.scrollTo(0,0)
  }, [])

  const goBack = useCallback(() => {
    const section = returnSection
    setActivePage(null)
    setActiveBlog(null)
    setShowAbout(false)
    setReturn(null)
    // Scroll back to the section we came from
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }, [returnSection])

  const goHome = useCallback(() => {
    setActivePage(null)
    setActiveBlog(null)
    setShowAbout(false)
    setReturn(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Sub-pages
  if (showAbout) return (
    <><Navbar onHome={goHome} onAbout={openAbout} currentPage="about" /><AboutPage onBack={goBack} /><Footer /><WaFloat /></>
  )
  if (activeBlog) return (
    <><Navbar onHome={goHome} onAbout={openAbout} currentPage="blog" /><BlogDetail postId={activeBlog} onBack={goBack} /><Footer /><WaFloat /></>
  )
  if (activePage) return (
    <><Navbar onHome={goHome} onAbout={openAbout} currentPage={activePage} /><ServiceDetail slug={activePage} onBack={goBack} /><Footer /><WaFloat /></>
  )

  return (
    <>
      <Navbar onHome={goHome} onAbout={openAbout} currentPage={null} />
      <main>
        <Hero />
        <ClientSlider />
        <AboutTeaser onLearnMore={openAbout} />
        <PromoBanner />
        <Services onServiceClick={(slug) => openService(slug, 'services')} />
        <SOPSection />
        <Projects />
        <Gallery />
        <FAQSection />
        <BlogSection onBlogClick={(id) => openBlog(id, 'insights')} />
        <Calculator />
        <Contact />
      </main>
      <Footer onAbout={openAbout} />
      <WaFloat />
    </>
  )
}
