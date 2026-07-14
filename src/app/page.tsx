import Image from "next/image";
import Link from "next/link";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { beforeAfterGallery, services, siteConfig } from "@/lib/site-data";
import { getFaqSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <div>
      <JsonLd data={getFaqSchema()} />
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Nettoyage professionnel à Caen
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-cream/80">
              Propre Éclat entretient vos espaces professionnels et particuliers
              à Caen et dans un rayon de 20 km, avec exigence et rigueur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary group">
                Demander un devis gratuit
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Voir nos prestations
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72">
            {/* Halo bleu doux et discret */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-3xl bg-brand/20 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
            />
            {/* Dégradé blanc discret qui apparaît au survol */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-white/25 via-white/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.04]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/25 ring-1 ring-white/10 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-white/20">
                <Image
                  src="/images/logo/logo-propre-eclat.png"
                  alt="Logo Propre Éclat"
                  width={280}
                  height={280}
                  className="relative block"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Zone d'intervention", value: "Caen + 20 km" },
            { label: "Cible", value: "Particuliers & professionnels" },
            { label: "Notre promesse", value: "La différence de propreté" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 hover:ring-brand/30">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-navy">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">Nos prestations</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
              Des services de nettoyage adaptés à chaque besoin, pour les particuliers
              comme pour les professionnels.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <div className="group/card relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover/card:scale-x-100" />
                  <h3 className="text-lg font-semibold text-navy transition-colors group-hover/card:text-brand-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/70">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand-dark hover:underline"
            >
              Découvrir toutes nos prestations →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy">Nos réalisations</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Un aperçu avant / après de nos interventions récentes.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterGallery.slice(0, 3).map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <BeforeAfterCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <GoogleReviewsSection />
      </Reveal>

      <Reveal>
        <FaqSection />
      </Reveal>

      <section className="px-6 py-16">
        <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-light px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          {/* Formes décoratives */}
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
              Devis gratuit
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Prêt à retrouver un espace impeccable ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Contactez-nous dès aujourd&apos;hui, nous vous répondons rapidement pour
              organiser votre intervention — sans engagement.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary group">
                Demander un devis
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                Nous écrire
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
