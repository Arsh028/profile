"use client";

import { useRef, useState } from "react";
import { TbCheck, TbCopy } from "react-icons/tb";
import { ProfileContent, SocialLink } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/ui/Reveal";

// The terminal card below always renders on a dark background (bg-code-bg),
// regardless of site theme, so its interactive accents use a fixed color
// here instead of the theme-aware `text-accent` token — using `text-accent`
// would flip to a muted, low-contrast blue against this dark card in light
// mode.
const TERMINAL_ACCENT = "text-[#5b9dff]";

function getCopyValue(link: SocialLink): string {
  if (link.icon === "email") return link.url.replace("mailto:", "");
  if (link.icon === "phone") return "+91 89285 32522";
  return link.url;
}

export function Contact({ content }: { content: ProfileContent }) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCopy(link: SocialLink) {
    try {
      await navigator.clipboard.writeText(getCopyValue(link));
      setCopiedLabel(link.label);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopiedLabel(null), 1500);
    } catch {
      // Clipboard API unavailable or permission denied — fail silently.
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <SectionHeading index="06" title="Contact" />
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-border bg-code-bg font-mono text-sm text-white/80 shadow-lg shadow-black/10">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-white/50">contact.sh</span>
            </div>

            <div className="space-y-4 px-5 py-6">
              <p>
                <span className={TERMINAL_ACCENT}>$</span> connect --with &quot;{content.name}&quot;
              </p>

              <ul className="space-y-2 pl-4">
                {content.links.map((link) => {
                  const displayLabel =
                    link.icon === "phone" ? "Phone: +91 89285 32522" : link.label;
                  const isCopied = copiedLabel === link.label;

                  return (
                    <li key={link.label} className="relative">
                      <a
                        href={link.url}
                        target={link.icon === "email" || link.icon === "phone" ? undefined : "_blank"}
                        rel={link.icon === "email" || link.icon === "phone" ? undefined : "noopener noreferrer"}
                        onClick={() => handleCopy(link)}
                        title={getCopyValue(link)}
                        aria-label={`${displayLabel}: ${getCopyValue(link)}`}
                        className="group/link relative flex items-center gap-3 text-white/80 transition-colors hover:text-[#5b9dff]"
                      >
                        {/* Two states are stacked in the same grid cell and
                            crossfaded via opacity so the row keeps a stable
                            width and never reflows on hover. Both are
                            aria-hidden — the <a>'s aria-label above carries
                            the accessible name regardless of hover/copy
                            state. */}
                        <span className="relative grid items-center">
                          <span
                            aria-hidden="true"
                            className={`col-start-1 row-start-1 inline-flex items-center gap-2 transition-opacity duration-150 ${
                              isCopied
                                ? "opacity-0"
                                : "opacity-100 group-hover/link:opacity-0 group-focus-visible/link:opacity-0"
                            }`}
                          >
                            <span>&gt;</span>
                            <SocialIcon icon={link.icon} size={15} />
                            {displayLabel}
                          </span>

                          <span
                            aria-hidden="true"
                            className={`col-start-1 row-start-1 inline-flex items-center gap-2 transition-opacity duration-150 ${
                              isCopied
                                ? "opacity-100 text-emerald-400"
                                : "opacity-0 text-[#5b9dff] group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
                            }`}
                          >
                            {isCopied ? <TbCheck size={14} /> : <TbCopy size={14} />}
                            {isCopied ? "Copied!" : "Copy"}
                          </span>

                          <span
                            role="tooltip"
                            className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 hidden max-w-[60vw] -translate-y-1/2 truncate whitespace-nowrap rounded-md border border-white/10 bg-[#11151c] px-2.5 py-1 text-xs text-white/70 opacity-0 shadow-lg shadow-black/30 transition-opacity duration-150 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 sm:block"
                          >
                            {getCopyValue(link)}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p>
                <span className={TERMINAL_ACCENT}>$</span> status
              </p>
              <p className="pl-4 text-emerald-400">OPEN_FOR_OPPORTUNITIES</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
