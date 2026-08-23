import Reveal from "./Reveal";
import SparkleHeading from "./SparkleHeading";
import { siteConfig } from "@/lib/site-data";

/**
 * Engagements de service.
 * Rend visibles des garanties déjà en vigueur (devis gratuit, entreprise
 * assurée, interlocuteur unique) : c'est un signal de confiance recherché
 * autant par les visiteurs que par les moteurs de réponse IA.
 */
const guarantees = [
  {
    title: "Devis gratuit et sans engagement",
    text: "Nous nous déplaçons, évaluons le besoin et remettons un devis détaillé, poste par poste. Aucun frais, aucune obligation de donner suite.",
    icon: (
      <path d="M9 12h6m-6 4h6M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Entreprise assurée",
    text: "Propre Éclat est couverte par une assurance responsabilité civile professionnelle : les dommages éventuels causés lors de nos interventions sont pris en charge.",
    icon: (
      <path d="M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6l8-3z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Un interlocuteur unique",
    text: "Une seule personne suit votre dossier du premier appel à la fin de l'intervention. Pas de standard, pas de dossier qui se perd.",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Un engagement tenu",
    text: `Une date fixée est une date respectée. Nous sommes joignables ${siteConfig.hours.short} et vous prévenons immédiatement en cas d'imprévu.`,
    icon: (
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function GuaranteesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <h2 className="text-center text-3xl font-bold text-navy">
          <SparkleHeading>Nos garanties</SparkleHeading>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-navy/70">
          Ce sur quoi vous pouvez compter en confiant votre intervention à
          Propre Éclat, à Caen et dans un rayon de {siteConfig.serviceRadiusKm} km.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {guarantees.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 80}>
            <article className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand/30">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand-dark">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {g.icon}
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-navy">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/70">{g.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
