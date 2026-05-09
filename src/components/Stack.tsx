const tech = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Framer Motion', 'Node.js', 'Vite']

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">TECH STACK</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">Tools we actually enjoy using</p>
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <span key={i} className="px-5 py-2.5 bg-white dark:bg-gray-900 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-800 hover:border-orange hover:text-orange transition">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}