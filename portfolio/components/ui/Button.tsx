import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external,
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200",
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90"
      : "border border-border text-foreground hover:bg-surface-muted",
    className,
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {icon}
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
