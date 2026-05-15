import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import { pages } from './utils/seo'
import SEO from './components/SEO'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <HelmetProvider>
      <SEO title={pages.home.title} description={pages.home.description} pathname="/" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stack />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
        
      {/* Your components */}
    </HelmetProvider>
    </div>
  )
}

export default App