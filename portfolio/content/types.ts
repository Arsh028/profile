export interface SocialLink {
  label: string;
  url: string;
  icon: "linkedin" | "github" | "email" | "stackoverflow" | "phone";
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  /** ISO date the role started — used to compute a live "X years Y months" duration. */
  startDate: string;
  /** ISO date the role ended, or null if current. */
  endDate: string | null;
  isCurrent: boolean;
  remote: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  /** Path to the company's logo image (e.g. "/birdeye-logo.webp"). */
  logoSrc?: string;
  /** URL to the company's LinkedIn page; when present alongside logoSrc, the logo becomes a link. */
  linkedinUrl?: string;
}

export interface ProjectEntry {
  slug: string;
  name: string;
  org: string;
  description: string;
  problem: string;
  challenges: string[];
  features: string[];
  technologies: string[];
  metrics?: string[];
  architecture?: string;
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Short standout stat shown as a colored pill on the project card. */
  impactBadge?: {
    label: string;
    tone: "accent" | "emerald" | "amber" | "violet";
  };
}

export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
  /** Whether this metric represents an increase or a decrease — both are positive outcomes here. */
  direction: "up" | "down";
}

export interface HeroCode {
  className: string;
  baseClass: string;
  focusAreas: string[];
  metricKeys: { key: string; value: string }[];
}

export interface ProfileContent {
  variant: string;
  name: string;
  title: string;
  tagline: string;
  /** Substring of `tagline` to render with the neon gradient accent. */
  taglineHighlight: string;
  /** Company name within `title` to render as a clickable link with its logo. */
  companyHighlight: {
    text: string;
    url: string;
    logoSrc: string;
  };
  experienceStartDate: string; // ISO date, used to compute live years-of-experience
  /** May contain the literal token "{{YEARS}}", replaced at render time with the live half-year-stepped experience figure. */
  heroIntro: string;
  aboutParagraphs: string[];
  heroCode: HeroCode;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  impact: ImpactMetric[];
  links: SocialLink[];
  resumeUrl: string | null;
}
