# Squelette de code pré-fait

Fichiers éprouvés à **copier tels quels** dans le nouveau projet, pour aller plus vite.
Seules la config et les couleurs changent d'un client à l'autre.

## À copier sans modifier (ou presque)
- `globals.css` → `src/app/globals.css` — **changer uniquement les 8 variables de couleur**
  (`:root`) selon la variante retenue (cf. `../references/design-variants.md`). Contient déjà
  tout : thème, boutons, et toutes les animations (hero, header, drift, shine, particules,
  étincelles, marquee, reveal) avec les garde-fous `prefers-reduced-motion`.
- `components/BeforeAfterSlider.tsx`, `BeforeAfterCard.tsx` — galerie avant/après glissable
- `components/ZoneMap.tsx` — carte OSM (changer `CENTER` = coords ville + `radius`)
- `components/ContactForm.tsx` + `app/actions.ts` → `src/app/contact/` — formulaire Resend
- `components/Reveal.tsx`, `Particles.tsx`, `MobileCtaBar.tsx`, `SparkleHeading.tsx`, `JsonLd.tsx`
- `app/llms.txt/route.ts` → `src/app/llms.txt/route.ts` — **résumé GEO pour les IA** (généré
  depuis `site-data`, adapter le vocabulaire au secteur) — cf. `../references/geo.md`
- `app/robots.ts` → `src/app/robots.ts` — autorise le crawl **+ les robots IA** (GEO)

## À adapter au client
- `lib/site-data.example.ts` → `src/lib/site-data.ts` : **remplacer tout le contenu** par les
  infos du client (garder la même forme). Les tableaux vides masquent les sections.
- `lib/structured-data.ts` → `src/lib/structured-data.ts` : **changer le `@type`** selon le
  secteur (cf. `../references/sectors.md`), et vérifier adresse/geo/services.

## À générer (pas dans le squelette, car spécifiques)
Header, Footer, Hero, sections (Services, WhyUs, Process, FAQ, GoogleReviews), pages
(`app/*/page.tsx`), `layout.tsx`, `sitemap.ts`, `opengraph-image.tsx`, icônes.
→ suivre `../references/build-guide.md`.

## Dépendances
`npm install leaflet@^1.9 && npm install -D @types/leaflet` si la carte est activée.
