import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SparkleHeading from "@/components/SparkleHeading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "À propos — Entreprise de nettoyage à Caen",
  description:
    "L'histoire de Propre Éclat, entreprise de nettoyage née en 2023 à Caen : nettoyage de bureaux, de vitres et de fin de chantier. Une réputation bâtie sur le sérieux, la rigueur et la recommandation.",
  alternates: { canonical: "/a-propos" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
        À propos
      </p>
      <h1 className="mt-3 text-4xl font-bold text-navy">
        Propre Éclat, votre entreprise de nettoyage à Caen
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Chez Propre Éclat, notre promesse tient en une phrase :{" "}
        <span className="font-semibold text-navy">« {siteConfig.tagline} »</span>.
        Nous mettons un point d&apos;honneur à offrir un niveau de propreté qui se
        remarque, pour les professionnels comme pour les particuliers de Caen et
        des alentours.
      </p>
      <p className="mt-4 leading-relaxed text-navy/70">
        Née en 2023 et aujourd&apos;hui constituée en EURL basée à
        Saint-Germain-la-Blanche-Herbe, aux portes de Caen, Propre Éclat est une
        entreprise de nettoyage à taille humaine. Nous nous concentrons sur trois
        savoir-faire : le{" "}
        <strong>nettoyage de bureaux et locaux professionnels</strong>, le{" "}
        <strong>nettoyage de vitres</strong> et le{" "}
        <strong>nettoyage de fin de chantier</strong>. Un interlocuteur unique,
        un travail soigné et une vraie exigence du détail : voilà ce qui fait la
        différence de propreté.
      </p>

      {/* L'histoire de Propre Éclat */}
      <div className="mt-14">
        <Reveal>
          <h2 className="text-2xl font-bold text-navy">
            <SparkleHeading>L&apos;histoire de Propre Éclat</SparkleHeading>
          </h2>
        </Reveal>
        <div className="mt-6 space-y-4 leading-relaxed text-navy/75">
          <p>
            Propre Éclat est née en 2023 d&apos;une conviction simple : il est
            possible de construire une entreprise reconnue grâce au travail, à la
            rigueur et au respect de la parole donnée.
          </p>
          <p>
            Au départ, le gérant a créé l&apos;entreprise sans permis de conduire,
            sans salarié et sans locaux. Avec pour seuls moteurs sa détermination,
            son exigence du travail bien fait et sa volonté d&apos;apporter un
            véritable service de qualité, il a développé l&apos;entreprise
            intervention après intervention.
          </p>
          <p>
            Année après année, Propre Éclat s&apos;est imposée comme un acteur
            reconnu du nettoyage professionnel sur le secteur de Caen. Cette
            confiance n&apos;a pas été construite grâce à la publicité, mais grâce
            aux recommandations de clients satisfaits, aux partenariats durables et
            à une réputation fondée sur le sérieux.
          </p>
          <p>
            Notre philosophie est simple :{" "}
            <span className="font-semibold text-navy">
              faire plus que ce qui est attendu
            </span>
            . Chaque intervention est réalisée avec le souci du détail, de la
            finition et du respect des lieux. Nous privilégions un travail
            minutieux, une qualité constante et une relation de confiance avec
            chacun de nos clients.
          </p>
          <p>
            Chez Propre Éclat, un engagement n&apos;est jamais une promesse en
            l&apos;air : il est respecté. Nous croyons que la ponctualité, la
            transparence, la régularité et l&apos;excellence du service sont les
            valeurs qui permettent de bâtir une entreprise durable.
          </p>
          <p>
            Aujourd&apos;hui, notre ambition reste la même qu&apos;au premier jour :
            offrir à chaque client un résultat irréprochable et une expérience qui
            donne envie de nous faire confiance, encore et encore.
          </p>
        </div>
      </div>

      {/* Nos valeurs */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Ponctualité",
            text: "Un engagement pris est un engagement respecté : nous sommes là quand nous le disons.",
          },
          {
            title: "Transparence",
            text: "Des échanges clairs et un devis sans surprise, du premier contact à la facture.",
          },
          {
            title: "Régularité",
            text: "Une qualité constante d'une intervention à l'autre, sur laquelle vous pouvez compter.",
          },
          {
            title: "Excellence",
            text: "Le souci du détail et de la finition sur chaque prestation, sans compromis.",
          },
        ].map((value, i) => (
          <Reveal key={value.title} delay={i * 80}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/10 hover:ring-brand/30 active:-translate-y-1 active:shadow-lg active:ring-brand/30">
              <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{value.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Nos prestations</h2>
          <p className="mt-2 text-sm text-navy/70">
            Nettoyage de bureaux et locaux professionnels, nettoyage de vitres et
            nettoyage de fin de chantier, pour les particuliers comme pour les
            professionnels.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Zone d&apos;intervention</h2>
          <p className="mt-2 text-sm text-navy/70">{siteConfig.serviceArea}</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-cream-alt p-6 text-center sm:p-8">
        <p className="font-semibold text-navy">Un besoin de nettoyage ?</p>
        <p className="mt-1 text-sm text-navy/70">
          Devis gratuit et sans engagement, à Caen et dans un rayon de 20 km.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a href={siteConfig.phoneHref} className="btn btn-primary">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn btn-outline">
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
