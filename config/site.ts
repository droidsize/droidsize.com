import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Droidsize - Agency",
  description: "description",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/droidsize",
    github: "https://github.com/droidsize",
  },
  mailSupport: "contact@droidsize.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "Works", href: "#" },
      { title: "About", href: "#" },
      { title: "Award", href: "#" },
      { title: "Services", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
];

export const footerSocials = {
  title: "Socials",
  items: [
    { title: "X", href: "#" },
    { title: "Insgtagram", href: "#" },
    { title: "Linkedin", href: "https://www.linkedin.com/company/droidsize/" },
  ],
};

export const footerPolicy = {
  title: "Policies",
  items: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Return & Refund", href: "/refund" },
    { title: "Disclaimer", href: "/disclaimer" },
    { title: "Sitemap", href: "/sitemap" },
  ],
};
