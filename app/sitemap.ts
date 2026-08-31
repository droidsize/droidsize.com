import { MetadataRoute } from "next";

import { projects } from "@/config/projects";

const routes = [
  "",
  "/work",
  "/studio",
  "/about",
  "/company",
  "/contact",
  "/support",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `https://www.droidsize.com${route}`,
    lastModified,
    changeFrequency:
      route === "" || route === "/work" || route.startsWith("/work/")
        ? "monthly"
        : "yearly",
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}
