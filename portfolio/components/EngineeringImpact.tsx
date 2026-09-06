import { TbArrowDown, TbArrowUp } from "react-icons/tb";
import { ProfileContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EngineeringImpact({ content }: { content: ProfileContent }) {
  return (
    <section id="impact" aria-label="Engineering impact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            index="03"
            title="Engineering Impact"
            description="Measured outcomes from production systems, pulled directly from work history."
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {content.impact.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.04}>
              <div className="rounded-xl border border-border bg-surface p-6 transition-transform duration-200 hover:z-10 hover:scale-105">
                <p className="flex items-center gap-1 font-mono text-3xl font-semibold text-accent sm:text-4xl">
                  {metric.value}
                  {metric.direction === "up" ? (
                    <TbArrowUp
                      aria-hidden="true"
                      strokeWidth={3}
                      className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400 sm:h-7 sm:w-7"
                    />
                  ) : (
                    <TbArrowDown
                      aria-hidden="true"
                      strokeWidth={3}
                      className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400 sm:h-7 sm:w-7"
                    />
                  )}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{metric.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{metric.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
