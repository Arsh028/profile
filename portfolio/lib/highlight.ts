import { getSingletonHighlighter } from "shiki";

/**
 * Renders code to HTML at build/request time on the server only — Shiki
 * never ships to the client bundle. The code panel's background is always
 * dark regardless of site theme (see `bg-code-bg` in CodeBlock.tsx), so we
 * always highlight with the dark theme — toggling to a light-theme palette
 * here would pair light-background-tuned text colors with a background
 * that never changes, making plain tokens unreadable in light mode.
 */
export async function highlightCode(code: string, lang: string): Promise<string> {
  const highlighter = await getSingletonHighlighter({
    themes: ["github-dark-default"],
    langs: [lang],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark-default",
  });
}
