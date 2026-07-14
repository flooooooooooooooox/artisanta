import Image from "next/image";
import Link from "next/link";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { beforeAfterGallery, services, siteConfig } from "@/lib/site-data";

export default function Home() {
  return (
    <div>
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
            {/* Halo doux et discret */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-3xl bg-brand/20 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="relative transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/25 ring-1 ring-white/10">
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
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 hover:ring-brand/30">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-navy">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">Nos prestations</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Des services de nettoyage adaptés à chaque besoin, pour les particuliers
            comme pour les professionnels.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group/card relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover/card:scale-x-100" />
                <h3 className="text-lg font-semibold text-navy transition-colors group-hover/card:text-brand-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-navy/70">{service.description}</p>
              </div>
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
        <h2 className="text-center text-3xl font-bold text-navy">Nos réalisations</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
          Un aperçu avant / après de nos interventions récentes.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfterGallery.slice(0, 3).map((item) => (
            <BeforeAfterCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Prêt à retrouver un espace impeccable ?</h2>
          <p className="mt-4 text-cream/80">
            Contactez-nous pour un devis gratuit et sans engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary group">
              Demander un devis
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
