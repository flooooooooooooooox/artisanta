import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

// Robots des moteurs de réponse IA (GEO) explicitement autorisés à indexer le site,
// pour maximiser les chances que Propre Éclat soit cité dans leurs réponses.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
  "CCBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Autorisation explicite des robots IA (moteurs de réponse génératifs)
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
