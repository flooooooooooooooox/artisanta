---
name: site-artisan
description: >-
  Génère un site vitrine professionnel complet (Next.js) pour un artisan à partir d'un
  questionnaire unique. Utiliser quand l'utilisateur veut créer un site pour un artisan /
  une entreprise de services locale (nettoyage, plomberie, électricité, peinture, paysagiste,
  menuiserie, maçonnerie, couvreur…). Le skill pose toutes les questions, choisit une variante
  de design à usage unique, active les fonctionnalités à la carte, construit le site et guide
  le déploiement (Vercel + Resend + domaine).
---

# Usine à sites d'artisans

Objectif : produire, en **une seule session**, un site vitrine complet, cohérent et prêt à
déployer pour un artisan. Basé sur l'implémentation de référence « Propre Éclat ».

## Standard NON négociable
Chaque site doit viser **deux objectifs à la fois**, à tout moment de la construction :
1. **Un design « wow », premium** → respecter `design-excellence.md` (rythme, typo, profondeur,
   hero animé, micro-interactions dosées, finition).
2. **Un maximum de conversions** → respecter `conversion.md` (CTA + tél au-dessus de la ligne
   de flottaison, preuve sociale près des CTA, avant/après, formulaire court + réassurance,
   FAQ anti-objections, click-to-call partout).
Ne jamais livrer un site qui ne coche pas les deux checklists (design + conversion).

## Fichiers de référence (à lire au démarrage)
- `references/sectors.md` — **secteur → SEO adapté** (type Schema.org, mots-clés, variante)
- `references/questionnaire.md` — toutes les questions (le **secteur en premier**)
- `references/design-variants.md` — 20 variantes de design **à usage unique** + suivi
- `references/features.md` — fonctionnalités à la carte + garde-fous
- `references/build-guide.md` — architecture, thème, code des composants clés, SEO
- `references/design-excellence.md` — **barre de qualité design « wow »** (obligatoire)
- `references/conversion.md` — **règles de conversion (CRO)** (obligatoire)
- `references/geo.md` — **GEO : être cité par les IA** (llms.txt, robots IA, schéma enrichi) (obligatoire)
- `references/legal.md` — **toutes les obligations légales françaises** (bloquant avant publication)
- `references/deployment.md` — mise en ligne Vercel + Resend + domaine
- `template/` — **squelette de code pré-fait** (composants + CSS + config) à copier pour aller vite

## Déroulé

### 1. Questionnaire (commencer par le SECTEUR)
D'abord demander le **secteur** → lire `sectors.md` pour fixer le **type Schema.org**, les
**mots-clés locaux** (title/H1/description) et la **variante suggérée**. Puis poser le reste
des questions de `questionnaire.md` de façon groupée (AskUserQuestion pour les choix fermés,
conversation pour le texte libre et les fichiers). Enregistrer les images (logo, avant/après)
dans `public/images/`.

### 2. Choix de la variante de design
Lire `design-variants.md`, ne proposer que les variantes `✅ libre`. Suggérer celle qui colle
au secteur, laisser le client trancher. Puis **marquer la variante `🔒 utilisée`** (client + mois)
et committer `design-variants.md`. Si le client impose ses propres couleurs, créer une variante
sur mesure et l'ajouter au tableau comme utilisée.

### 3. Fonctionnalités à la carte
Demander quelles sections activer (`features.md`). Ne générer que celles-ci. Prévoir le
masquage automatique des sections sans données.

### 4. Construction
Suivre `build-guide.md`. **Gagner du temps avec `template/`** : copier les fichiers pré-faits
(composants difficiles + `globals.css` + config), cf. `template/README.md`.
1. Scaffold Next.js (App Router, TS, Tailwind v4). Lire `node_modules/next/dist/docs/` si besoin.
2. Copier `template/globals.css` et **changer les 8 variables de couleur** selon la variante
   (+ paire de polices).
3. Copier les composants de `template/components/` ; remplir `src/lib/site-data.ts` d'après
   `template/lib/site-data.example.ts` avec les infos client (placeholders `[à compléter]` sinon).
4. Adapter `template/lib/structured-data.ts` : **`@type` selon le secteur** (`sectors.md`).
5. Générer les sections/pages restantes (Header, Footer, Hero, sections choisies, layout, SEO).
6. SEO complet : métadonnées par page, canonical, sitemap, robots, OpenGraph, favicon = logo,
   données structurées adaptées au secteur, horaires, noindex pages légales. H1 accueil =
   « [Métier] à [Ville] ».
7. **GEO (obligatoire, cf. `geo.md`)** : copier `template/app/llms.txt/route.ts` (résumé IA) et
   `template/app/robots.ts` (autorise les bots IA) ; utiliser le `structured-data.ts` enrichi
   (foundingDate, GeoCircle, knowsAbout, makesOffer, identifiants légaux) ; renseigner
   `foundingYear` + `serviceRadiusKm` dans `site-data.ts` ; ajouter ≥ 2 FAQ géolocalisées en
   langage naturel.
8. Pages : Accueil, À propos, Services, Contact, Mentions légales, Confidentialité (RGPD), 404.

### 5. Vérification
`npx tsc --noEmit && npm run lint && npm run build`. Vérifier : 1 H1/page, titres uniques,
canonicals corrects, JSON-LD présent, images avec `alt`, formulaire testé. **GEO** : `/llms.txt`
répond, `/robots.txt` autorise les bots IA, JSON-LD contient `foundingDate` + `GeoCircle` +
`knowsAbout` (checklist `geo.md`). Lister les placeholders `[à compléter]` restants pour le client.
**Puis dérouler les 2 checklists** : `design-excellence.md` (barre de qualité) et
`conversion.md` (CRO). Corriger tant que les deux ne sont pas cochées. Idéalement, faire une
capture d'écran (desktop + mobile) pour juger le rendu réel avant de livrer.

### 6. Déploiement
Guider le client avec `deployment.md` (Vercel → variables Resend → redeploy → test → domaine).

## Règles importantes
- **Légal = bloquant** : appliquer intégralement `legal.md` (mentions légales complètes, RGPD,
  cookies, assurance décennale si bâtiment, médiateur conso si particuliers, hébergeur…).
  Ne pas déclarer le site « prêt à publier » tant que les champs légaux sont en `[à compléter]`.
- **Ne jamais inventer** d'infos légales, d'avis, de note Google, de SIRET → placeholder visible.
- **Pas de balisage d'avis** (`aggregateRating`) : avis auto-hébergés interdits par Google.
- **Accessibilité** : toutes les images avec `alt`, animations désactivables (`prefers-reduced-motion`).
- **Une variante = un client.** Toujours mettre à jour le suivi après attribution.
- **Sécurité** : clés API uniquement en variables d'environnement, jamais committées.
- Confirmer avant toute action difficilement réversible (déploiement, achat de domaine).
