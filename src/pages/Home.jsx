import Navbar     from '../components/Navbar'
import Hero       from '../components/Hero'
import Services   from '../components/Services'
import About      from '../components/About'
import Projects   from '../components/Projects'
import Gallery    from '../components/Gallery'
import Calculator from '../components/Calculator'
import Contact    from '../components/Contact'
import Footer     from '../components/Footer'
import WaFloat    from '../components/WaFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Gallery />
        <Calculator />
        <Contact />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
