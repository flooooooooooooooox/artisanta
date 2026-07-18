# Guide de construction du site

Architecture **pilotée par la configuration** : tout le contenu vit dans `src/lib/site-data.ts`
et toutes les couleurs dans des variables CSS. Générer un nouveau site = remplir la config +
appliquer une variante de design. La structure et les composants restent identiques à la
référence (implémentation Propre Éclat).

## 1. Stack & scaffold
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-npm --no-turbopack
npm install leaflet@^1.9        # si carte activée
npm install -D @types/leaflet
```
Next.js (App Router) + Tailwind v4 + TypeScript. Lire `node_modules/next/dist/docs/` si la
version diffère (breaking changes possibles).

## 2. Thème (globals.css) — appliquer la variante choisie
Structure des variables (remplacer les valeurs par celles de la variante retenue dans
`design-variants.md`) :
```css
@import "tailwindcss";
:root {
  --background: #faf6ec; --foreground: #16324a;
  --color-cream: #faf6ec; --color-cream-alt: #f1e8d6;
  --color-navy: #0f3a5c; --color-navy-light: #16537e;
  --color-brand: #2f96d8; --color-brand-dark: #1c74b0;
}
@theme inline {
  --color-background: var(--background); --color-foreground: var(--foreground);
  --color-cream: var(--color-cream); --color-cream-alt: var(--color-cream-alt);
  --color-navy: var(--color-navy); --color-navy-light: var(--color-navy-light);
  --color-brand: var(--color-brand); --color-brand-dark: var(--color-brand-dark);
  --font-sans: var(--font-geist-sans); --font-mono: var(--font-geist-mono);
}
body { background: var(--background); color: var(--foreground); }
```
Puis ajouter les blocs `@layer components { .btn ... }` (boutons primary/ghost/outline/sm) et
les keyframes d'animation (voir §7). Polices : remplacer la paire Geist dans `layout.tsx` par
la paire de la variante via `next/font/google`.

## 3. Config centrale — `src/lib/site-data.ts`
Exporter : `siteConfig` (name, tagline, sector, phone, phoneHref, email, serviceArea, city,
postalCode, region, country, geo{lat,lng}, hours{display,short,opens,closes}, areaServed[],
url, facebookUrl, googleReviewsUrl, googleRating, googleReviewCount), `services[]`,
`beforeAfterGallery[]`, `testimonials[]`, `faq[]`, `benefits[]`, `processSteps[]`,
`legalMentions{}`. Les tableaux vides déclenchent le masquage des sections (cf. features.md).

## 4. Données structurées — `src/lib/structured-data.ts`
`getLocalBusinessSchema()` : type `CleaningService` ou le type Schema.org adapté au secteur
(`Plumber`, `Electrician`, `HousePainter`, `GeneralContractor`, `LandscapingBusiness`,
`Locksmith`, sinon `LocalBusiness`). Inclure name, description, url, email, telephone, logo,
image, address (locality-level), geo, `openingHoursSpecification`, `areaServed` (City[]),
`hasOfferCatalog` (services), `sameAs`. **Ne PAS** mettre `aggregateRating`/`review`
(avis auto-hébergés interdits par Google). + `getWebSiteSchema()` et `getFaqSchema()`.

## 5. Composant slider avant/après (non trivial) — `BeforeAfterSlider.tsx`
```tsx
"use client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
type Props = { title: string; before: string; after: string; showHint?: boolean };
export default function BeforeAfterSlider({ title, before, after, showHint = true }: Props) {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    setPercent(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);
  const start = (x: number) => { draggingRef.current = true; updateFromClientX(x); };
  const move = (x: number) => { if (draggingRef.current) updateFromClientX(x); };
  const stop = () => { draggingRef.current = false; };
  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      <div ref={containerRef}
        className="relative aspect-square w-full cursor-ew-resize select-none touch-none"
        onMouseDown={(e)=>start(e.clientX)} onMouseMove={(e)=>move(e.clientX)}
        onMouseUp={stop} onMouseLeave={stop}
        onTouchStart={(e)=>start(e.touches[0].clientX)} onTouchMove={(e)=>move(e.touches[0].clientX)}
        onTouchEnd={stop}>
        <Image src={after} alt={`${title} après`} fill sizes="(max-width:640px) 100vw, 33vw"
          draggable={false} className="pointer-events-none object-cover" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}>
          <Image src={before} alt={`${title} avant`} fill sizes="(max-width:640px) 100vw, 33vw"
            draggable={false} className="object-cover" />
        </div>
        <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-semibold uppercase text-white">Avant</span>
        <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase text-white">Après</span>
        <div className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-white/90" style={{ left: `${percent}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
      <figcaption className={`px-4 py-3 text-sm font-medium text-navy ${showHint ? "" : "text-center"}`}>
        {title}{showHint && <span className="font-normal text-navy/50"> — glissez pour comparer</span>}
      </figcaption>
    </figure>
  );
}
```
Astuce : si le client fournit une image déjà composée « avant|après » côte à côte, la découper
en 2 moitiés (script Python/PIL) sous la zone du badge.

## 6. Carte OSM (Leaflet, sans clé API) — `ZoneMap.tsx`
```tsx
"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
const CENTER: [number, number] = [LAT, LNG]; const BRAND = "#2f96d8";
export default function ZoneMap() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el || el.dataset.init) return; el.dataset.init = "1";
    let map: import("leaflet").Map | undefined;
    (async () => {
      const L = await import("leaflet");
      map = L.map(el, { center: CENTER, zoom: 10, zoomControl: false, dragging: false,
        scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; OpenStreetMap", maxZoom: 19 }).addTo(map);
      L.circle(CENTER, { radius: RAYON_METRES, color: BRAND, weight: 2, fillColor: BRAND, fillOpacity: 0.15 }).addTo(map);
      L.circleMarker(CENTER, { radius: 6, color: "#fff", weight: 2, fillColor: BRAND, fillOpacity: 1 }).addTo(map);
    })();
    return () => { map?.remove(); delete el.dataset.init; };
  }, []);
  return <div ref={ref} className="h-[300px] w-full" />;
}
```
Carte figée (pas de zoom) → le cercle reste aligné. Boutons « Ouvrir dans Maps » / « Itinéraire »
en liens externes à côté. Attribution OSM = obligatoire (ne pas masquer).

## 7. Formulaire → email (Resend) — `app/contact/actions.ts`
Server Action qui POST vers `https://api.resend.com/emails` avec `RESEND_API_KEY`.
Champs : name, email, phone, city, postalCode, message. `reply_to` = email du prospect.
Repli propre si la clé est absente (log + succès affiché). Variables d'env :
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (défaut `onboarding@resend.dev`).
Voir la référence Propre Éclat pour le code complet (échappement HTML, gestion erreurs).

