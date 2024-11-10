export const BLOG_CATEGORIES: {
  title: string;
  slug: "development" | "marketing";
  description: string;
}[] = [
  {
    title: "Development",
    slug: "development",
    description: "Updates and announcements from Droidsize.",
  },
  {
    title: "Marketing",
    slug: "marketing",
    description: "Educational content about Development.",
  },
];

export const BLOG_AUTHORS = {
  droidsize: {
    name: "Droidsize",
    image: "/_static/avatars/mickasmt.png",
    twitter: "droidsize",
  },
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
};
