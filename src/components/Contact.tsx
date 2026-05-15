import { Mail, MapPin, Send, MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  "https://wa.me/2349162869066?text=Hi%20Dickson%2C%20I%27d%20like%20to%20work%20with%20you!"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="fade-up text-center mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ CONTACT
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-6"
          >
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Got a project in mind? Let's build something remarkable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Info */}
          <div className="fade-up space-y-4">

            {/* Email */}
            <a
              href="mailto:hello@whimstack.com"
              className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] transition-all duration-200 group cursor-pointer"
            >
              <div className="text-orange dark:text-[#FF5C2B] mt-1 group-hover:scale-110 transition-transform duration-200">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Email
                </p>
                <p className="text-gray-900 dark:text-[#F2EDE4] font-medium group-hover:text-orange dark:group-hover:text-[#FF5C2B] transition-colors">
                  hello@whimstack.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            
             <a href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] transition-all duration-200 group cursor-pointer"
            >
              <div className="text-orange dark:text-[#FF5C2B] mt-1 group-hover:scale-110 transition-transform duration-200">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  WhatsApp
                </p>
                <p className="text-gray-900 dark:text-[#F2EDE4] font-medium group-hover:text-orange dark:group-hover:text-[#FF5C2B] transition-colors">
                  +234 916 286 9066
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/[0.08]">
              <div className="text-orange dark:text-[#FF5C2B] mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-600 dark:text-gray-400 mb-1">
                  Location
                </p>
                <p className="text-gray-900 dark:text-[#F2EDE4] font-medium">
                  Lagos, Nigeria — Remote worldwide
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="fade-up space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#111111] text-gray-900 dark:text-[#F2EDE4] placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange dark:focus:border-[#FF5C2B] focus:ring-2 focus:ring-orange/20 dark:focus:ring-[#FF5C2B]/20 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#111111] text-gray-900 dark:text-[#F2EDE4] placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange dark:focus:border-[#FF5C2B] focus:ring-2 focus:ring-orange/20 dark:focus:ring-[#FF5C2B]/20 transition-all duration-200"
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project"
              className="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#111111] text-gray-900 dark:text-[#F2EDE4] placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange dark:focus:border-[#FF5C2B] focus:ring-2 focus:ring-orange/20 dark:focus:ring-[#FF5C2B]/20 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-full font-semibold text-[0.85rem] tracking-[0.05em] transition-all hover:shadow-[0_8px_30px_rgba(255,92,43,0.4)] w-full sm:w-auto"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}