## 8. Animations (globals.css)
Keyframes à inclure : `hero-in` (apparition), `header-in` (descente header), `drift`
(halos qui dérivent), `soft-float` (logo), `shine-sweep` (reflet logo), `particle-float`
(particules), `twinkle` (étincelles titres), `marquee` (carrousel avis), `.reveal`
(apparition au scroll via IntersectionObserver, composant `Reveal.tsx`). **Toujours**
neutraliser sous `@media (prefers-reduced-motion: reduce)`. Cartes : effet `hover:` ET
`active:` (équivalent tactile mobile).

## 9. SEO (obligatoire)
- `layout.tsx` metadata : `metadataBase`, `title{default,template:"%s | NOM"}`, description,
  keywords locaux, openGraph, twitter, `alternates.canonical:"/"`.
- **Chaque sous-page** : `title` SANS le suffixe (le template l'ajoute) + `alternates.canonical:"/chemin"`.
- Pages légales : `robots:{index:false}`.
- H1 de l'accueil = doit contenir le mot-clé local (ex. « Nettoyage à [Ville] »).
- `sitemap.ts` (pages indexables uniquement), `robots.ts`, `opengraph-image.tsx` (ImageResponse
  aux couleurs de la variante), `icon.png` + `apple-icon.png` = le logo client.
- Communes voisines listées en **contenu visible** (SEO local longue traîne).

## 10. Structure des pages
`/` (accueil), `/a-propos`, `/services`, `/contact`, `/mentions-legales`,
`/politique-de-confidentialite`, `not-found.tsx`. Layout = Header + main + Footer + MobileCtaBar,
`pb-[68px] md:pb-0` sur `<body>` si barre mobile active.

## 11. Vérification avant livraison
```bash
npx tsc --noEmit && npm run lint && npm run build
```
Puis crawler mental : titres uniques, 1 H1/page, canonicals corrects, JSON-LD présent,
images avec `alt`, formulaire testé. Lister les placeholders `[à compléter]` restants.
