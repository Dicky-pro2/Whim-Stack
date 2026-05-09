export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-4xl mx-auto fade-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          WHO WE ARE
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          <p>
            WHIM.STACK isn't just another dev shop. We're a frontend collective obsessed with turning bold ideas into 
            interfaces that actually feel alive. Born in Lagos, building for the world.
          </p>
          <p>
            What makes us different? We don't just write code — we craft experiences. Every animation, every transition,
            every pixel is intentional. We partner with brands that mean business and want to stand out.
          </p>
          <p className="pt-4">
            <span className="text-orange font-semibold">✦ Clean code. ✦ Bold design. ✦ No nonsense.</span>
          </p>
        </div>
      </div>
    </section>
  )
}