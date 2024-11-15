import type { Icon } from "lucide-react";

import { Icons } from "@/components/shared/icons";

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  badge?: number;
  disabled?: boolean;
  external?: boolean;
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type SidebarNavItem = {
  title: string;
  items: NavItem[];
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

// landing sections
export type InfoList = {
  icon: keyof typeof Icons;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

export type FeatureLdg = {
  title: string;
  description: string;
  link: string;
  icon: keyof typeof Icons;
};

export interface ProjectLdg {
  title: string;
  category: string;
  src: string;
  color: string;
}

export interface ModalState {
  active: boolean;
  index: number;
}

export interface ProjectProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export interface RoundedButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

export type TestimonialType = {
  name: string;
  job: string;
  image: string;
  review: string;
};

export type Service = {
  title: string;
};
