import { ArrowRight, MessageCircle } from 'lucide-react'
import HeroCarousel from './HeroCarousel'

const WHATSAPP_URL =
  "https://wa.me/2349162869066?text=Hi%20Dickson%2C%20I%27d%20like%20to%20work%20with%20you!"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            <div className="fade-up mb-6">
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide bg-orange/10 text-orange dark:bg-orange/20 rounded-full">
                ✦ AVAILABLE FOR PROJECTS
              </span>
            </div>

            <div className="fade-up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
                WE TURN
                <br />
                IDEAS INTO
                <br />
                <span className="text-orange">INTERFACES.</span>
              </h1>
            </div>

            <div className="fade-up mt-8 max-w-xl">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Your vision, shipped — pixel perfect. Frontend development for brands
                that mean business, from Lagos to the world.
              </p>
            </div>

            <div className="fade-up mt-10 flex flex-col sm:flex-row gap-4">
              
               <a href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105"
              >
                VIEW OUR WORK <ArrowRight size={18} />
              </a>
              
               <a href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-orange text-orange hover:bg-orange hover:text-white px-8 py-3.5 rounded-full font-medium transition-all"
              >
                WHATSAPP US <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Carousel ── */}
          <div className="fade-up hidden lg:block">
            <HeroCarousel />
          </div>

        </div>
      </div>
    </section>
  )
}