# SEO & GEO — fiches produit et guides d'achat

Sur ce marché, la concurrence SEO est nationale et lourde (Nilfisk, Kärcher, Tennant, les
gros distributeurs). Se battre sur « autolaveuse » est perdu d'avance. On gagne sur la
**longue traîne technique** et sur les **guides d'achat**.

## La stratégie de mots-clés

| Niveau | Exemple | Verdict |
|---|---|---|
| Générique | « autolaveuse » | ❌ inatteignable |
| Catégorie | « autolaveuse autoportée » | ⚠️ difficile mais travaillable |
| **Longue traîne technique** | « autolaveuse autoportée 1000 m²/h batterie » | ✅ la cible |
| **Intention d'achat** | « quelle autolaveuse pour 2000 m² » | ✅ fort potentiel |
| **Référence précise** | « LAITE T600 prix » | ✅ facile, très qualifié |
| **Usage** | « autolaveuse pour supermarché / parking / atelier » | ✅ excellent |
| **Local** | « matériel de nettoyage professionnel [ville] » | ✅ si zone définie |

Les requêtes par **usage** et par **surface** sont les plus rentables : elles attrapent
l'acheteur au moment où il ne sait pas encore quel modèle choisir.

## Architecture éditoriale

```
/                                    identité + gammes
/[categorie]/                        texte réel (800+ mots), pas 2 lignes
/[categorie]/[produit]/              la fiche : le vrai actif SEO
/guides/quelle-autolaveuse-choisir/  ← capte l'intention d'achat
/guides/autolaveuse-par-surface/
/guides/entretien-autolaveuse/
/marques/[marque]/
```

Une **page catégorie sans texte est une page morte**. Chaque catégorie doit expliquer à quoi
sert la famille de machines, pour quels usages, et comment choisir.

## Données structurées

Sur chaque fiche produit :

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Autolaveuse autoportée T600",
  "sku": "T600",
  "mpn": "...",
  "brand": { "@type": "Brand", "name": "LAITE" },
  "image": ["..."],
  "description": "...",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Largeur de travail", "value": "600", "unitCode": "MMT" },
    { "@type": "PropertyValue", "name": "Rendement", "value": "3000", "unitText": "m²/h" }
  ],
  "offers": {
    "@type": "Offer",
    "price": "4990.00",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": { "@id": "https://.../#organization" },
    "shippingDetails": { "@type": "OfferShippingDetails" },
    "hasMerchantReturnPolicy": { "@type": "MerchantReturnPolicy" }
  }
}
```

Ailleurs : `Organization` (identité), `BreadcrumbList` (fil d'Ariane), `FAQPage` (guides),
`ItemList` (pages catégorie).

> ❌ **Ne jamais inventer d'`aggregateRating`.** Google interdit le balisage d'avis
> auto-déclarés sur son propre site ; c'est une cause de pénalité manuelle.
> Les avis se balisent seulement s'ils sont réellement collectés et affichés.

## GEO — être cité par les IA

Les acheteurs pro demandent de plus en plus « quelle autolaveuse pour 1500 m² ? » à ChatGPT,
Perplexity ou Gemini. Pour être repris :

- **Répondre à la question dès le premier paragraphe**, en une phrase autonome et citable.
  « Pour 1500 m², une autolaveuse accompagnée de 50 cm suffit si le nettoyage se fait en
  une fois ; au-delà de 2500 m², une autoportée devient rentable. »
- **Tableaux de caractéristiques** en HTML — les LLM les lisent très bien
- **Chiffres et unités explicites**, pas de « grande capacité »
- **FAQ** par page produit et par guide
- **`/llms.txt`** : identité, gammes, zone de livraison, contact, pages clés
- **Autoriser les crawlers IA** dans `robots.ts` (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended) — sauf demande contraire du client
- **Fraîcheur** : `dateModified` sur les pages produit

## Technique

- **ISR** sur les fiches produit → statiques, rapides, régénérées à chaque modif Payload
- `generateMetadata` par produit : titre `<Produit> — <Marque> | <Boutique>`,
  meta description reprenant les 2-3 caractéristiques décisives
- **Images** : AVIF/WebP via `next/image`, `alt` descriptif (« autolaveuse autoportée T600,
  vue de trois-quarts »), pas « image1.jpg »
- **Sitemap** incluant produits, catégories, marques et guides ; régénéré à la publication
- **URL canonique** par produit — attention aux variantes et aux filtres qui dupliquent
- **Filtres en paramètres** (`?largeur=`) → `noindex` ou canonical vers la catégorie, sinon
  duplication massive
- **Produit retiré du catalogue** : garder l'URL avec une mention « plus disponible » et des
  alternatives, ou rediriger en 301 vers la catégorie. Jamais de 404 sèche sur un produit
  référencé.
- **Core Web Vitals** : les fiches produit sont chargées en images → placeholders flous,
  `priority` sur la première image seulement

## Le contenu qui fait la différence

1. **Guides d'achat par surface** — le meilleur rapport effort/trafic
2. **Comparatifs de gammes** (accompagnée vs autoportée, batterie vs câble)
3. **Pages par usage** (supermarché, entrepôt, parking, atelier, collectivité)
4. **Entretien et consommables** — trafic récurrent, et vente additionnelle directe
5. **Pages de référence précise** (« LAITE T600 : caractéristiques et prix ») — faciles à
   positionner, très qualifiées
