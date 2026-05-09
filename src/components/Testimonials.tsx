const testimonials = [
  { name: 'Alex Chen', role: 'Founder @ ServeCity', text: 'WHIM.STACK didn\'t just build a site — they built an experience. The attention to detail is insane.' },
  { name: 'Samira K.', role: 'Creative Director', text: 'Best frontend team I\'ve worked with. Animations are buttery smooth and they actually care about performance.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">KIND WORDS</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">What clients say about working with us</p>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-left hover:border-orange transition">
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">"{t.text}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-orange">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}