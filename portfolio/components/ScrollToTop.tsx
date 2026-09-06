"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TbArrowUp } from "react-icons/tb";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const NEAR_BOTTOM_THRESHOLD = 150;

    function checkScrollPosition() {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - NEAR_BOTTOM_THRESHOLD;
      setVisible(scrolledToBottom);
    }

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  const buttonClassName =
    "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-lg hover:bg-surface-muted hover:text-foreground";

  if (shouldReduceMotion) {
    return visible ? (
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleClick}
        className={buttonClassName}
      >
        <TbArrowUp size={24} />
      </button>
    ) : null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={handleClick}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={buttonClassName}
        >
          <TbArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
