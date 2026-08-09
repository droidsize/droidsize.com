import { SidebarNavItem, SiteConfig } from "types";

const site_url = "https://www.droidsize.com";

export const siteConfig: SiteConfig = {
  name: "Droidsize Technologies",
  description:
    "A multidisciplinary product studio building SaaS, AI, and mobile products where technology and considered design meet.",
  url: site_url,
  ogImage: `${site_url}/opengraph-image.jpg`,
  links: {
    github: "https://github.com/droidsize",
    linkedin: "https://www.linkedin.com/company/droidsize/",
  },
  mailSupport: "contact@droidsize.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "Products", href: "/work" },
      { title: "Open source", href: "/work#repopress" },
      { title: "Studio", href: "/#our-services" },
      { title: "About", href: "/company" },
    ],
  },
];

export const footerSocials = {
  title: "Socials",
  items: [
    { title: "LinkedIn", href: "https://www.linkedin.com/company/droidsize/" },
    { title: "GitHub", href: "https://github.com/droidsize" },
  ],
};

export const footerPolicy = {
  title: "Policies",
  items: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
  ],
};
