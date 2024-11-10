import "@/styles/globals.css";

import { Suspense } from "react";
import { fontDroidsize, fontJakarta, fontSans } from "@/assets/fonts";

import { cn, constructMetadata } from "@/lib/utils";

import { Providers } from "./providers";
import PreloaderClient from "./PreloaderClient";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontJakarta.variable,
          fontDroidsize.variable,
        )}
      >
        <PreloaderClient>
        <Providers>
              <Suspense fallback={null}>{children}</Suspense>
          </Providers>
        </PreloaderClient>
      </body>
    </html>
  );
}
