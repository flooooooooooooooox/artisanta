import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-cream/70">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-cream/70">
            Zone d&apos;intervention : {siteConfig.serviceArea}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Navigation
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-brand" href="/">Accueil</Link></li>
            <li><Link className="hover:text-brand" href="/a-propos">À propos</Link></li>
            <li><Link className="hover:text-brand" href="/services">Services</Link></li>
            <li><Link className="hover:text-brand" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-brand" href="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-brand" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-brand"
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="hover:text-brand"
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avis Google
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
