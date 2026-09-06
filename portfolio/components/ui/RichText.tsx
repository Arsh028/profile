import { Fragment } from "react";

/**
 * Renders `text`, turning `**marked**` substrings into bold, accent-colored
 * spans. The markup lives directly in content strings (e.g. in
 * content/variants/default.ts), so which words are highlighted is
 * configurable by editing content data alone — no component changes needed.
 */
export function RichText({
  text,
  className,
  markClassName = "text-accent",
}: {
  text: string;
  className?: string;
  /** Classes applied to `**marked**` spans instead of the default accent color. */
  markClassName?: string;
}) {
  const parts = text.split(/(\*\*.+?\*\*)/g);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className={`font-semibold ${markClassName}`}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </span>
  );
}
