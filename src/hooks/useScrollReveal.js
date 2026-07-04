import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to the referenced element once it enters
 * the viewport, powering the CSS-only reveal animation defined in
 * styles/utilities.css. Replaces Framer Motion's whileInView.
 */
export function useScrollReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
