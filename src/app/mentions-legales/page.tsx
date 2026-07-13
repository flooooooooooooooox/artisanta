import type { Metadata } from "next";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales | Propre Éclat",
  description: "Mentions légales de Propre Éclat.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy">Mentions légales</h1>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80">
        <section>
          <h2 className="text-lg font-semibold text-navy">Éditeur du site</h2>
          <ul className="mt-2 space-y-1">
            <li>Nom commercial : {legalMentions.companyName}</li>
            <li>Forme juridique : {legalMentions.legalForm}</li>
            <li>SIRET : {legalMentions.siret}</li>
            <li>RCS : {legalMentions.rcs}</li>
            <li>Adresse du siège social : {legalMentions.headOffice}</li>
            <li>
              Email :{" "}
              <a className="text-brand-dark hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Assurance professionnelle</h2>
          <p className="mt-2">{legalMentions.insurance}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Directeur de la publication</h2>
          <p className="mt-2">{legalMentions.publicationDirector}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Hébergement</h2>
          <p className="mt-2">{legalMentions.host}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Zone d&apos;intervention</h2>
          <p className="mt-2">{siteConfig.serviceArea}</p>
        </section>
      </div>
    </div>
  );
}
