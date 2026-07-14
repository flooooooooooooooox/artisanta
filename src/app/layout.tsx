import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-data";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Propre Éclat | Nettoyage professionnel à Caen",
    template: "%s | Propre Éclat",
  },
  description:
    "Propre Éclat, entreprise de nettoyage à Caen et alentours (+20 km) : vitres, bureaux, copropriétés, fin de chantier. La différence de propreté.",
  keywords: [
    "nettoyage Caen",
    "entreprise de nettoyage Caen",
    "nettoyage vitres Caen",
    "nettoyage bureaux",
    "nettoyage copropriété",
    "nettoyage fin de chantier",
    "Propre Éclat",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: "Propre Éclat",
    title: "Propre Éclat | Nettoyage professionnel à Caen",
    description:
      "Entreprise de nettoyage à Caen et alentours (+20 km) : vitres, bureaux, copropriétés, fin de chantier. La différence de propreté.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propre Éclat | Nettoyage professionnel à Caen",
    description:
      "Entreprise de nettoyage à Caen et alentours (+20 km). La différence de propreté.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-[var(--foreground)]">
        <JsonLd data={[getLocalBusinessSchema(), getWebSiteSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
