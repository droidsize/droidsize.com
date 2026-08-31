import { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  imageAlt = siteConfig.ogImageAlt,
  imageWidth = 1200,
  imageHeight = 630,
  path = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const socialImage = new URL(image, siteConfig.url).toString();
  const robots: Metadata["robots"] = noIndex
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      };

  return {
    title,
    description,
    applicationName: siteConfig.name,
    category: "technology",
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
    referrer: "origin-when-cross-origin",
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
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
      images: [
        {
          url: socialImage,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
          type: image.endsWith(".jpg") ? "image/jpeg" : "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@droidsize",
      creator: "@droidsize",
      title,
      description,
      images: [{ url: socialImage, alt: imageAlt }],
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: "#0a0a0a",
        },
      ],
    },
    metadataBase: new URL(siteConfig.url),
    manifest: "/site.webmanifest",
    robots,
    other: {
      "msapplication-TileColor": "#0a0a0a",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
