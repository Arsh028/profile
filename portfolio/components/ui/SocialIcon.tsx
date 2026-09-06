import { TbBrandGithub, TbBrandLinkedin, TbBrandStackoverflow, TbMail, TbPhone } from "react-icons/tb";
import type { SocialLink } from "@/content/types";

const ICONS: Record<SocialLink["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  github: TbBrandGithub,
  linkedin: TbBrandLinkedin,
  stackoverflow: TbBrandStackoverflow,
  email: TbMail,
  phone: TbPhone,
};

export function SocialIcon({ icon, size = 16, className }: { icon: SocialLink["icon"]; size?: number; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
