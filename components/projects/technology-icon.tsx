import type { ElementType } from "react";
import {
  SiAnthropic,
  SiConvex,
  SiElevenlabs,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiGooglegemini,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSentry,
  SiStripe,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Presentation } from "lucide-react";

import type { TechnologyIconKey } from "@/config/projects";
import { cn } from "@/lib/utils";

type TechnologyIconProps = {
  icon: TechnologyIconKey;
  className?: string;
};

const icons = {
  anthropic: SiAnthropic,
  convex: SiConvex,
  elevenlabs: SiElevenlabs,
  expo: SiExpo,
  firebase: SiFirebase,
  github: SiGithub,
  googlegemini: SiGooglegemini,
  nextdotjs: SiNextdotjs,
  postgresql: SiPostgresql,
  presentation: Presentation,
  prisma: SiPrisma,
  react: SiReact,
  sentry: SiSentry,
  stripe: SiStripe,
  tailwindcss: SiTailwindcss,
  turborepo: SiTurborepo,
  typescript: SiTypescript,
  vercel: SiVercel,
  vite: SiVite,
} satisfies Record<TechnologyIconKey, ElementType>;

export function TechnologyIcon({ icon, className }: TechnologyIconProps) {
  const Icon = icons[icon];

  return (
    <Icon
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
      focusable="false"
    />
  );
}
