import { highlightCode } from "@/lib/highlight";

interface CodeBlockProps {
  code: string;
  lang?: string;
  filename?: string;
}

export async function CodeBlock({
  code,
  lang = "typescript",
  filename = "arsh.ts",
}: CodeBlockProps) {
  const html = await highlightCode(code, lang);

  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-code-bg shadow-2xl shadow-black/20">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />

        <span className="ml-3 font-mono text-xs text-white/50">
          {filename}
        </span>
      </div>

      {/* Code */}
      <div
        className="code-block-scroll max-h-[420px] overflow-x-auto overflow-y-auto p-4 text-[11px] leading-5 sm:max-h-[510px] sm:p-6 sm:text-[12px] sm:leading-5 lg:max-h-[430px] [&_pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}