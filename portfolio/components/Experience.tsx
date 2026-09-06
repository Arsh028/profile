import Image from "next/image";
import { ProfileContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { RichText } from "@/components/ui/RichText";
import { formatDuration } from "@/lib/utils";

export function Experience({ content }: { content: ProfileContent }) {
  return (
    <section id="experience" aria-label="Work experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <div className="space-y-6">
          {content.experience.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 0.05}>
              <article className="rounded-2xl border border-border bg-surface text-[15px] text-muted-foreground shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-6 py-4">
                  <span className="text-sm font-medium tracking-wide text-accent">
                    {entry.period} · {formatDuration(entry.startDate, entry.endDate)}
                  </span>
                  {entry.isCurrent ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      ● ACTIVE
                    </span>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 gap-8 px-6 py-6 lg:grid-cols-[280px_1fr]">
                  <div className="space-y-5 lg:border-r lg:border-border lg:pr-8">
                    {entry.linkedinUrl ? (
                      <a
                        href={entry.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${entry.company} on LinkedIn`}
                        className="group/company -ml-2 -mr-2 -mt-2 flex items-center gap-3 rounded-xl p-2 transition-all duration-200 hover:bg-accent/5 hover:shadow-[0_0_20px_-2px] hover:shadow-accent/30"
                      >
                        {entry.logoSrc ? (
                          <Image
                            src={entry.logoSrc}
                            alt={`${entry.company} logo`}
                            width={36}
                            height={36}
                            className="h-9 w-9 shrink-0 rounded-lg object-cover ring-1 ring-border transition-all duration-200 group-hover/company:ring-accent/60"
                          />
                        ) : (
                          <CompanyLogo name={entry.company} className="ring-1 ring-border transition-all duration-200 group-hover/company:ring-accent/60" />
                        )}
                        <div className="space-y-0.5">
                          <p className="text-base font-semibold text-foreground transition-colors duration-200 group-hover/company:text-accent">
                            {entry.company}
                          </p>
                          <p className="text-sm text-muted-foreground">{entry.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {entry.location}
                            {entry.remote ? " · Remote" : ""}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">
                        <CompanyLogo name={entry.company} className="ring-1 ring-border" />
                        <div className="space-y-0.5">
                          <p className="text-base font-semibold text-foreground">{entry.company}</p>
                          <p className="text-sm text-muted-foreground">{entry.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {entry.location}
                            {entry.remote ? " · Remote" : ""}
                          </p>
                        </div>
                      </div>
                    )}

                    <p className="leading-relaxed text-muted-foreground">{entry.summary}</p>
                  </div>

                  <div className="space-y-5">
                    <ul className="space-y-2">
                      {entry.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2.5 leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                          <RichText text={item} />
                        </li>
                      ))}
                    </ul>

                    {entry.achievements.length ? (
                      <ul className="space-y-2 border-t border-border pt-5">
                        {entry.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 leading-relaxed text-emerald-700 dark:text-emerald-300/90"
                          >
                            <span aria-hidden="true">✓</span>
                            <RichText text={item} />
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                      {entry.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="border-border bg-surface-muted text-xs font-normal text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
