import { ProfileContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";

export function About({ content }: { content: ProfileContent }) {
  return (
    <section id="about" aria-label="About" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading index="04" title="About" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[180px_1fr] lg:gap-10">
          <Reveal>
            <p className="font-mono text-sm text-muted-foreground">{"// who-am-i.md"}</p>
          </Reveal>

          <div className="space-y-5">
            {content.aboutParagraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <RichText
                  text={paragraph}
                  className="text-base leading-relaxed text-muted-foreground"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
