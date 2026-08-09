import { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [
      "digital product studio",
      "web application development",
      "mobile application development",
      "product design",
      "Droidsize Technologies",
    ],
    authors: [
      {
        name: "Droidsize Technologies Private Limited",
        url: siteConfig.url,
      },
    ],
    creator: "Droidsize Technologies Private Limited",
    publisher: "Droidsize Technologies Private Limited",
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/site.webmanifest`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
