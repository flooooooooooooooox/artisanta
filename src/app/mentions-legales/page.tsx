import type { Metadata } from "next";
import Link from "next/link";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Propre Éclat.",
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
          <h2 className="text-lg font-semibold text-navy">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des éléments composant ce site (textes, images, logo,
            photographies, mise en page, code) est la propriété de {legalMentions.companyName}{" "}
            ou de ses partenaires, et est protégé par le droit de la propriété
            intellectuelle. Toute reproduction ou utilisation, totale ou partielle,
            sans autorisation écrite préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Données personnelles (RGPD)</h2>
          <p className="mt-2">
            Les informations transmises via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande. Conformément au Règlement
            général sur la protection des données (RGPD), vous disposez d&apos;un droit
            d&apos;accès, de rectification et de suppression de vos données. Pour en
            savoir plus, consultez notre{" "}
            <Link className="text-brand-dark hover:underline" href="/politique-de-confidentialite">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Cookies</h2>
          <p className="mt-2">
            Ce site ne dépose pas de cookies publicitaires ni de traceurs à des fins
            de suivi commercial. Seuls des éléments techniques strictement
            nécessaires au bon fonctionnement du site peuvent être utilisés.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Responsabilité</h2>
          <p className="mt-2">
            {legalMentions.companyName} s&apos;efforce d&apos;assurer l&apos;exactitude des
            informations diffusées sur ce site mais ne saurait être tenu responsable
            des erreurs, omissions ou d&apos;une éventuelle indisponibilité. Les
            photographies de réalisations sont non contractuelles.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">Zone d&apos;intervention</h2>
          <p className="mt-2">{siteConfig.serviceArea}</p>
        </section>
      </div>
    </div>
  );
}
