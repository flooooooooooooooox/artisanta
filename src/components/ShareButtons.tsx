"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

const shareText = "Propre Éclat — Nettoyage professionnel à Caen. La différence de propreté.";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = siteConfig.url;

  const links = [
    {
      label: "Partager sur Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: (
        <path d="M14 9h3l.4-3H14V4.5c0-.8.2-1.3 1.4-1.3H17V.6C16.7.5 15.8.5 14.8.5 12.5.5 11 1.9 11 4.3V6H8v3h3v9h3V9z" />
      ),
      fill: true,
    },
    {
      label: "Partager sur WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`,
      icon: (
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.6 4c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z" />
      ),
      fill: true,
    },
    {
      label: "Partager par email",
      href: `mailto:?subject=${encodeURIComponent("Propre Éclat")}&body=${encodeURIComponent(`${shareText}\n${url}`)}`,
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      ),
      fill: false,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignoré si le presse-papier n'est pas accessible
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-brand hover:text-white"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={link.fill ? "currentColor" : "none"}
            stroke={link.fill ? "none" : "currentColor"}
            strokeWidth="2"
          >
            {link.icon}
          </svg>
        </a>
      ))}

      <button
        type="button"
        onClick={copyLink}
        aria-label="Copier le lien"
        className="flex h-9 items-center gap-1.5 rounded-full bg-cream/10 px-3 text-xs font-medium text-cream transition-colors hover:bg-brand hover:text-white"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
        </svg>
        {copied ? "Lien copié !" : "Copier le lien"}
      </button>
    </div>
  );
}
