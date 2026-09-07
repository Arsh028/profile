"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const SECTION_IDS = [
  "home",
  "experience",
  "impact",
  "about",
  "skills",
  "projects",
  "contact",
];

const DEPTH_THRESHOLDS = [25, 50, 75, 100];

export function ScrollAnalytics() {
  useEffect(() => {
    const seenSections = new Set<string>();
    const seenDepths = new Set<number>();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !seenSections.has(entry.target.id)) {
            seenSections.add(entry.target.id);
            track("section_view", { section: entry.target.id });
          }
        }
      },
      { threshold: 0.5 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    }

    let ticking = false;

    function checkScrollDepth() {
      ticking = false;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percentScrolled = (window.scrollY / docHeight) * 100;

      for (const threshold of DEPTH_THRESHOLDS) {
        if (percentScrolled >= threshold && !seenDepths.has(threshold)) {
          seenDepths.add(threshold);
          track("scroll_depth", { depth: threshold });
        }
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScrollDepth);
      }
    }

    checkScrollDepth();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
