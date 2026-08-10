"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const CAEN: [number, number] = [49.1829, -0.3707];
const BRAND = "#2f96d8";

export default function ZoneMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.init) return;
    el.dataset.init = "1";

    let map: import("leaflet").Map | undefined;
    let observer: ResizeObserver | undefined;

    (async () => {
      const L = await import("leaflet");

      map = L.map(el, {
        center: CAEN,
        zoom: 10,
        zoomControl: false,
        attributionControl: true,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19,
      }).addTo(map);

      // Périmètre de 20 km (vrai cercle géographique)
      const zone = L.circle(CAEN, {
        radius: 20000,
        color: BRAND,
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 0.15,
      }).addTo(map);

      // Point central (Caen)
      L.circleMarker(CAEN, {
        radius: 6,
        color: "#ffffff",
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 1,
      }).addTo(map);

      // Cadre la carte sur toute la zone : le cercle reste entièrement visible
      // quelle que soit la largeur de l'écran (sinon il déborde sur mobile).
      const fit = () => {
        if (!map) return;
        map.invalidateSize();
        map.fitBounds(zone.getBounds(), { padding: [12, 12], animate: false });
      };
      fit();

      observer = new ResizeObserver(fit);
      observer.observe(el);
    })();

    return () => {
      observer?.disconnect();
      map?.remove();
      delete el.dataset.init;
    };
  }, []);

  return <div ref={containerRef} className="h-[300px] w-full" aria-label="Zone d'intervention de Propre Éclat autour de Caen" />;
}
