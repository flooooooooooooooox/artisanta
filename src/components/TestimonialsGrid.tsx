"use client";

import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { testimonials as TestimonialsType } from "@/lib/site-data";

const VISIBLE_COUNT = 3;

export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: typeof TestimonialsType;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, VISIBLE_COUNT);
  const hasMore = testimonials.length > VISIBLE_COUNT;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-navy/20 px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white"
          >
            {expanded ? "Voir moins d'avis" : "Voir plus d'avis"}
          </button>
        </div>
      )}
    </div>
  );
}
