import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import work4 from "../assets/work-4.png";
import work5 from "../assets/work-5.png";
import work6 from "../assets/work-6.png";

const slides = [
  { img: work1, label: "DannySalon" },
  { img: work2, label: "Dandy" },
  { img: work3, label: "STACKD" },
  { img: work4, label: "Luxury Real Estate" },
  { img: work5, label: "Afroganiks" },
  { img: work6, label: "SignalHub" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance every 4s (unless hovering)
  useEffect(() => {
    if (isHovering) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovering]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full max-w-[780px] mx-auto mt-12"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

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

        {/* Enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Project name + counter overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 flex items-end justify-between">
          <div>
            <span className="text-[0.65rem] tracking-[0.15em] uppercase font-semibold text-[#FF5C2B] block mb-2">
              ✦ FEATURED PROJECT
            </span>
            <span className="text-lg md:text-xl font-bold text-white">
              {slides[current].label}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[0.7rem] tracking-[0.1em] uppercase font-semibold text-gray-300">
              {current + 1} of {slides.length}
            </span>
          </div>
        </div>

        {/* Arrow buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/30 group"
          aria-label="Previous"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/30 group"
          aria-label="Next"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-1.5 bg-[#FF5C2B]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}