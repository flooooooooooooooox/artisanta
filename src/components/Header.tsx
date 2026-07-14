"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-header-in sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/logo-propre-eclat.png"
            alt="Propre Éclat"
            width={44}
            height={44}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-navy">
            Propre Éclat
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-dark lg:inline-flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
              </svg>
            </span>
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="btn btn-primary btn-sm hidden sm:inline-flex"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy/80 hover:bg-cream-alt hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-cream-alt hover:text-brand-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-dark">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" strokeLinejoin="round" />
            </svg>
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary btn-sm mt-1 sm:hidden"
          >
            Demander un devis
          </Link>
        </nav>
      )}
    </header>
  );
}
