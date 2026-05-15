import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

const WHATSAPP_URL =
  "https://wa.me/2349162869066?text=Hi%20Dickson%2C%20I%27d%20like%20to%20work%20with%20you!";

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Brand name */}
            <div className="fade-up mb-8">
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold italic leading-[1.1] dark:text-[#F2EDE4]"
              >
                Whim
                <br />
                Stack
              </h1>
            </div>

            {/* Tagline */}
            <div className="fade-up mb-6">
              <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B]">
                WEB · PRODUCT
              </span>
            </div>

            {/* Description 1 */}
            <div className="fade-up mt-6 mb-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[480px]">
                Fast, modern websites for businesses that want to look credible and convert visitors.
              </p>
            </div>

            {/* Description 2 */}
            <div className="fade-up mb-10">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-[480px]">
                I design and build fast, responsive, SEO-ready websites that make your business easier to trust, find, and contact. Clean interface design, and reliable engineering to improve your online presence, and serve customers better.
              </p>
            </div>

            {/* Buttons and badge */}
            <div className="fade-up flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
              
               <a href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105"
              >
                Contact me
                <MessageCircle size={16} />
              </a>

              <div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase font-medium text-gray-600 dark:text-[#A09B92] border border-gray-300 dark:border-white/[0.12] px-4 py-3 rounded-full">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-orange dark:text-[#FF5C2B]">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                Lagos, Nigeria
              </div>
            </div>

            {/* Availability text */}
            <div className="fade-up">
              <p className="text-[0.65rem] tracking-[0.1em] uppercase text-gray-500 dark:text-[#A09B92]">
                Available for website projects, MVPs and collaborations
              </p>
            </div>
          </div>

          {/* ── RIGHT: Flip Card (Carousel <-> Feature Card) ── */}
          <div className="fade-up hidden lg:flex items-center justify-center perspective">
            <div
              className="relative w-full h-[600px] cursor-pointer transition-transform duration-500 preserve-3d"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >

              {/* ── FRONT: Carousel ── */}
              <div
                style={{ backfaceVisibility: "hidden" }}
                className="absolute inset-0"
              >
                <HeroCarousel />
              </div>

              {/* ── BACK: Feature Card ── */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full bg-gradient-to-br from-gray-100 dark:from-[#111111] to-gray-50 dark:to-[#0d0d0d] border border-gray-300 dark:border-white/[0.08] rounded-3xl p-10 overflow-hidden">

                  {/* Decorative blur */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange/5 dark:bg-orange/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">

                    {/* Tag */}
                    <div className="inline-block mb-6">
                      <span className="text-[0.65rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B]">
                        ✦ LAUNCH SUPPORT
                      </span>
                    </div>

                    {/* Heading */}
                    <h2
                      style={{ fontFamily: "'Playfair Display', serif" }}
                      className="text-2xl md:text-3xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-8 leading-tight"
                    >
                      From idea to<br />
                      polished product.
                    </h2>

                    {/* Process steps */}
                    <div className="space-y-4 mb-10">
                      {[
                        { label: "Design", desc: "Mockups & planning" },
                        { label: "Build", desc: "Code & optimize" },
                        { label: "Launch", desc: "Deploy & iterate" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-orange dark:border-[#FF5C2B] text-[0.65rem] font-bold text-orange dark:text-[#FF5C2B]">
                            ●
                          </div>
                          <div>
                            <div className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-900 dark:text-[#F2EDE4]">
                              {item.label}
                            </div>
                            <div className="text-[0.65rem] text-gray-600 dark:text-[#A09B92]">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                      
                       <a href="#projects"
                        className="inline-flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.08em] uppercase font-semibold text-white bg-orange hover:bg-orange-dark px-5 py-3 rounded-full transition-all"
                      >
                        Start a build
                        <ArrowRight size={13} />
                      </a>
                      
                       <a href="#projects"
                        className="inline-flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.08em] uppercase font-semibold text-gray-900 dark:text-[#F2EDE4] border-2 border-gray-300 dark:border-white/[0.15] px-5 py-3 rounded-full hover:border-orange dark:hover:border-[#FF5C2B] hover:text-orange dark:hover:text-[#FF5C2B] transition-all"
                      >
                        See Work
                        <ArrowRight size={13} />
                      </a>
                    </div>

                    {/* Hint text */}
                    <p className="text-[0.6rem] tracking-[0.1em] uppercase text-gray-500 dark:text-gray-600 mt-6 text-center">
                      Hover to flip
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}