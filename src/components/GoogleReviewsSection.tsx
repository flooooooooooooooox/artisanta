import TestimonialsCarousel from "./TestimonialsCarousel";
import SparkleHeading from "./SparkleHeading";
import GoogleRating from "./GoogleRating";
import ZoneMap from "./ZoneMap";
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

        <div className="flex justify-center">
          <GoogleRating />
        </div>

        <div className="mt-10">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 md:grid-cols-2 md:items-center md:p-8">
          <div className="relative overflow-hidden rounded-xl ring-1 ring-navy/5">
            <ZoneMap />

            <span className="pointer-events-none absolute left-3 top-3 z-[500] inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Zone d&apos;intervention · 20 km
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              Notre zone d&apos;intervention
            </p>
            <p className="mt-2 text-navy/70">
              Nous intervenons à Caen et dans un rayon de 20 km alentour :
              Hérouville-Saint-Clair, Ifs, Mondeville, Colombelles, Ouistreham,
              Bretteville-sur-Odon, Giberville, Cormelles-le-Royal et les communes
              voisines. Retrouvez aussi tous nos avis sur notre fiche Google.
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
                href="https://www.google.com/maps/search/?api=1&query=Propre+Eclat+Caen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Ouvrir dans Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Propre+Eclat+Caen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.7 12.3 11.7 2.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 0 0 0 1.4l10 10a1 1 0 0 0 1.4 0l8-8a1 1 0 0 0 0-1.4z" strokeLinejoin="round" />
                  <path d="M9 12h4v3l4-4-4-4v3H8v3" strokeLinejoin="round" />
                </svg>
                Itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
