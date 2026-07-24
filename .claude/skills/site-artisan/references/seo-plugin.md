# Companion SEO : plugin `claude-seo` (optionnel mais recommandé)

Plugin tiers **open-source (MIT)** qui automatise l'audit SEO : 25 sub-skills + 18 agents,
audit local et **gratuit** (0 clé API requise pour le cœur). Complète parfaitement `site-artisan`
(construction) et `controle-final` (validation).

- Dépôt : `AgriciDaniel/claude-seo` · commandes principales sous `/seo …`
- Sécurité : un seul hook `PostToolUse` (Edit|Write) qui lance `validate-schema.py` sur le
  fichier édité (valide le Schema.org). Bénin. Les extensions payantes (DataForSEO, Ahrefs…)
  sont **optionnelles**.

## Installation (chez l'utilisateur, PAS dans un conteneur distant éphémère)
```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo
```
Pré-requis : **Python 3.10+** (et Playwright/Chromium pour captures + Core Web Vitals).

## Quand l'utiliser dans le workflow artisan
| Étape | Commande claude-seo | But |
|---|---|---|
| Avant livraison | `/seo audit <url>` | Audit complet + score santé (0-100) |
| SEO local | `/seo local` | GBP, cohérence NAP, avis, schéma local |
| Google Maps | `/seo maps` | Optimisation fiche Google Business |
| GEO / IA | `/seo geo` | Accès crawlers IA, llms.txt, citabilité |
| Schéma | `/seo schema` | Détection + validation des données structurées |
| Technique | `/seo technical` | robots, sitemap, canonicals, Core Web Vitals |

## Règle d'intégration
- **Si `claude-seo` est installé** : lancer `/seo audit` (+ `/seo local`, `/seo maps` pour un
  artisan) et **corriger les findings Critical/High** avant livraison.
- **Sinon** : appliquer manuellement les checklists SEO (`build-guide.md`) et GEO (`geo.md`) —
  elles couvrent l'essentiel (titres, canonicals, schéma, llms.txt, robots IA).
- Ne jamais faire dépendre la livraison de ce plugin (il reste un **bonus**, pas un prérequis).

## Leviers que le plugin met surtout en avant pour un artisan local
1. **Profondeur de contenu** : une page par prestation × ville (SEO programmatique/local).
2. **Google Business Profile + avis** (hors-site) : levier local n°1.
3. Core Web Vitals réels (Lighthouse/CrUX) une fois en ligne.
