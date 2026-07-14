import TestimonialsCarousel from "./TestimonialsCarousel";
import SparkleHeading from "./SparkleHeading";
import { siteConfig, testimonials } from "@/lib/site-data";

export default function GoogleReviewsSection() {
  return (
    <section className="bg-cream-alt py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-navy">
          <SparkleHeading>Avis Google</SparkleHeading>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
          Ce que nos clients disent de Propre Éclat, directement issu de notre
          fiche Google Business.
        </p>

        <div className="mt-10">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:grid-cols-2 md:items-center md:p-8">
          <div className="relative overflow-hidden rounded-xl ring-1 ring-navy/5">
            <iframe
              title="Zone d'intervention de Propre Éclat autour de Caen"
              src="https://maps.google.com/maps?hl=fr&q=Caen&t=&z=9&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none block"
            />

            {/* Périmètre de 20 km autour de Caen (calibré pour le zoom 9) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-brand/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-2 ring-white"
            />

            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Zone d&apos;intervention · 20 km
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              Notre zone d&apos;intervention
            </p>
            <p className="mt-2 text-navy/70">
              Nous intervenons à Caen et dans un rayon de 20 km alentour. Envie de
              lire tous nos avis ou d&apos;en laisser un ? Retrouvez notre fiche
              complète sur Google.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Voir tous nos avis sur Google
              </a>
              <a
                href="https://www.google.com/maps/place/Caen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ouvrir dans Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
