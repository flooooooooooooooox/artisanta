import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages indexables uniquement (les pages légales sont en noindex)
  const routes = ["", "/a-propos", "/services", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
