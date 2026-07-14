import { siteConfig } from "@/lib/site-data";

const STAR_PATH =
  "M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z";

function Stars({ rating }: { rating: number }) {
  const percent = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex" aria-hidden="true">
      {/* Étoiles vides (fond) */}
      <span className="flex text-navy/20">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
      {/* Étoiles remplies (recouvrement selon la note) */}
      <span
        className="absolute inset-0 flex overflow-hidden text-amber-400"
        style={{ width: `${percent}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
    </span>
  );
}

export default function GoogleRating() {
  const rating = siteConfig.googleRating;
  const formatted = rating.toString().replace(".", ",");

  return (
    <a
      href={siteConfig.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-navy/5 transition-all hover:-translate-y-0.5 hover:shadow-md"
      aria-label={`Note moyenne de ${formatted} sur 5 sur Google`}
    >
      <span className="text-2xl font-bold text-navy">{formatted}</span>
      <span className="flex flex-col">
        <Stars rating={rating} />
        <span className="mt-0.5 text-xs text-navy/60">
          Note moyenne sur Google
          {siteConfig.googleReviewCount ? ` · ${siteConfig.googleReviewCount} avis` : ""}
        </span>
      </span>
    </a>
  );
}
