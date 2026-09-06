import type { IconType } from "react-icons";
import {
  SiApachekafka, SiArgo, SiDocker, SiDotnet, SiElasticsearch, SiExpress, SiGo,
  SiGooglechrome, SiGrafana, SiJavascript, SiJenkins, SiKibana, SiKubernetes, SiLangchain,
  SiMongodb, SiNestjs, SiNodedotjs, SiPostgresql, SiPrometheus, SiPuppeteer,
  SiPython, SiRabbitmq, SiRedis, SiSocketdotio, SiSpringboot, SiTypescript,
} from "react-icons/si";
import { DiJava, DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure, TbBrandOpenai, TbCode } from "react-icons/tb";

// Python's real identity is the two intertwined snakes rendered in two colors
// (blue + yellow). Simple Icons' SiPython path is a single monochrome fill,
// so a single forced `color` washes that out. This reproduces the mark as two
// overlaid paths (each already self-contained, including its own "eye" hole
// via opposing winding direction) so it reads as the actual Python logo.
const PYTHON_TOP_PATH =
  "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z";
const PYTHON_BOTTOM_PATH =
  "m13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z";

function PythonIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d={PYTHON_TOP_PATH} fill="#3776AB" />
      <path d={PYTHON_BOTTOM_PATH} fill="#FFD43B" />
    </svg>
  );
}

const REGISTRY: Record<string, IconType> = {
  SiTypescript, SiJavascript, DiJava, SiPython, SiDotnet, SiGo, SiNodedotjs, SiNestjs,
  SiExpress, SiSpringboot, SiMongodb, DiMysql, SiPostgresql, SiRedis, SiElasticsearch,
  SiApachekafka, SiRabbitmq, TbBrandAzure, SiSocketdotio, SiPuppeteer, SiGooglechrome,
  SiLangchain, TbBrandOpenai, SiDocker, SiKubernetes, FaAws, SiGrafana, SiPrometheus,
  SiKibana, SiJenkins, SiArgo, TbCode,
};

const BRAND_COLORS: Record<string, string> = {
  SiTypescript: "#3178C6", SiJavascript: "#F7DF1E", DiJava: "#ED8B00", SiDotnet: "#512BD4",
  SiGo: "#00ADD8", SiNodedotjs: "#339933", SiNestjs: "#E0234E",
  SiSpringboot: "#6DB33F", SiMongodb: "#47A248", DiMysql: "#4479A1", SiPostgresql: "#4169E1",
  SiRedis: "#DC382D", SiElasticsearch: "#FEC514", SiRabbitmq: "#FF6600", TbBrandAzure: "#0078D4",
  SiPuppeteer: "#40B5A4", SiGooglechrome: "#4285F4", SiLangchain: "#1C3C3C", TbBrandOpenai: "#412991",
  SiDocker: "#2496ED", SiKubernetes: "#326CE5", FaAws: "#FF9900", SiGrafana: "#F46800",
  SiPrometheus: "#E6522C", SiKibana: "#E8488B", SiJenkins: "#D24939", SiArgo: "#EF7B4D",
  // SiPython is handled separately as a hand-built two-tone SVG (see PythonIcon)
  // since its real identity is the two-color snake mark, not a single fill.
  // SiApachekafka, SiSocketdotio, SiExpress, and the TbCode fallback are intentionally
  // omitted: their real brand marks are black/monochrome and would vanish against this
  // site's dark theme, so they inherit the current text color instead.
};

export function SkillIcon({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  if (name === "SiPython") {
    return <PythonIcon size={size} className={className} />;
  }
  const Icon = REGISTRY[name] ?? TbCode;
  const color = BRAND_COLORS[name];
  return <Icon size={size} className={className} color={color} aria-hidden="true" />;
}
