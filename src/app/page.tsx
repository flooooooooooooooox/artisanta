import Image from "next/image";
import Link from "next/link";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { beforeAfterGallery, services, siteConfig } from "@/lib/site-data";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
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
              <Link
                href="/contact"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Voir nos prestations
              </Link>
            </div>
          </div>
          <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-white/5 p-8 sm:h-72 sm:w-72">
            <Image
              src="/images/logo/logo-propre-eclat.png"
              alt="Logo Propre Éclat"
              width={280}
              height={280}
              className="rounded-2xl"
              priority
            />
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
            <div key={item.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy/5">
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
              <div key={service.slug} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
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

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Prêt à retrouver un espace impeccable ?</h2>
          <p className="mt-4 text-cream/80">
            Contactez-nous pour un devis gratuit et sans engagement, ou consultez
            nos avis sur Google.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Demander un devis
            </Link>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Voir nos avis Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
