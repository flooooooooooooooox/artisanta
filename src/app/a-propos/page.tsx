import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "À propos | Propre Éclat",
  description:
    "Découvrez Propre Éclat, entreprise de nettoyage à Caen : nos valeurs, notre approche et notre zone d'intervention.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
        À propos
      </p>
      <h1 className="mt-3 text-4xl font-bold text-navy">Propre Éclat</h1>
      <p className="mt-6 text-lg leading-relaxed text-navy/80">
        Chez Propre Éclat, notre promesse tient en une phrase :{" "}
        <span className="font-semibold text-navy">« {siteConfig.tagline} »</span>.
        Nous mettons un point d&apos;honneur à offrir un niveau de propreté qui se
        remarque, que ce soit pour un particulier, un professionnel ou un
        chantier exceptionnel.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Notre approche</h2>
          <p className="mt-2 text-sm text-navy/70">
            Rigueur, minutie et sens du détail : chaque intervention est menée
            avec le même souci d&apos;exigence, du premier coup de chiffon à la
            vérification finale.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Pour qui ?</h2>
          <p className="mt-2 text-sm text-navy/70">
            Nous intervenons aussi bien auprès des professionnels et
            particuliers que sur des chantiers exceptionnels, avec une
            prestation adaptée à chaque contexte.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Zone d&apos;intervention</h2>
          <p className="mt-2 text-sm text-navy/70">{siteConfig.serviceArea}</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
          <h2 className="text-lg font-semibold text-navy">Notre engagement</h2>
          <p className="mt-2 text-sm text-navy/70">
            Un interlocuteur unique, des réponses rapides et un travail soigné :
            c&apos;est ce qui fait la différence de propreté Propre Éclat.
          </p>
        </div>
      </div>
    </div>
  );
}
