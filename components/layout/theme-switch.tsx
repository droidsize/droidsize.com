"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ThemeSwitchProps = {
  className?: string;
};

export function ThemeSwitch({ className }: ThemeSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-11 items-center justify-center text-current transition-opacity duration-200 hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        className,
      )}
      onClick={() => setTheme(nextTheme)}
      aria-label={mounted ? `Use ${nextTheme} theme` : "Change color theme"}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
      ) : (
        <Moon aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
      )}
    </button>
  );
}
