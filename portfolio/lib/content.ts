import { ProfileContent } from "@/content/types";
import { defaultProfile } from "@/content/variants/default";

const variants: Record<string, ProfileContent> = {
  default: defaultProfile,
};

/**
 * Resolves portfolio content by variant key. Only "default" exists today —
 * register additional entries here (e.g. content/variants/recruiter.ts) to
 * serve different work sections / tech stacks from the same URL structure
 * via ?variant=<key>.
 */
export function getProfileContent(variant?: string | string[]): ProfileContent {
  const key = Array.isArray(variant) ? variant[0] : variant;
  return (key && variants[key]) || defaultProfile;
}
