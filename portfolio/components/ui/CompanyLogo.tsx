import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  className?: string;
}

/**
 * Deterministic monogram/initial avatar used in place of a real company
 * logo asset (none exists in this project). Picks up to two initials from
 * the significant words in `name` and a stable background color from a
 * small fixed palette, hashed from the company name so the same company
 * always renders the same color.
 */
const PALETTE = [
  "bg-accent/15 text-accent ring-accent/30",
  "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
  "bg-amber-500/15 text-amber-400 ring-amber-500/30",
  "bg-violet-500/15 text-violet-400 ring-violet-500/30",
  "bg-sky-500/15 text-sky-400 ring-sky-500/30",
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  const initials = words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
  return initials || name.slice(0, 1).toUpperCase();
}

export function CompanyLogo({ name, className }: CompanyLogoProps) {
  const palette = PALETTE[hashString(name) % PALETTE.length];

  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-semibold tracking-wide ring-1",
        palette,
        className,
      )}
    >
      {getInitials(name)}
    </span>
  );
}
