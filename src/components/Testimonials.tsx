const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Founder @ ServeCity',
    text: 'WHIM.STACK didn\'t just build a site — they built an experience. The attention to detail is insane.',
    avatar: '🧑‍💼',
  },
  {
    name: 'Samira K.',
    role: 'Creative Director',
    text: 'Best frontend team I\'ve worked with. Animations are buttery smooth and they actually care about performance.',
    avatar: '👩‍🎨',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="fade-up text-center mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ TESTIMONIALS
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4] mb-6"
          >
            Kind Words
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/[0.08] hover:border-orange dark:hover:border-[#FF5C2B] transition-all duration-200 hover:shadow-lg dark:hover:shadow-[0_8px_40px_rgba(255,92,43,0.1)]"
            >
              {/* Quote mark */}
              <div className="text-4xl text-orange dark:text-[#FF5C2B] mb-4 leading-none">
                "
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                {t.text}
              </p>

              {/* Author info */}
              <div className="pt-6 border-t border-gray-200 dark:border-white/[0.08] flex items-center gap-3">
                <div className="text-2xl">{t.avatar}</div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 dark:text-[#F2EDE4] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[0.7rem] text-orange dark:text-[#FF5C2B] tracking-[0.08em] uppercase font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}