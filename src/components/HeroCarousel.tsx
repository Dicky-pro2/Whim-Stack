import { useState, useEffect } from "react";

import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import work5 from "../assets/work-5.png";
import work6 from "../assets/work-6.png";

const slides = [
  { img: work1, label: "Danny-Salon" },
  { img: work2, label: "Dandy" },
  { img: work3, label: "STACKD" },
  { img: work4, label: "Luxury Real Estate" },
  { img: work5, label: "Afroganks" },
  { img: work6, label: "SignalHub" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[780px] mx-auto mt-12 max-h-[740px]">

      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] aspect-[18/14] bg-[#111]">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.img}
            alt={slide.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Project name overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#FF5C2B]">
            {slides[current].label}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-1.5 bg-[#FF5C2B]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}