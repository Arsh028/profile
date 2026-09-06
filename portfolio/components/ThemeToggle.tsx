"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration-safe mount flag: server can't know the persisted theme, so we
    // render a stable default until the client mounts and next-themes resolves it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
    >
      {isDark ? <TbSun size={16} /> : <TbMoon size={16} />}
    </button>
  );
}
