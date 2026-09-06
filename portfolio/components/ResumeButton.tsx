"use client";

import { useEffect, useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TbDownload, TbExternalLink, TbEye, TbX } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  resumeUrl: string | null;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * Derives an embeddable preview URL and a direct download URL from a single
 * configured resumeUrl. Google Drive "view" links aren't raw PDFs, so they
 * need Drive's dedicated /preview (iframe) and uc?export=download endpoints;
 * any other URL (e.g. a local /resume.pdf) is used as-is for both, unchanged
 * from the previous behavior.
 */
function resolveResumeUrls(resumeUrl: string): { previewSrc: string; downloadHref: string } {
  const driveMatch = resumeUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ??
    resumeUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (driveMatch) {
    const fileId = driveMatch[1];
    return {
      previewSrc: `https://drive.google.com/file/d/${fileId}/preview`,
      downloadHref: `https://drive.google.com/uc?export=download&id=${fileId}`,
    };
  }

  return { previewSrc: resumeUrl, downloadHref: resumeUrl };
}

/**
 * Renders nothing when resumeUrl is unset, so the CTA appears automatically
 * once a real resume file + URL are added to the content config — no
 * component changes needed.
 */
export function ResumeButton({ resumeUrl, variant = "secondary", className }: ResumeButtonProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!resumeUrl) return null;

  const { previewSrc, downloadHref } = resolveResumeUrls(resumeUrl);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200",
          variant === "primary"
            ? "bg-accent text-white hover:bg-accent/90"
            : "border border-border text-foreground hover:bg-surface-muted",
          className,
        )}
      >
        <TbEye size={16} aria-hidden="true" />
        View Resume
      </button>

      {/*
        This overlay is always mounted (never conditionally rendered on
        `open`) once resumeUrl is set, specifically so the <iframe> below is
        created exactly once and never unmounted/remounted. Remounting would
        force Google Drive's preview UI to reload from scratch on every
        reopen. Only opacity/scale/visibility are toggled here, animated via
        Framer Motion's `animate` prop (no AnimatePresence, since that would
        unmount the exiting tree — including the iframe — on close).
      */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4",
          !open && "pointer-events-none",
        )}
        initial={false}
        animate={{ opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        onClick={() => setOpen(false)}
      >
        <motion.div
          className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-border bg-surface"
          initial={false}
          animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.95 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <h2 id={titleId} className="text-sm font-medium text-foreground">
              Resume Preview
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <TbExternalLink size={14} aria-hidden="true" />
                Open in Drive
              </a>
              <a
                href={downloadHref}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <TbDownload size={14} aria-hidden="true" />
                Download
              </a>
              <button
                type="button"
                aria-label="Close resume preview"
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <TbX size={16} />
              </button>
            </div>
          </div>
          <iframe
            src={previewSrc}
            title="Resume preview"
            className="flex-1 border-0"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
