"use client";

import { ThemeProvider } from "next-themes";

import { Analytics } from "@/components/analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Analytics />
    </ThemeProvider>
  );
}
