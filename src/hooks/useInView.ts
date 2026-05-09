import { useEffect, useRef, useState } from "react";

/**
 * useInView
 * ---------
 * Returns a ref and an `inView` boolean.
 * Attach `ref` to any element — `inView` becomes true
 * once that element enters the viewport.
 *
 * Usage:
 *   const { ref, inView } = useInView();
 *   <div ref={ref} className={inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}>
 *     ...
 *   </div>
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once, then stop observing
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}