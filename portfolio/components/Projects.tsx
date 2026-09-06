import { ProfileContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects({ content }: { content: ProfileContent }) {
  return (
    <section id="projects" aria-label="Projects" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading
            index="07"
            title="Projects"
            description="Production systems built to handle scale, failure, and change."
          />
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {content.projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
