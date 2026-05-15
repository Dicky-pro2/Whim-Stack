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
    <section id="about" className="py-32 px-6 bg-white dark:bg-[#090909]">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="fade-up mb-20">
          <span className="text-[0.75rem] tracking-[0.15em] uppercase font-semibold text-orange dark:text-[#FF5C2B] mb-4 inline-block">
            ✦ ABOUT
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-bold italic text-gray-900 dark:text-[#F2EDE4]"
          >
            Who I am
          </h2>
        </div>

        {/* Main grid — photo left, text right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">

          {/* ── Photo ── */}
          <div
            ref={imgRef.ref}
            className={`transition-all duration-700 ${
              imgRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Accent border behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-orange dark:border-orange/30" />

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
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#111111] border-2 border-orange dark:border-orange/40 rounded-2xl px-6 py-4 shadow-xl">
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl font-bold italic text-gray-900 dark:text-[#F2EDE4]"
                >
                  3+
                </div>
                <div className="text-[0.65rem] tracking-[0.12em] uppercase text-gray-600 dark:text-[#A09B92] mt-1 font-semibold">
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
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              <p>
                I'm Dickson, a frontend developer and the mind behind <span className="text-gray-900 dark:text-[#F2EDE4] font-semibold">Whim Stack</span>. I craft fast, beautiful, and functional digital products — from client websites for local Nigerian businesses to full SaaS platforms.
              </p>
              <p>
                My focus is on creating interfaces that don't just look good — they convert, perform, and leave an impression. I partner with brands that mean business, bringing bold ideas to life with clean code and sharp design.
              </p>
              <p className="text-orange dark:text-[#FF5C2B] font-semibold pt-2">
                ✦ Clean code. &nbsp;✦ Bold design. &nbsp;✦ No nonsense.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-600 dark:text-[#A09B92] border border-gray-300 dark:border-white/[0.12] px-3.5 py-2 rounded-full hover:border-orange dark:hover:border-[#FF5C2B] hover:text-orange dark:hover:text-[#FF5C2B] transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            
             <a href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-3.5 rounded-full font-semibold text-[0.85rem] tracking-[0.05em] transition-all hover:shadow-[0_8px_30px_rgba(255,92,43,0.4)]"
            >
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Stats ── */}
        <div
          ref={statsRef.ref}
          className={`grid grid-cols-3 gap-6 pt-16 border-t border-gray-200 dark:border-white/[0.08] transition-all duration-700 delay-300 ${
            statsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center md:text-left">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl md:text-5xl font-bold italic text-orange dark:text-[#FF5C2B] mb-2"
              >
                {value}
              </div>
              <div className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-600 dark:text-[#A09B92]">
                {label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}