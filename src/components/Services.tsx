import { Globe, Layout, Code, Rocket } from 'lucide-react'

const services = [
  { icon: <Globe size={24} />, title: 'Modern Websites', desc: 'Fast, responsive, and built to convert visitors into clients.' },
  { icon: <Layout size={24} />, title: 'SaaS Frontends', desc: 'Scalable dashboards with auth, real-time data, and smooth UX.' },
  { icon: <Code size={24} />, title: 'Custom Dev', desc: 'React, Next.js, TypeScript — clean, maintainable architecture.' },
  { icon: <Rocket size={24} />, title: 'Performance', desc: 'Core Web Vitals, SEO optimization, and fluid animations.' }
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="fade-up mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ SERVICES
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-6"
          >
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
            Solutions designed to scale with your ambition
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="fade-up group p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_8px_40px_rgba(255,92,43,0.1)]"
            >
              {/* Icon */}
              <div className="text-orange dark:text-[#FF5C2B] mb-6 p-3 rounded-xl bg-orange/10 dark:bg-[#FF5C2B]/10 w-fit group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-[#F2EDE4] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}