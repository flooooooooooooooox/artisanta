import { faq } from "@/lib/site-data";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
          Questions fréquentes
        </p>
        <h2 className="mt-3 text-3xl font-bold text-navy">Vous vous posez une question ?</h2>
        <p className="mx-auto mt-3 max-w-xl text-navy/70">
          Les réponses aux questions les plus courantes sur nos services de
          nettoyage à Caen et alentours.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {faq.map((item, i) => (
          <details
            key={item.question}
            className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy/5 transition-shadow hover:shadow-md"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy [&::-webkit-details-marker]:hidden">
              {item.question}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand-dark transition-transform duration-300 group-open:rotate-45">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
