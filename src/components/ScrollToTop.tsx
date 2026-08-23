"use client";

import { useEffect, useState } from "react";

/**
 * Bouton « retour en haut ».
 * Apparaît après un défilement suffisant et se place au-dessus de la barre
 * d'appel fixe sur mobile pour ne pas la recouvrir.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Listener passif + rAF : aucun calcul lourd pendant le défilement
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 700);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Revenir en haut de la page"
      // bottom-24 sur mobile : laisse la place à la barre Appeler / Devis
      className={`fixed bottom-24 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-brand hover:text-white md:bottom-6 md:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
