"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  title: string;
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ title, before, after }: Props) {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  }, []);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    updateFromClientX(clientX);
  };

  const stopDrag = () => {
    draggingRef.current = false;
  };

  const onMove = (clientX: number) => {
    if (draggingRef.current) updateFromClientX(clientX);
  };

  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      <div
        ref={containerRef}
        className="relative aspect-square w-full cursor-ew-resize select-none touch-none"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        <Image
          src={after}
          alt={`${title} après nettoyage`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          draggable={false}
          className="pointer-events-none object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${title} avant nettoyage`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            draggable={false}
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Avant
        </span>
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          Après
        </span>

        <div
          className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${percent}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-navy">
        {title} <span className="font-normal text-navy/50">— glissez pour comparer</span>
      </figcaption>
    </figure>
  );
}
