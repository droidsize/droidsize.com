import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: dirname });

const eslintConfig = [
  {
    ignores: [
      ".contentlayer/**",
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      "tailwind.config.ts",
      "components/dot-cursor.tsx",
      "components/content/**",
      "components/forms/**",
      "components/loaderProvider-test.tsx",
      "components/shared/**",
      "components/ui/**",
      "components/sections/awards.tsx",
      "components/sections/blogs-list.tsx",
      "components/sections/features.tsx",
      "components/sections/projects-list.tsx",
      "components/sections/sliding-images.tsx",
      "components/sections/team.tsx",
      "config/landing.ts",
      "lib/toc.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
    },
  },
];

export default eslintConfig;
