import type { MetadataRoute } from "next";
import { localSuffix, servicePages, services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Pages principales indexables (les pages légales sont en noindex)
  const mainRoutes = ["", "/a-propos", "/services", "/realisations", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Pages « prestation à Caen » (SEO local)
  const serviceRoutes = services
    .filter((s) => servicePages[s.slug])
    .map((s) => ({
      url: `${siteConfig.url}/${s.slug}-${localSuffix}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...mainRoutes, ...serviceRoutes];
}
