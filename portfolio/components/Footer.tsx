import { ProfileContent } from "@/content/types";

export function Footer({ content }: { content: ProfileContent }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {year} {content.name}
        </p>
        <p className="font-mono">If you're interested in discussing potential collaborations, learning more about my work, please feel free to connect with me on LinkedIn.</p>
      </div>
    </footer>
  );
}
