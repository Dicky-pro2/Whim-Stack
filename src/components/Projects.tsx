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
    <section id="projects" className="py-32 px-6 bg-white dark:bg-[#090909]">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="fade-up mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ WORK
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-6"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real projects, real impact
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="fade-up group bg-white dark:bg-[#111111] rounded-2xl p-8 border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] transition-all duration-200 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-[0_8px_40px_rgba(255,92,43,0.1)]"
            >
              {/* Category tag */}
              <div className="text-[0.65rem] text-orange dark:text-[#FF5C2B] font-semibold mb-3 uppercase tracking-[0.12em]">
                {project.category}
              </div>

              {/* Project name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-[#F2EDE4] mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[0.65rem] tracking-[0.08em] uppercase font-medium bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-400 px-2.5 py-1.5 rounded-full border border-gray-200 dark:border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-5 pt-4 border-t border-gray-200 dark:border-white/[0.08]">
                
                 <a href={project.code}
                  className="text-[0.7rem] tracking-[0.08em] uppercase font-semibold flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-orange dark:hover:text-[#FF5C2B] transition-colors duration-200"
                >
                  <GitFork size={14} /> Code
                </a>

                {project.live && (
                  
                   <a href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] tracking-[0.08em] uppercase font-semibold flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-orange dark:hover:text-[#FF5C2B] transition-colors duration-200"
                  >
                    <ExternalLink size={14} /> Live Demo
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