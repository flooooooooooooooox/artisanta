"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { testimonials as TestimonialsType } from "@/lib/site-data";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: typeof TestimonialsType;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canPrev}
          aria-label="Avis précédents"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-all hover:border-brand hover:text-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canNext}
          aria-label="Avis suivants"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-all hover:border-brand hover:text-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
