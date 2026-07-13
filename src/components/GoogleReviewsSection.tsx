import TestimonialsGrid from "./TestimonialsGrid";
import { siteConfig, testimonials } from "@/lib/site-data";

const mapQuery = encodeURIComponent("Propre Éclat nettoyage Caen");

export default function GoogleReviewsSection() {
  return (
    <section className="bg-cream-alt py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-navy">Avis Google</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
          Ce que nos clients disent de Propre Éclat, directement issu de notre
          fiche Google Business.
        </p>

        <div className="mt-10">
          <TestimonialsGrid testimonials={testimonials} />
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:grid-cols-2 md:items-center md:p-8">
          <div className="overflow-hidden rounded-xl ring-1 ring-navy/5">
            <iframe
              title="Propre Éclat sur Google Maps"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="text-navy/70">
              Envie de lire tous nos avis ou d&apos;en laisser un ? Retrouvez notre
              fiche complète sur Google.
            </p>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Voir tous nos avis sur Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
