import TestimonialCard from "./TestimonialCard";
import type { testimonials as TestimonialsType } from "@/lib/site-data";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: typeof TestimonialsType;
}) {
  // Liste dupliquée pour un défilement en boucle sans couture
  const loop = [...testimonials, ...testimonials];

  return (
    <div className="group relative -mx-6 overflow-hidden px-6">
      {/* Fondus sur les bords */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream-alt to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream-alt to-transparent sm:w-20" />

      <div className="animate-marquee flex w-max py-2">
        {loop.map((testimonial, i) => (
          <div
            key={`${testimonial.name}-${i}`}
            className="mr-6 w-[300px] shrink-0 sm:w-[360px]"
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
