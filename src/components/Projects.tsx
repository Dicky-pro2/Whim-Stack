import { ExternalLink, GitFork } from 'lucide-react'

const projects = [
  {
    name: 'SignalHub',
    desc: 'Real-time analytics dashboard',
    tags: ['React', 'Chart.js', 'WebSocket'],
    category: 'SaaS',
    live: 'https://signalhub-vs25.vercel.app',
    code: '#',
  },
  {
    name: 'ServeCity',
    desc: 'City service request platform',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    category: 'Platform',
    live: null,
    code: '#',
  },
  {
    name: 'Afroganiks',
    desc: 'Natural skincare e-commerce',
    tags: ['React', 'Stripe', 'Sanity'],
    category: 'E-comm',
    live: null,
    code: '#',
  },
  {
    name: 'Luxury Real Estate',
    desc: 'High-end property listings',
    tags: ['Next.js', 'Framer', 'Mapbox'],
    category: 'Web App',
    live: 'https://real-estate-website-psi-kohl.vercel.app',
    code: '#',
  },
  {
    name: 'STACKD',
    desc: 'Developer learning platform',
    tags: ['React', 'Monaco', 'Firebase'],
    category: 'EdTech',
    live: 'https://stacked-burger-nine.vercel.app',
    code: '#',
  },
  {
    name: 'Dandy',
    desc: 'Social scheduling for creators',
    tags: ['TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'SaaS',
    live: 'https://dandy-construction.vercel.app',
    code: '#',
  },
  {
    name: 'DannySalon',
    desc: 'Salon booking web app',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    live: 'https://danny-salon.vercel.app',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">FEATURED WORK</h2>
          <p className="text-gray-600 dark:text-gray-400">Real projects, real impact</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="fade-up group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-200 dark:border-gray-800 hover:border-orange"
            >
              <div className="text-sm text-orange font-medium mb-2 uppercase tracking-wide">{project.category}</div>
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.code} className="text-sm flex items-center gap-1 hover:text-orange transition">
                  <GitFork size={16} /> Code
                </a>
                
                {project.live && (
                  
                   <a href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 hover:text-orange transition"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}