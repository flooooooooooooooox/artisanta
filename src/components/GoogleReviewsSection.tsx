import { siteConfig } from "@/lib/site-data";

const mapQuery = encodeURIComponent("Propre Éclat nettoyage Caen");

export default function GoogleReviewsSection() {
  return (
    <section className="bg-cream-alt py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-navy">Avis Google</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
          Retrouvez notre fiche Google et les avis de nos clients directement
          depuis Google Maps.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-navy/5">
            <iframe
              title="Propre Éclat sur Google Maps"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-1 text-brand md:justify-start" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-navy/70">
              Consultez l&apos;ensemble des avis vérifiés laissés par nos clients
              sur notre fiche Google Business.
            </p>
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              Voir nos avis sur Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
