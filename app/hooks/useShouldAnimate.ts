"use client";

import { useEffect, useState } from "react";

/**
 * Returns false only when user prefers reduced motion (accessibility).
 * Animations stay on everywhere else; use shorter durations for performance.
 */
export function useShouldAnimate(): boolean {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setShouldAnimate(!reducedMotion.matches);
    update();
    reducedMotion.addEventListener("change", update);
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  return shouldAnimate;
}
