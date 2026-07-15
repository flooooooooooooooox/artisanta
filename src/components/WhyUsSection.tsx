import Reveal from "./Reveal";
import SparkleHeading from "./SparkleHeading";
import { benefits } from "@/lib/site-data";

const icons: Record<string, React.ReactNode> = {
  quote: (
    <>
      <path d="M14 2v6h6" />
      <path d="M4 22V4a2 2 0 0 1 2-2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M9 13l2 2 4-4" />
    </>
  ),
  sparkle: <path d="M12 2c.4 4.3 1.3 5.5 5.8 6.1-4.5.6-5.4 1.8-5.8 6.1-.4-4.3-1.3-5.5-5.8-6.1 4.5-.6 5.4-1.8 5.8-6.1z" />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export default function WhyUsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <h2 className="text-center text-3xl font-bold text-navy">
          <SparkleHeading>Pourquoi nous choisir</SparkleHeading>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
          Ce qui fait la différence de propreté Propre Éclat.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, i) => (
          <Reveal key={benefit.title} delay={i * 80} replay>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill={benefit.icon === "sparkle" ? "currentColor" : "none"} stroke={benefit.icon === "sparkle" ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icons[benefit.icon]}
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{benefit.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
