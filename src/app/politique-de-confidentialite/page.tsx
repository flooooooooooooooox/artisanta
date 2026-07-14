import type { Metadata } from "next";
import Link from "next/link";
import { legalMentions, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et gestion des données personnelles (RGPD) de Propre Éclat.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-navy">Politique de confidentialité</h1>
      <p className="mt-4 text-sm text-navy/60">
        Cette politique décrit la manière dont {legalMentions.companyName} collecte et
        traite vos données personnelles, conformément au Règlement général sur la
        protection des données (RGPD) et à la loi Informatique et Libertés.
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80">
        <section>
          <h2 className="text-lg font-semibold text-navy">1. Responsable du traitement</h2>
          <p className="mt-2">
            Le responsable du traitement des données est {legalMentions.companyName}
            {" "}({legalMentions.headOffice}). Pour toute question relative à vos
            données, vous pouvez nous contacter à l&apos;adresse{" "}
            <a className="text-brand-dark hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">2. Données collectées</h2>
          <p className="mt-2">
            Nous collectons uniquement les données que vous nous transmettez
            volontairement via le formulaire de contact : nom, adresse email,
            numéro de téléphone, ville, code postal et le contenu de votre message.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">3. Finalité et base légale</h2>
          <p className="mt-2">
            Ces données sont utilisées dans le seul but de traiter votre demande de
            devis ou d&apos;information et d&apos;assurer le suivi de la relation
            commerciale. La base légale du traitement est votre consentement ainsi
            que l&apos;exécution de mesures précontractuelles prises à votre demande.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">4. Durée de conservation</h2>
          <p className="mt-2">
            Vos données sont conservées le temps nécessaire au traitement de votre
            demande, puis pour la durée de la relation commerciale, et enfin archivées
            conformément aux délais légaux applicables. Elles ne sont jamais vendues
            ni cédées à des tiers à des fins commerciales.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">5. Destinataires</h2>
          <p className="mt-2">
            Les données collectées sont destinées exclusivement à {legalMentions.companyName}
            {" "}et, le cas échéant, à ses prestataires techniques (hébergement,
            messagerie) strictement nécessaires au fonctionnement du service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">6. Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation et d&apos;opposition au
            traitement de vos données, ainsi que d&apos;un droit à la portabilité.
            Vous pouvez exercer ces droits à tout moment en nous écrivant à{" "}
            <a className="text-brand-dark hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            . Vous avez également le droit d&apos;introduire une réclamation auprès de
            la CNIL (www.cnil.fr).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">7. Cookies</h2>
          <p className="mt-2">
            Ce site n&apos;utilise pas de cookies publicitaires ni de traceurs à des
            fins de suivi. Seuls des éléments techniques strictement nécessaires au
            bon fonctionnement du site peuvent être déposés, sans consentement
            préalable requis. La carte Google Maps intégrée peut, lors de son
            affichage, déposer des cookies relevant de la politique de Google.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-navy">8. Contact</h2>
          <p className="mt-2">
            Pour toute question concernant cette politique, contactez-nous via la{" "}
            <Link className="text-brand-dark hover:underline" href="/contact">
              page contact
            </Link>{" "}
            ou par email à{" "}
            <a className="text-brand-dark hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
