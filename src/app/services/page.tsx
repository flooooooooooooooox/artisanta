import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { beforeAfterGallery, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services | Propre Éclat",
  description:
    "Nettoyage des vitres, des bureaux, de copropriété et fin de chantier : découvrez les prestations de Propre Éclat à Caen et alentours.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
          Nos prestations
        </p>
        <h1 className="mt-3 text-4xl font-bold text-navy">Des services de nettoyage sur-mesure</h1>
        <p className="mx-auto mt-4 max-w-2xl text-navy/70">
          Propre Éclat accompagne particuliers et professionnels avec des
          prestations adaptées à chaque besoin, sur Caen et dans un rayon de
          20 km.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group/card relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-brand-dark transition-transform duration-300 group-hover/card:scale-x-100" />
              <h2 className="text-xl font-semibold text-navy transition-colors group-hover/card:text-brand-dark">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-cream-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-navy">Nos réalisations</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Quelques exemples de résultats obtenus lors de nos interventions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfterGallery.map((item) => (
              <BeforeAfterCard key={item.title} {...item} showHint={false} />
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-navy/60">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Glissez les images pour comparer l&apos;avant / après
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-navy">Une prestation particulière à demander ?</h2>
        <p className="mt-3 text-navy/70">
          Contactez-nous pour un devis gratuit adapté à votre besoin.
        </p>
        <Link href="/contact" className="btn btn-primary mt-6">
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
