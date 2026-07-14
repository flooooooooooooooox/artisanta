type Props = {
  name: string;
  context?: string;
  date?: string;
  rating: number;
  quote: string;
};

export default function TestimonialCard({ name, context, date, rating, quote }: Props) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand-dark">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">{name}</p>
          {context && <p className="text-xs text-navy/50">{context}</p>}
        </div>
      </div>

      <div className="mt-3 flex gap-0.5 text-brand" aria-label={`${rating} sur 5 étoiles`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={i < rating ? 0 : 1.2}
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
        &laquo; {quote} &raquo;
      </blockquote>

      {date && <p className="mt-4 text-xs text-navy/40">Avis Google &middot; {date}</p>}
    </figure>
  );
}
