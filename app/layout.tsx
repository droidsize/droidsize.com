import "@/styles/globals.css";

import { Suspense } from "react";
import type { Viewport } from "next";
import { fontDroidsize, fontJakarta, fontSans } from "@/assets/fonts";

import { cn, constructMetadata } from "@/lib/utils";

import { Providers } from "./providers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  const organization = {
    "@type": "Organization",
    "@id": "https://www.droidsize.com/#organization",
    name: "Droidsize Technologies",
    legalName: "DROIDSIZE TECHNOLOGIES PRIVATE LIMITED",
    url: "https://www.droidsize.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.droidsize.com/icon-512.png",
      width: 512,
      height: 512,
    },
    image: "https://www.droidsize.com/opengraph-image.png",
    foundingDate: "2019",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Corporate Identity Number (CIN)",
      value: "U72200DL2019PTC347342",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "190, Baba Faridpuri, West Patel Nagar",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110008",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@droidsize.com",
      telephone: "+91-99580-07011",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/droidsize/",
      "https://github.com/droidsize",
      "https://x.com/droidsize",
    ],
  };
  const website = {
    "@type": "WebSite",
    "@id": "https://www.droidsize.com/#website",
    url: "https://www.droidsize.com",
    name: "Droidsize",
    description:
      "A multidisciplinary product studio designing and building SaaS, AI, mobile, and open-source products from India.",
    inLanguage: "en-IN",
    publisher: {
      "@id": "https://www.droidsize.com/#organization",
    },
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontJakarta.variable,
          fontDroidsize.variable,
        )}
      >
        <Providers>
          <Suspense fallback={null}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
