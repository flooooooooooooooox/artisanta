"use client";

import { useCallback, useEffect, useRef } from "react";
import BeforeAfterCard from "./BeforeAfterCard";

type Item = { title: string; before: string; after: string };

/**
 * Galerie de réalisations qui défile en continu, dans les deux sens.
 *
 * La liste est rendue en 3 exemplaires et le défilement démarre au milieu :
 * l'utilisateur peut donc remonter comme avancer sans jamais buter sur un bord.
 * Le défilement automatique s'arrête dès qu'il interagit et reprend après un
 * court délai d'inactivité.
 */
export default function RealisationsCarousel({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const widthRef = useRef(0); // largeur d'un exemplaire de la liste
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loop = [...items, ...items, ...items];

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

  // Replace la position dans l'exemplaire du milieu (boucle infinie 2 sens)
  const wrap = useCallback(() => {
    const el = scrollerRef.current;
    const w = widthRef.current;
    if (!el || w <= 0) return;
    if (el.scrollLeft >= 2 * w) el.scrollLeft -= w;
    else if (el.scrollLeft <= 0) el.scrollLeft += w;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Mesure d'un exemplaire et démarrage au milieu
    const measure = () => {
      widthRef.current = el.scrollWidth / 3;
      if (el.scrollLeft === 0) el.scrollLeft = widthRef.current;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const onScroll = () => wrap();
    el.addEventListener("scroll", onScroll, { passive: true });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return () => {
        ro.disconnect();
        el.removeEventListener("scroll", onScroll);
      };
    }

    let raf = 0;
    let last = performance.now();
    const speed = 38; // px par seconde

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05); // borne les gros écarts (onglet inactif)
      last = now;
      if (!pausedRef.current) el.scrollLeft += speed * dt;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [wrap]);

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
        className="no-scrollbar -mx-6 flex gap-6 overflow-x-auto px-6 py-2"
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
            className="w-[280px] shrink-0 sm:w-[340px]"
          >
            <BeforeAfterCard
              {...item}
              showHint={false}
              sizes="(max-width: 640px) 280px, 340px"
            />
          </div>
        ))}
      </div>

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
