"use client";

import { useCallback, useEffect, useRef } from "react";
import BeforeAfterCard from "./BeforeAfterCard";

type Item = { title: string; before: string; after: string };

/**
 * Galerie de réalisations qui défile en continu.
 * Le défilement s'arrête dès que l'utilisateur interagit (survol, toucher,
 * glissement, flèches) et reprend après un court délai d'inactivité.
 */
export default function RealisationsCarousel({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Liste dupliquée pour une boucle sans couture
  const loop = [...items, ...items];

  const pause = useCallback((autoResume = true) => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    if (autoResume) {
      resumeTimer.current = setTimeout(() => {
        pausedRef.current = false;
      }, 2500);
    }
  }, []);

  const resume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 600);
  }, []);

  // Défilement automatique
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let last = performance.now();
    const speed = 40; // px par seconde

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current) {
        el.scrollLeft += speed * dt;
        // Boucle : on revient au début quand la 1re copie est passée
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    pause();
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="group relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-2"
        onMouseEnter={() => pause(false)}
        onMouseLeave={resume}
        onPointerDown={() => pause(false)}
        onPointerUp={resume}
        onTouchStart={() => pause(false)}
        onTouchEnd={resume}
        onWheel={() => pause()}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            data-card
            className="w-[280px] shrink-0 snap-start sm:w-[340px]"
          >
            <BeforeAfterCard {...item} showHint={false} />
          </div>
        ))}
      </div>

      {/* Flèches de navigation */}
      <button
        type="button"
        aria-label="Réalisations précédentes"
        onClick={() => scrollByCard(-1)}
        className="absolute -left-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-navy shadow-lg ring-1 ring-navy/10 transition hover:bg-brand hover:text-white sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Réalisations suivantes"
        onClick={() => scrollByCard(1)}
        className="absolute -right-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2.5 text-navy shadow-lg ring-1 ring-navy/10 transition hover:bg-brand hover:text-white sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
