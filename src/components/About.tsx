import dickson from "../assets/dickson.png";
import { useInView } from "../hooks/useInView";

const stats = [
  { value: "15+",  label: "Projects Delivered"  },
  { value: "3+",   label: "Years Experience"     },
  { value: "100%", label: "Client Satisfaction"  },
];

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Supabase", "Vite", "Figma", "Node.js",
];

const WHATSAPP_URL =
  "https://wa.me/2349162869066?text=Hi%20Dickson%2C%20I%27d%20like%20to%20work%20with%20you!";

export default function About() {
  const imgRef   = useInView();
  const textRef  = useInView();
  const statsRef = useInView();

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="fade-up mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide bg-orange/10 text-orange dark:bg-orange/20 rounded-full mb-4">
            ✦ ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            WHO WE ARE
          </h2>
        </div>

        {/* Main grid — photo left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Photo ── */}
          <div
            ref={imgRef.ref}
            className={`transition-all duration-700 ${
              imgRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Accent border behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-orange/20" />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 dark:bg-gray-800">
                <img
                  src={dickson}
                  alt="Dickson — Whim Stack"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  3+
                </div>
                <div className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 mt-0.5">
                  Yrs Experience
                </div>
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div
            ref={textRef.ref}
            className={`transition-all duration-700 delay-200 ${
              textRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              <p>
                WHIM.STACK isn't just another dev shop. We're a frontend collective
                obsessed with turning bold ideas into interfaces that actually feel
                alive. Born in Lagos, building for the world.
              </p>
              <p>
                What makes us different? We don't just write code — we craft
                experiences. Every animation, every transition, every pixel is
                intentional. We partner with brands that mean business and want
                to stand out.
              </p>
              <p className="text-orange font-semibold">
                ✦ Clean code. &nbsp;✦ Bold design. &nbsp;✦ No nonsense.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs tracking-widest uppercase text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-full hover:border-orange hover:text-orange transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105"
            >
              LET'S WORK TOGETHER
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          ref={statsRef.ref}
          className={`grid grid-cols-3 gap-6 mt-24 pt-12 border-t border-gray-200 dark:border-gray-800 transition-all duration-700 delay-300 ${
            statsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold tracking-tighter text-orange mb-1">
                {value}
              </div>
              <div className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400">
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}