"use client";

import { useEffect } from "react";

/**
 * Drives the design's CSS-based motion:
 *  - adds `.loaded` to <body> so the hero reveal/blob transitions fire once
 *  - reveals `.reveal` elements as they scroll into view (or immediately for
 *    reduced-motion / no IntersectionObserver)
 * Renders nothing.
 */
export default function SiteEffects() {
  useEffect(() => {
    const body = document.body;
    const raf = requestAnimationFrame(() => body.classList.add("loaded"));
    // Fallback so animations never stay stuck if `load` is slow.
    const fallback = window.setTimeout(() => body.classList.add("loaded"), 1200);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    let io: IntersectionObserver | undefined;

    if (reduced || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io!.unobserve(en.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io!.observe(el));
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      io?.disconnect();
    };
  }, []);

  return null;
}
