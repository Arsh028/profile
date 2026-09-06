"use client";

import { useEffect, useState } from "react";

interface TypedSuffixProps {
  /** Static text shown immediately, with no animation. */
  prefix: string;
  /** Text that is revealed one character at a time on mount. */
  suffix: string;
  /** Interval between revealed characters, in ms. */
  intervalMs?: number;
}

export function TypedSuffix({ prefix, suffix, intervalMs = 100 }: TypedSuffixProps) {
  const [typedCount, setTypedCount] = useState(0);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // One-time reduced-motion check on mount: window.matchMedia is only
      // available client-side, so this can't be done as a lazy useState
      // initializer (which would break SSR) — the setState calls here are
      // synchronous but intentional and run at most once.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkipAnimation(true);
      setTypedCount(suffix.length);
      return;
    }

    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      setTypedCount(count);
      if (count >= suffix.length) {
        window.clearInterval(timer);
      }
    }, intervalMs);

    return () => window.clearInterval(timer);
    // Runs once on mount only, by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isTyping = !skipAnimation && typedCount < suffix.length;

  return (
    <span aria-label={`${prefix}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {suffix.slice(0, typedCount)}
        {isTyping ? (
          <span className="terminal-cursor" aria-hidden="true">
            |
          </span>
        ) : null}
      </span>
    </span>
  );
}
