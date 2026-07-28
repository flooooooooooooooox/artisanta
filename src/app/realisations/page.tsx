import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import Reveal from "@/components/Reveal";
import Particles from "@/components/Particles";
import { beforeAfterGallery, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Nos réalisations — Avant / après à Caen",
  description:
    "Découvrez les réalisations de Propre Éclat à Caen et alentours : nettoyage de vitres, bureaux, copropriétés et fin de chantier, en photos avant / après.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light">
        <div aria-hidden="true" className="animate-drift-a absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
        <div aria-hidden="true" className="animate-drift-b absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <Particles />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <nav aria-label="Fil d'Ariane" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Réalisations</span>
          </nav>
          <h1 className="animate-hero-in mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Nos réalisations à Caen
          </h1>
          <p className="animate-hero-in mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85" style={{ animationDelay: "0.15s" }}>
            {beforeAfterGallery.length} interventions en photos, avant et après.
            Glissez chaque image pour voir la différence.
          </p>
        </div>
      </section>

      {/* Galerie complète */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterGallery.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80} className="cv-auto">
              <BeforeAfterCard {...item} showHint={false} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-navy/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Glissez les images pour comparer l&apos;avant / après
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Envie du même résultat chez vous ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Devis gratuit et sans engagement, à Caen et dans un rayon de {siteConfig.serviceRadiusKm} km.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Demander un devis</Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">{siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
