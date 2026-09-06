import { ProfileContent } from "@/content/types";
import { experienceYears } from "@/lib/utils";

/**
 * Builds the TypeScript source shown in the hero code block entirely from
 * ProfileContent.
 */
export function buildHeroCode(content: ProfileContent): string {
  const years = experienceYears(content.experienceStartDate);
  const { heroCode } = content;

  const focusAreas = heroCode.focusAreas
    .map((area) => `    "${area}",`)
    .join("\n");

  return `// Arsh Radhanpura

import { ${heroCode.baseClass}, DistributedSystems,
 AIInfrastructure, } from "arsh-core-engineering";

export class ${heroCode.className} extends ${heroCode.baseClass} {
  public readonly name = "${content.name}";
  public readonly title = "${content.title}";
  public readonly experience = "${years}+ Years";

  public readonly focusAreas = [
${focusAreas}
  ];

  /**
   * Building systems that scale, recover, and stay reliable.
   */
  public async engineer(system: DistributedSystems) {
    return system
      .scale({ operations: "50M+ daily" })
      .reliability({ uptime: "99.9%" })
      .optimize({ performance: "High-Throughput" })
      .addIntelligence({ stack: "AI / LLMs" })
      .ship({ environment: "Production" });
  }
}`;
}
