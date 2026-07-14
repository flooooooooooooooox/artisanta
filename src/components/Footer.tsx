import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import { siteConfig } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-cream">
      {/* Liseré dégradé en haut du footer */}
      <div className="h-1 w-full bg-gradient-to-r from-brand via-brand-dark to-brand" />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        {/* Marque */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-propre-eclat.png"
              alt="Propre Éclat"
              width={44}
              height={44}
              className="rounded-lg"
            />
            <span className="text-lg font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm text-cream/70">{siteConfig.tagline}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-cream/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-brand">
              <path d="M12 21s-7-5.686-7-11a7 7 0 0 1 14 0c0 5.314-7 11-7 11z" strokeLinejoin="round" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {siteConfig.serviceArea}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/", label: "Accueil" },
              { href: "/a-propos", label: "À propos" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/politique-de-confidentialite", label: "Confidentialité" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  className="inline-flex items-center gap-1.5 text-cream/80 transition-colors hover:text-brand"
                  href={link.href}
                >
                  <span className="h-1 w-1 rounded-full bg-brand/50" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cream/50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                className="flex items-center gap-2 text-cream/80 transition-colors hover:text-brand"
                href={`mailto:${siteConfig.email}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-brand">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-cream/80 transition-colors hover:text-brand"
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-brand">
                  <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
                </svg>
                Avis Google
              </a>
            </li>
          </ul>

          {/* Réseaux sociaux */}
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3l.4-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.8.5 14.8.5 12.5.5 11 1.9 11 4.3V6H8v3h3v9h3V9z" />
              </svg>
            </a>
            <Link
              href="/contact"
              aria-label="Nous écrire"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-brand hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 border-t border-cream/10 px-6 py-6 sm:flex-row sm:justify-between">
        <span className="text-sm font-semibold text-cream/70">Partager le site</span>
        <ShareButtons />
      </div>

      <div className="border-t border-cream/10 px-6 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
