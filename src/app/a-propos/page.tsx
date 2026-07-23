import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SparkleHeading from "@/components/SparkleHeading";
import Particles from "@/components/Particles";
import GoogleRating from "@/components/GoogleRating";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "À propos — Entreprise de nettoyage à Caen",
  description:
    "L'histoire de Propre Éclat, entreprise de nettoyage née en 2023 à Caen : nettoyage de bureaux, de vitres et de fin de chantier. Une réputation bâtie sur le sérieux, la rigueur et la recommandation.",
  alternates: { canonical: "/a-propos" },
};

const values = [
  {
    title: "Ponctualité",
    text: "Un engagement pris est un engagement respecté : nous sommes là quand nous le disons.",
    icon: (
      <path d="M12 8v4l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Transparence",
    text: "Des échanges clairs et un devis sans surprise, du premier contact à la facture.",
    icon: (
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Régularité",
    text: "Une qualité constante d'une intervention à l'autre, sur laquelle vous pouvez compter.",
    icon: (
      <path d="M20 6L9 17l-5-5M22 11v1a10 10 0 1 1-6-9" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Excellence",
    text: "Le souci du détail et de la finition sur chaque prestation, sans compromis.",
    icon: (
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const story = [
  {
    year: "2023",
    title: "Une conviction, un point de départ",
    text: "Propre Éclat est née d'une conviction simple : il est possible de construire une entreprise reconnue grâce au travail, à la rigueur et au respect de la parole donnée. Le gérant a créé l'entreprise sans permis de conduire, sans salarié et sans locaux.",
  },
  {
    year: "Intervention après intervention",
    title: "Une croissance par le travail bien fait",
    text: "Avec pour seuls moteurs sa détermination, son exigence du travail bien fait et sa volonté d'apporter un véritable service de qualité, il a développé l'entreprise, un chantier après l'autre.",
  },
  {
    year: "Aujourd'hui",
    title: "Un acteur reconnu à Caen",
    text: "Propre Éclat s'est imposée comme un acteur reconnu du nettoyage professionnel sur le secteur de Caen. Cette confiance n'a pas été construite grâce à la publicité, mais grâce aux recommandations de clients satisfaits, aux partenariats durables et à une réputation fondée sur le sérieux.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light">
        <div
          aria-hidden="true"
          className="animate-drift-a absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-drift-b absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl"
        />
        <Particles />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <span className="animate-hero-in mb-4 inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            À propos · Depuis 2023
          </span>
          <h1 className="animate-hero-in text-4xl font-bold leading-tight text-white sm:text-5xl">
            Propre Éclat, votre entreprise de nettoyage à Caen
          </h1>
          <p
            className="animate-hero-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/85"
            style={{ animationDelay: "0.2s" }}
          >
            Notre promesse tient en une phrase :{" "}
            <span className="font-semibold text-white">« {siteConfig.tagline} »</span>.
            Un niveau de propreté qui se remarque, pour les professionnels comme
            pour les particuliers de Caen et des alentours.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="mx-auto -mt-10 max-w-4xl px-6">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-xl shadow-navy/5 ring-1 ring-navy/5 sm:grid-cols-3 sm:p-8">
          {[
            { value: "2023", label: "Année de création" },
            { value: "3", label: "Savoir-faire : bureaux · vitres · fin de chantier" },
            { value: "+20 km", label: "Rayon d'intervention autour de Caen" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">{stat.value}</p>
                <p className="mx-auto mt-1 max-w-[16rem] text-sm text-navy/60">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* L'histoire — frise verticale */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy">
            <SparkleHeading>L&apos;histoire de Propre Éclat</SparkleHeading>
          </h2>
        </Reveal>

        <ol className="mt-12 space-y-10">
          {story.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <li className="relative pl-10">
                {/* Ligne verticale */}
                {i < story.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[11px] top-8 h-[calc(100%+2.5rem-2rem)] w-px bg-gradient-to-b from-brand/50 to-brand/10"
                  />
                )}
                {/* Pastille */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-4 ring-brand/15"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
                  {step.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-navy/70">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Citation / philosophie */}
      <section className="px-6 pb-4">
        <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-navy-light px-6 py-12 text-center shadow-xl sm:px-12 sm:py-14">
          <div aria-hidden="true" className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-8 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
          <div className="relative">
            <span aria-hidden="true" className="text-5xl font-serif leading-none text-brand">“</span>
            <p className="mx-auto mt-2 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Faire plus que ce qui est attendu.
            </p>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream/80">
              Chaque intervention est réalisée avec le souci du détail, de la
              finition et du respect des lieux. Chez Propre Éclat, un engagement
              n&apos;est jamais une promesse en l&apos;air : il est respecté.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Nos valeurs */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy">
            <SparkleHeading>Nos valeurs</SparkleHeading>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Les repères qui guident chacune de nos interventions et nous
            permettent de bâtir une entreprise durable.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="group/card h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30 active:-translate-y-1.5 active:shadow-xl active:ring-brand/30">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand-dark transition-colors group-hover/card:bg-brand group-hover/card:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {value.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <p className="text-navy/70">
              Une confiance que nos clients partagent aussi sur Google.
            </p>
            <GoogleRating />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-cream-alt p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-navy">
            Un besoin de nettoyage à Caen ou aux alentours ?
          </p>
          <p className="mt-1 text-sm text-navy/70">
            Devis gratuit et sans engagement, réponse rapide dans un rayon de 20 km.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={siteConfig.phoneHref} className="btn btn-primary">
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
