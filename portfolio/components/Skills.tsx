import { ProfileContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillIcon } from "@/components/ui/SkillIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Skills({ content }: { content: ProfileContent }) {
  return (
    <section id="skills" aria-label="Technical skills" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            index="05"
            title="Technical Skills"
            description="Technologies used in production systems."
          />
        </Reveal>

        <div className="space-y-10">
          {content.skills.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.04}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-3 text-sm text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent/50"
                  >
                    <SkillIcon name={item.icon} className="shrink-0 text-foreground" />
                    <span className="truncate">{item.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
