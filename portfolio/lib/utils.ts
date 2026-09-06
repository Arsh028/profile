import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Years elapsed since `startDateIso`, rounded down to the nearest half-year
 * (4, 4.5, 5, 5.5, ...), computed at render time so "years of experience"
 * advances on a predictable half-year cadence instead of jumping once a year.
 */
export function experienceYears(startDateIso: string, now: Date = new Date()): number {
  const start = new Date(startDateIso);
  const years = (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years * 2) / 2;
}

/**
 * Compact, human-readable duration between `startDateIso` and `endDateIso`
 * (or `now` when ongoing), e.g. "1 yr 8 mo", "3 yrs", "5 mo".
 */
export function formatDuration(
  startDateIso: string,
  endDateIso: string | null,
  now: Date = new Date(),
): string {
  const start = new Date(startDateIso);
  const end = endDateIso ? new Date(endDateIso) : now;

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) {
    totalMonths -= 1;
  }
  totalMonths = Math.max(0, totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }
  if (months > 0 || years === 0) {
    parts.push(`${months} mo`);
  }

  return parts.join(" ");
}
