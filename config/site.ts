import { SidebarNavItem, SiteConfig } from "types";

const site_url = "https://www.droidsize.com";

export const siteConfig: SiteConfig = {
  name: "Droidsize",
  title: "Droidsize — Software products and systems",
  description:
    "Droidsize is a multidisciplinary product studio designing and building SaaS, AI, mobile, and open-source products from India.",
  url: site_url,
  ogImage: `${site_url}/opengraph-image.png`,
  ogImageAlt:
    "Droidsize — software products and the systems behind them, built from India.",
  links: {
    github: "https://github.com/droidsize",
    linkedin: "https://www.linkedin.com/company/droidsize/",
    x: "https://x.com/droidsize",
  },
  mailSupport: "contact@droidsize.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Explore",
    items: [
      { title: "Home", href: "/" },
      { title: "Work", href: "/work" },
      { title: "Studio", href: "/studio" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

export const footerSocials = {
  title: "Socials",
  items: [
    { title: "X", href: "https://x.com/droidsize" },
    { title: "LinkedIn", href: "https://www.linkedin.com/company/droidsize/" },
    { title: "GitHub", href: "https://github.com/droidsize" },
  ],
};

export const footerPolicy = {
  title: "Policies",
  items: [
    { title: "Company", href: "/company" },
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};
