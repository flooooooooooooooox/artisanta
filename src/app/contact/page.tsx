import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & devis gratuit — Nettoyage à Caen",
  description:
    "Demandez votre devis gratuit à Propre Éclat, entreprise de nettoyage à Caen et alentours (+20 km). Réponse rapide par téléphone ou email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold text-navy">Demandez votre devis</h1>
          <p className="mt-4 text-navy/70">
            Remplissez le formulaire ci-contre, nous revenons vers vous
            rapidement pour organiser votre intervention.
          </p>

          <div className="mt-8 space-y-4 text-sm text-navy/80">
            <div>
              <p className="font-semibold text-navy">Téléphone</p>
              <a className="text-brand-dark hover:underline" href={siteConfig.phoneHref}>
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy">Email</p>
              <a className="text-brand-dark hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy">Zone d&apos;intervention</p>
              <p>{siteConfig.serviceArea}</p>
            </div>
            <div>
              <p className="font-semibold text-navy">Réseaux</p>
              <a
                className="text-brand-dark hover:underline"
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
