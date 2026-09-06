import Image from "next/image";
import { TbChevronDown } from "react-icons/tb";
import { ProfileContent } from "@/content/types";
import { buildHeroCode } from "@/lib/hero-code";
import { experienceYears } from "@/lib/utils";
import { CodeBlock } from "@/components/CodeBlock";
import { ResumeButton } from "@/components/ResumeButton";
import { RichText } from "@/components/ui/RichText";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { TypedSuffix } from "@/components/ui/TypedSuffix";

/** Splits `text` around the first occurrence of `highlight`, or returns it whole if not found. */
function splitOnHighlight(text: string, highlight: string) {
  const index = text.indexOf(highlight);
  if (index === -1) return { before: text, highlight: "", after: "" };
  return {
    before: text.slice(0, index),
    highlight: text.slice(index, index + highlight.length),
    after: text.slice(index + highlight.length),
  };
}

export function Hero({ content }: { content: ProfileContent }) {
  const code = buildHeroCode(content);
  const github = content.links.find((link) => link.icon === "github");
  const namePrefix = content.name.slice(0, -6);
  const nameSuffix = content.name.slice(-6);
  const years = experienceYears(content.experienceStartDate);
  const heroIntro = content.heroIntro.replace("{{YEARS}}", `${years}`);
  const tagline = splitOnHighlight(content.tagline, content.taglineHighlight);
  const title = splitOnHighlight(content.title, content.companyHighlight.text);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex flex-col justify-center overflow-hidden border-b border-border lg:min-h-[calc(100dvh-70px)]"
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] opacity-40"
      />

      <div className="relative mx-auto grid grid-cols-1 max-w-7xl gap-8 px-6 py-10 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16 lg:py-28">
        <Reveal className="min-w-0">
          <p className="mb-4 font-mono text-sm text-accent">
            <span aria-hidden="true">$ whoami</span>
            <span className="terminal-cursor ml-1" aria-hidden="true">
              _
            </span>
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <TypedSuffix prefix={namePrefix} suffix={nameSuffix} />
          </h1>

          <p className="mt-3 flex flex-wrap items-center gap-1.5 text-lg font-medium text-foreground/90 sm:text-xl">
            {title.before}
            <a
              href={content.companyHighlight.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent/80 hover:underline"
            >
              <Image
                src={content.companyHighlight.logoSrc}
                alt=""
                width={20}
                height={20}
                className="rounded-sm"
              />
              {title.highlight}
            </a>
            {title.after}
          </p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            {tagline.before}
            <span className="bg-gradient-to-r from-[#5b9dff] via-[#8b8bf5] to-[#c084fc] bg-clip-text font-semibold text-transparent">
              {tagline.highlight}
            </span>
            {tagline.after}
          </p>

          <RichText
            text={heroIntro}
            className="mt-6 block max-w-xl text-base leading-relaxed text-muted-foreground"
            markClassName="text-accent dark:text-white"
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              Contact Me
            </a>
            {github ? (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
              >
                <SocialIcon icon="github" />
                GitHub
              </a>
            ) : null}
            <ResumeButton resumeUrl={content.resumeUrl} />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="min-w-0">
          <CodeBlock code={code} />
        </Reveal>
      </div>

      <div className="sticky bottom-4 z-10 flex justify-center pt-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:pt-0">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="font-mono text-xs">scroll</span>
          <TbChevronDown className="animate-bounce" size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
