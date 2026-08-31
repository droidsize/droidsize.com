import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.droidsize.com/sitemap.xml",
    host: "https://www.droidsize.com",
  };
}
