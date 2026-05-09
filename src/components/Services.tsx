import { Globe, Layout, Code, Rocket } from 'lucide-react'

const services = [
  { icon: <Globe size={28} />, title: 'Modern Websites', desc: 'Fast, responsive, and built to convert.' },
  { icon: <Layout size={28} />, title: 'SaaS Frontends', desc: 'Scalable dashboards with auth & real-time data.' },
  { icon: <Code size={28} />, title: 'Custom Dev', desc: 'React, Next.js, TypeScript — clean architecture.' },
  { icon: <Rocket size={28} />, title: 'Performance', desc: 'Core Web Vitals, SEO, and buttery animations.' }
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">WHAT WE OFFER</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Solutions that scale with your ambition</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="fade-up p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange transition-all hover:-translate-y-1">
              <div className="text-orange mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}