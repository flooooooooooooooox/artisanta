# Fonctionnalités à la carte

Chaque fonctionnalité correspond à un composant/section. Générer **uniquement** celles choisies
par le client. Une section sans données doit se **masquer automatiquement** (garde-fou).

| Fonction | Composant(s) | Données requises | Si absente |
|---|---|---|---|
| Galerie avant/après | `BeforeAfterCard`, `BeforeAfterSlider` | paires d'images avant/après | section masquée |
| Carte zone d'intervention | `ZoneMap` (Leaflet + OSM) | ville + coords + rayon | remplacer par texte de zone |
| Avis Google | `GoogleReviewsSection`, `TestimonialsCarousel`, `GoogleRating` | avis + note + lien | section masquée |
| Formulaire de contact | `ContactForm` + `actions.ts` (Resend) | clé Resend + email | fallback : email `mailto:` + tél |
| FAQ | `FaqSection` (+ schéma FAQPage) | 4-6 Q/R | section masquée |
| Pourquoi nous choisir | `WhyUsSection` | 4 arguments | valeurs génériques par secteur |
| Comment ça se passe | `ProcessSection` | 3 étapes | étapes génériques |
| Barre mobile fixe | `MobileCtaBar` | téléphone | masquée si pas de tél |

## Sections toujours présentes (socle)
- **Header** (logo + nav + tél + CTA + descente animée)
- **Hero** (titre avec mot-clé local, sous-titre, 2 CTA, logo animé + particules)
- **Bandeau stats** (zone / cible / promesse)
- **Services / prestations** (cartes avec effet survol + tap)
- **CTA final** (carte dégradée + boutons Appeler / Devis)
- **Footer** (bande CTA, colonnes marque/nav/prestations/contact, horaires, réseaux, partage)
- **Pages** : Accueil, À propos, Services, Contact, Mentions légales, Confidentialité (RGPD)
- **SEO** : métadonnées par page, canonical, sitemap, robots, OpenGraph, favicon, données
  structurées (LocalBusiness + WebSite + FAQPage + horaires), noindex sur pages légales

## Garde-fous « masquage si vide »
Dans chaque section optionnelle, vérifier la donnée avant de rendre :
```tsx
if (!testimonials.length) return null;      // Avis
if (!beforeAfterGallery.length) return null; // Galerie
if (!faq.length) return null;                // FAQ
```
