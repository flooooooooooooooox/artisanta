import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SparkleHeading from "@/components/SparkleHeading";
import Particles from "@/components/Particles";
import JsonLd from "@/components/JsonLd";
import { blurMap } from "@/lib/image-blur";
import {
  localSuffix,
  servicePages,
  services,
  siteConfig,
} from "@/lib/site-data";

type Params = { servicePage: string };

// Ne génère que les pages « prestation à Caen » connues ; tout autre slug → 404
export function generateStaticParams() {
  return services
    .filter((s) => servicePages[s.slug])
    .map((s) => ({ servicePage: `${s.slug}-${localSuffix}` }));
}

export const dynamicParams = false;

function resolve(param: string) {
  const service = services.find((s) => `${s.slug}-${localSuffix}` === param);
  if (!service) return null;
  const content = servicePages[service.slug];
  if (!content) return null;
  return { service, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { servicePage } = await params;
  const resolved = resolve(servicePage);
  if (!resolved) return {};
  const { content } = resolved;
  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: { canonical: `/${servicePage}` },
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { servicePage } = await params;
  const resolved = resolve(servicePage);
  if (!resolved) notFound();
  const { service, content } = resolved;

  // Autres prestations (maillage interne)
  const others = services.filter((s) => s.slug !== service.slug && servicePages[s.slug]);

  const areaServed = {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    geoRadius: String(siteConfig.serviceRadiusKm * 1000),
    description: `${siteConfig.serviceRadiusKm} km autour de ${siteConfig.city}`,
  };

  // Même @id que la fiche du layout : les propriétés fusionnent au lieu de
  // créer une seconde entreprise. La page reste ainsi auto-suffisante pour
  // les moteurs de réponse IA (adresse, téléphone et zone lisibles ici même).
  const providerSchema = {
    "@type": "CleaningService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue des Prémontrés",
      addressLocality: "Saint-Germain-la-Blanche-Herbe",
      postalCode: "14280",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    areaServed,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.h1,
    serviceType: service.title,
    description: content.metaDescription,
    provider: providerSchema,
    areaServed,
    url: `${siteConfig.url}/${servicePage}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: content.h1, item: `${siteConfig.url}/${servicePage}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />

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
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-20">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="text-sm text-cream/70">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="animate-hero-in mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {content.h1}
          </h1>
          <p className="animate-hero-in mt-5 max-w-2xl text-lg leading-relaxed text-cream/85" style={{ animationDelay: "0.15s" }}>
            {content.lead}
          </p>
          <div className="animate-hero-in mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.25s" }}>
            <Link href="/contact" className="btn btn-primary group">
              Demander un devis gratuit
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href={siteConfig.phoneHref} className="btn btn-ghost">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Photo d'intervention */}
      {content.photo && (
        <section className="mx-auto -mt-10 max-w-3xl px-6">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ring-1 ring-navy/5">
              <Image
                src={content.photo.src}
                alt={content.photo.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
                placeholder={blurMap[content.photo.src] ? "blur" : "empty"}
                blurDataURL={blurMap[content.photo.src]}
              />
            </div>
          </Reveal>
        </section>
      )}

      {/* Ce que comprend la prestation */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-navy">
            <SparkleHeading>Ce que comprend la prestation</SparkleHeading>
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.included.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <li className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy/5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-dark">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-navy/80">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Pour qui */}
        <Reveal>
          <div className="mt-10 rounded-2xl bg-cream-alt p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-navy">Pour qui ?</h2>
            <p className="mt-2 text-navy/75">{content.forWho}</p>
          </div>
        </Reveal>

        {/* Zone d'intervention */}
        <Reveal>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-navy">
              Zone d&apos;intervention : Caen et alentours
            </h2>
            <p className="mt-2 text-sm text-navy/70">
              Nous intervenons à Caen et dans un rayon de {siteConfig.serviceRadiusKm} km :
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.areaServed.map((city) => (
                <span key={city} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy/70 ring-1 ring-navy/10">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>


      {/* Cahier des charges (pages destinées aux prescripteurs : syndics, gestionnaires) */}
      {content.cahierDesCharges && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="text-3xl font-bold text-navy">
                <SparkleHeading>
                  {content.cahierDesCharges.zonesTitle ?? "Cahier des charges"}
                </SparkleHeading>
              </h2>
              <p className="mt-4 leading-relaxed text-navy/75">
                {content.cahierDesCharges.intro}
              </p>
            </Reveal>

            {/* Prestations par zone */}
            <div className="mt-12 space-y-8">
              {content.cahierDesCharges.zones.map((z, i) => (
                <Reveal key={z.zone} delay={i * 80}>
                  <article className="overflow-hidden rounded-2xl ring-1 ring-navy/10">
                    <header className="flex flex-wrap items-baseline justify-between gap-3 bg-cream-alt px-6 py-4">
                      <h3 className="text-lg font-semibold text-navy">{z.zone}</h3>
                      <p className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-dark ring-1 ring-brand/20">
                        {z.frequence}
                      </p>
                    </header>
                    <ul className="space-y-3 px-6 py-5">
                      {z.taches.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                          />
                          <span className="text-sm leading-relaxed text-navy/80">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Prestations périodiques */}
            <Reveal>
              <h3 className="mt-14 text-2xl font-bold text-navy">
                {content.cahierDesCharges.periodiquesTitle ?? "Prestations périodiques"}
              </h3>
              <p className="mt-2 text-navy/70">
                {content.cahierDesCharges.periodiquesIntro ??
                  "À planifier dans le contrat d'entretien annuel, en complément des passages réguliers."}
              </p>
            </Reveal>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/15">
                    {(content.cahierDesCharges.periodiquesColumns ?? [
                      "Prestation",
                      "Fréquence",
                      "Détail",
                    ]).map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`py-3 font-semibold text-navy${i < 2 ? " pr-4" : ""}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.cahierDesCharges.periodiques.map((pr) => (
                    <tr key={pr.prestation} className="border-b border-navy/10 align-top">
                      <td className="py-4 pr-4 font-medium text-navy">{pr.prestation}</td>
                      <td className="py-4 pr-4 whitespace-nowrap text-brand-dark">{pr.frequence}</td>
                      <td className="py-4 leading-relaxed text-navy/70">{pr.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Engagements contractuels */}
            <Reveal>
              <div className="mt-12 rounded-2xl bg-cream-alt p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-navy">
                  {content.cahierDesCharges.engagementsTitle ??
                    "Nos engagements auprès du syndic et du conseil syndical"}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {content.cahierDesCharges.engagements.map((e) => (
                    <li key={e} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-navy/80">{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ spécifique */}
      <section className="bg-cream-alt py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">
              <SparkleHeading>Questions fréquentes</SparkleHeading>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {content.faq.map((f, i) => (
              <Reveal key={f.question} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                  <h3 className="font-semibold text-navy">{f.question}</h3>
                  <p className="mt-2 text-sm text-navy/70">{f.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Autres prestations (maillage interne) */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-2xl font-bold text-navy">Nos autres prestations à Caen</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                href={`/${s.slug}-${localSuffix}`}
                className="group/card block h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30"
              >
                <h3 className="font-semibold text-navy transition-colors group-hover/card:text-brand-dark">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-navy/60">{s.description}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand-dark">
                  En savoir plus →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Besoin de {service.title.toLowerCase()} à Caen ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            Devis gratuit et sans engagement, réponse rapide dans un rayon de {siteConfig.serviceRadiusKm} km.
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
