import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SparkleHeading from "@/components/SparkleHeading";
import Particles from "@/components/Particles";
import JsonLd from "@/components/JsonLd";
import ZoneMap from "@/components/ZoneMap";
import { localSuffix, servicePages, services, siteConfig, zones } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Zones d'intervention autour de Caen",
  description:
    "Propre Éclat intervient à Caen et dans un rayon de 20 km : Hérouville-Saint-Clair, Ifs, Mondeville, Ouistreham et les communes voisines. Devis gratuit.",
  alternates: { canonical: "/zones-intervention" },
};

export default function ZonesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteConfig.url}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Zones d'intervention",
        item: `${siteConfig.url}/zones-intervention`,
      },
    ],
  };

  return (
    <div>
      <JsonLd data={breadcrumb} />

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
            <span className="text-white">Zones d&apos;intervention</span>
          </nav>
          <h1 className="animate-hero-in mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Entreprise de nettoyage à Caen et dans un rayon de 20 km
          </h1>
          <p className="animate-hero-in mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/85" style={{ animationDelay: "0.15s" }}>
            Basés à Caen, nous intervenons dans toute l&apos;agglomération et les
            communes voisines du Calvados, pour les particuliers comme pour les
            professionnels.
          </p>
          <div className="animate-hero-in mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.25s" }}>
            <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">{siteConfig.phone}</a>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <Reveal>
          <div className="relative isolate z-0 overflow-hidden rounded-2xl shadow-lg shadow-navy/5 ring-1 ring-navy/5">
            <ZoneMap />
          </div>
        </Reveal>
      </section>

      {/* Communes */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy">
            <SparkleHeading>Les communes que nous desservons</SparkleHeading>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-navy/70">
            Votre commune n&apos;est pas dans la liste ? Appelez-nous : nous
            étudions chaque demande au cas par cas dans le Calvados.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {zones.map((zone, i) => (
            <Reveal key={zone.name} delay={(i % 2) * 70}>
              <article className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-navy">
                    Nettoyage à {zone.name}
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-navy/50">
                    {zone.cp}
                    {zone.km > 0 && ` · ${zone.km} km`}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{zone.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prestations disponibles partout */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-navy">
            Nos prestations, dans toute la zone
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Chaque service est disponible dans l&apos;ensemble des communes
            ci-dessus, aux mêmes conditions.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              {servicePages[service.slug] ? (
                <Link
                  href={`/${service.slug}-${localSuffix}`}
                  className="group/card block h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30"
                >
                  <h3 className="font-semibold text-navy transition-colors group-hover/card:text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy/60">{service.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-brand-dark">
                    En savoir plus →
                  </span>
                </Link>
              ) : (
                <div className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5">
                  <h3 className="font-semibold text-navy">{service.title}</h3>
                  <p className="mt-1 text-sm text-navy/60">{service.description}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vous êtes dans la zone ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Décrivez-nous votre besoin : nous répondons rapidement avec un devis
            gratuit et sans engagement.
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
