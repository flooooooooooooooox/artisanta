import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF en premier : ~30 % plus léger que le WebP à qualité égale
    formats: ["image/avif", "image/webp"],
    // Tailles réellement utilisées par le site (cartes ~340 px, bandeaux ~768 px)
    imageSizes: [64, 128, 256, 340, 384, 512, 640, 768],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // Retire les console.* du bundle client en production (hors erreurs)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
