import "@/styles/globals.css";

import { Suspense } from "react";
import { fontDroidsize, fontJakarta, fontSans } from "@/assets/fonts";

import { cn, constructMetadata } from "@/lib/utils";

import { Providers } from "./providers";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export default function RootLayout({ children }: RootLayoutProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.droidsize.com/#organization",
    name: "Droidsize Technologies",
    legalName: "DROIDSIZE TECHNOLOGIES PRIVATE LIMITED",
    url: "https://www.droidsize.com",
    logo: "https://www.droidsize.com/droidsize-logo.svg",
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
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
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
