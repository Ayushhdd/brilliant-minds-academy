"use client";

import { useEffect } from "react";

function shouldUseLightweightExperience() {
  // Safari reports conservative hardware values, including on recent iPhones.
  // Respect the visitor's motion preference, but do not silently disable the
  // interactive experience based on an unreliable hardware guess.
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(prefers-reduced-data: reduce)").matches ||
    connection?.saveData === true
  );
}

export default function RevealOnScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lightweightExperience = shouldUseLightweightExperience();
    let frame = 0;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--page-progress", progress.toString());
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    root.classList.toggle("performance-lite", lightweightExperience);

    if (lightweightExperience || reduceMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("motion-ready");
      root.style.setProperty("--page-progress", "0");
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
