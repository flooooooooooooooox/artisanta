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

## Fichiers de référence (à lire au démarrage)
- `references/questionnaire.md` — toutes les questions à poser
- `references/design-variants.md` — 12 variantes de design **à usage unique** + suivi
- `references/features.md` — fonctionnalités à la carte + garde-fous
- `references/build-guide.md` — architecture, thème, code des composants clés, SEO
- `references/deployment.md` — mise en ligne Vercel + Resend + domaine

## Déroulé

### 1. Questionnaire
Poser toutes les questions de `questionnaire.md` de façon groupée (AskUserQuestion pour les
choix fermés, conversation pour le texte libre et les fichiers logo/photos). Récupérer les
images fournies (logo, avant/après) et les enregistrer dans `public/images/`.

### 2. Choix de la variante de design
Lire `design-variants.md`, ne proposer que les variantes `✅ libre`. Suggérer celle qui colle
au secteur, laisser le client trancher. Puis **marquer la variante `🔒 utilisée`** (client + mois)
et committer `design-variants.md`. Si le client impose ses propres couleurs, créer une variante
sur mesure et l'ajouter au tableau comme utilisée.

### 3. Fonctionnalités à la carte
Demander quelles sections activer (`features.md`). Ne générer que celles-ci. Prévoir le
masquage automatique des sections sans données.

### 4. Construction
Suivre `build-guide.md` pas à pas :
1. Scaffold Next.js (App Router, TS, Tailwind v4). Lire `node_modules/next/dist/docs/` si besoin.
2. Appliquer le **thème de la variante** (variables CSS + paire de polices).
3. Remplir `src/lib/site-data.ts` avec les infos client (placeholders `[à compléter]` sinon).
4. Générer les composants/sections choisis (réutiliser les patterns de référence).
5. SEO complet : métadonnées par page, canonical, sitemap, robots, OpenGraph, favicon = logo,
   données structurées (type Schema.org adapté au secteur), horaires, noindex pages légales.
6. Pages : Accueil, À propos, Services, Contact, Mentions légales, Confidentialité (RGPD), 404.

### 5. Vérification
`npx tsc --noEmit && npm run lint && npm run build`. Vérifier : 1 H1/page, titres uniques,
canonicals corrects, JSON-LD présent, images avec `alt`, formulaire testé. Lister les
placeholders `[à compléter]` restants pour le client.

### 6. Déploiement
Guider le client avec `deployment.md` (Vercel → variables Resend → redeploy → test → domaine).

## Règles importantes
- **Ne jamais inventer** d'infos légales, d'avis, de note Google, de SIRET → placeholder visible.
- **Pas de balisage d'avis** (`aggregateRating`) : avis auto-hébergés interdits par Google.
- **Accessibilité** : toutes les images avec `alt`, animations désactivables (`prefers-reduced-motion`).
- **Une variante = un client.** Toujours mettre à jour le suivi après attribution.
- **Sécurité** : clés API uniquement en variables d'environnement, jamais committées.
- Confirmer avant toute action difficilement réversible (déploiement, achat de domaine).
