"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TbBolt, TbBrandGithub, TbChevronDown, TbExternalLink } from "react-icons/tb";
import { ProjectEntry } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

const IMPACT_BADGE_TONE_CLASSES: Record<string, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const detailsContent = (
    <div className="space-y-4 pt-4">
      {project.githubUrl || project.liveUrl ? (
        <div className="flex shrink-0 gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <TbBrandGithub size={16} />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live link`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <TbExternalLink size={16} />
            </a>
          ) : null}
        </div>
      ) : null}

      <div className="space-y-3 border-t border-border pt-4 text-sm">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">Problem</p>
          <p className="mt-1 text-muted-foreground">{project.problem}</p>
        </div>

        {project.features.length ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
              Key Features
            </p>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.challenges.length ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
              Engineering Challenges
            </p>
            <ul className="mt-1 space-y-1 text-muted-foreground">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-2">
                  <span className="text-accent" aria-hidden="true">
                    •
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.metrics?.length ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
              Impact
            </p>
            <ul className="mt-1 space-y-1 text-emerald-600 dark:text-emerald-400">
              {project.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
        {project.status ? (
          <Badge className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            {project.status}
          </Badge>
        ) : null}
        {project.architecture ? <Badge>{project.architecture}</Badge> : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-transform duration-200 hover:-translate-y-1">
      {project.impactBadge ? (
        <span
          className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
            IMPACT_BADGE_TONE_CLASSES[project.impactBadge.tone] ?? IMPACT_BADGE_TONE_CLASSES.accent
          }`}
        >
          <TbBolt size={14} aria-hidden="true" />
          {project.impactBadge.label}
        </span>
      ) : null}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-label={`${expanded ? "Collapse" : "Expand"} details for ${project.name}`}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div>
          <p className="font-mono text-xs text-muted-foreground">{project.org}</p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{project.name}</h3>
        </div>
        <TbChevronDown
          size={18}
          aria-hidden="true"
          className={`mt-1 shrink-0 text-muted-foreground transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <p
        className={`mt-3 text-sm leading-relaxed text-muted-foreground ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {project.description}
      </p>

      {shouldReduceMotion ? (
        expanded ? detailsContent : null
      ) : (
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {detailsContent}
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </article>
  );
}
