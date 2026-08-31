export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  ogImageAlt: string;
  mailSupport: string;
  links: {
    github: string;
    linkedin: string;
    x: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
};

export type MarketingConfig = {
  mainNav: NavItem[];
};

export type SidebarNavItem = {
  title: string;
  items: NavItem[];
};
