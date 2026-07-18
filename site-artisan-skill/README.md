# site-artisan-template — Usine à sites d'artisans

Skill Claude Code qui génère un **site vitrine professionnel complet** (Next.js) pour un
artisan, à partir d'un questionnaire unique. Conçu à partir de l'implémentation de référence
« Propre Éclat ».

## Ce que ça produit
Un site prêt à déployer : hero animé, services, galerie avant/après glissable, avis Google,
carte de zone (OpenStreetMap), FAQ, formulaire de contact (email via Resend), SEO complet
(données structurées, sitemap, robots, OpenGraph, horaires), pages légales + RGPD, footer
riche, barre d'action mobile, animations, responsive.

## Comment l'utiliser
1. Ouvrir une session Claude Code sur ce dépôt (ou copier le dossier `.claude/skills/site-artisan`
   dans le projet du nouveau client).
2. Lancer **`/site-artisan`**.
3. Répondre au questionnaire. Le skill choisit une **variante de design libre**, active les
   fonctionnalités demandées, construit le site et guide le déploiement.

## Structure
```
.claude/skills/site-artisan/
  SKILL.md                    # orchestration (point d'entrée /site-artisan)
  references/
    questionnaire.md          # toutes les questions
    design-variants.md        # 12 variantes à usage unique + suivi
    features.md               # fonctionnalités à la carte
    build-guide.md            # architecture, thème, composants clés, SEO
    deployment.md             # Vercel + Resend + domaine
```

## Variantes de design
12 palettes/typographies prêtes, **une par client** (suivi dans `design-variants.md`).
Quand une variante est attribuée, elle passe en `🔒 utilisée` → jamais deux artisans identiques.

## Bonnes pratiques intégrées
- Jamais d'infos inventées (légal, avis, note) → placeholders visibles
- Pas de balisage d'avis auto-hébergés (règle Google)
- Accessibilité (alt, `prefers-reduced-motion`)
- Clés API en variables d'environnement uniquement
