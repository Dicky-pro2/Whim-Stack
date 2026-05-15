const tech = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'Framer Motion',
  'Node.js',
  'Vite',
  'Figma',
  'Firebase',
  'Stripe',
  'PostgreSQL',
]

export default function Stack() {
  return (
    <section id="stack" className="py-32 px-6 bg-white dark:bg-[#090909]">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="fade-up text-center mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ TECH STACK
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-6"
          >
            Tools I Use
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Built with technologies I actually enjoy using
          </p>
        </div>

        {/* Tech pills grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="fade-up px-5 py-2.5 bg-white dark:bg-[#111111] rounded-full text-[0.8rem] font-medium tracking-[0.05em] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] hover:text-orange dark:hover:text-[#FF5C2B] hover:bg-orange/5 dark:hover:bg-[#FF5C2B]/5 transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}