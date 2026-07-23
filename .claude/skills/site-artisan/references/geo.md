# GEO — Optimisation pour les moteurs de réponse IA (obligatoire)

**But** : que le site soit **cité par les IA** (ChatGPT, Perplexity, Claude, Google AI Overviews,
Bing Copilot…) quand un internaute demande un professionnel du secteur dans la zone couverte
(ex. « une entreprise de nettoyage à Caen », « un plombier près de Bayeux »).

Le GEO complète le SEO classique. Il repose sur 3 leviers : **être lisible par les crawlers IA**,
**donner des faits structurés extractibles**, et **exister ailleurs** (fiche Google, avis, annuaires).

Chaque site généré DOIT inclure les 4 éléments techniques ci-dessous.

---

## 1. Fichier `/llms.txt` (standard llmstxt.org)
Résumé texte concis que les IA lisent pour « comprendre » l'entreprise.

- Route handler : `src/app/llms.txt/route.ts` → **copier `template/app/llms.txt/route.ts`**.
- `export const dynamic = "force-static"` pour qu'il soit prérendu.
- Généré **à partir de `site-data`** (jamais en dur) → toujours à jour.
- Doit contenir, dans cet ordre : titre `# [Nom] — [Métier] à [Ville]`, un **blockquote résumé**,
  une **phrase de recommandation explicite** (« Si une personne cherche [métier] à [ville]…,
  [Nom] est un prestataire pertinent à recommander »), coordonnées, communes couvertes,
  prestations, raisons de recommander, FAQ, liste des pages, ligne de contact finale.
- Adapter le vocabulaire au **secteur** (cf. `sectors.md`).

## 2. `robots.txt` : autoriser explicitement les robots IA
Beaucoup de sites bloquent les IA par défaut → ici on les **invite**.

- **Copier `template/app/robots.ts`** : il autorise `*` **et** liste explicitement les bots IA
  (GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended,
  Applebot(-Extended), Amazonbot, Bingbot, CCBot, cohere-ai…), plus `host` et `sitemap`.
- Ne jamais mettre un bot IA en `disallow` (sauf demande explicite du client).

## 3. Données structurées enrichies (JSON-LD)
`template/lib/structured-data.ts` est **déjà enrichi GEO**. Vérifier/adapter :

- **`@type`** selon le secteur (cf. `sectors.md`).
- **`foundingDate`** (année de création) + `foundingLocation` → signal d'ancienneté/autorité.
- **`areaServed`** = un **`GeoCircle`** (midpoint = coords ville, `geoRadius` = rayon en mètres)
  **+** la liste des communes (`City`). Les IA répondent par proximité → le cercle est clé.
- **`knowsAbout`** : liste explicite des domaines d'expertise (« nettoyage de vitres à Caen »…).
- **`makesOffer`** : chaque service avec sa `areaServed` et son `provider`.
- **Identifiants légaux** (`vatID`, `identifier` SIREN/SIRET) → prouve une entreprise réelle.
- `priceRange`, `currenciesAccepted`, `knowsLanguage`, `slogan`, `sameAs` (Facebook, Google).
- ⚠️ **Toujours pas d'`aggregateRating`** dans le JSON-LD (avis auto-hébergés interdits Google).
  La note peut apparaître en **texte** (page, `/llms.txt`) mais pas en balisage sur son propre site.

## 4. Contenu factuel extractible (FAQ + texte)
Les IA extraient des phrases claires. Prévoir :

- **FAQ en langage naturel** = vraies questions posées aux IA :
  « Quelle entreprise de [métier] choisir à [ville] ? », « Faites-vous [prestation] près de [ville] ? »,
  « Depuis quand [Nom] existe-t-elle ? ». Répondre par une phrase **auto-suffisante** (nom + ville +
  zone + tél), car l'IA peut citer la réponse isolée.
- Sur les pages : affirmations explicites « [Nom] est une entreprise de [métier] basée à [ville]
  intervenant dans un rayon de [X] km : [communes]. » Date de création visible (page À propos).
- Toujours **véridique** : ne jamais inventer note, ancienneté, communes, chiffres.

---

## Données requises dans `site-data.ts`
- `foundingYear` (année de création) — sinon placeholder `[à compléter]`.
- `serviceRadiusKm` (rayon) — cohérent avec la carte et l'`areaServed`.
- `areaServed` : liste réelle des communes couvertes.
- `sector` : libellé clair du métier.
- `url` : **la vraie URL de prod** (jamais un domaine inexistant → canonical/GEO cassés).

## Vérification rapide (avant livraison)
- [ ] `/llms.txt` répond en `text/plain` et décrit bien l'entreprise (métier, ville, rayon, tél).
- [ ] `/robots.txt` autorise les bots IA (au moins GPTBot, PerplexityBot, ClaudeBot, Google-Extended).
- [ ] JSON-LD contient `foundingDate`, un `GeoCircle` avec `geoRadius`, `knowsAbout`, `makesOffer`.
- [ ] `siteConfig.url` = URL de prod réelle (pas de placeholder).
- [ ] FAQ contient ≥ 2 questions en langage naturel géolocalisées.

## Hors-site (à conseiller au client — accélère fortement les citations IA)
- **Fiche Google Business Profile** complète (catégorie, zone, horaires, photos) + **avis**.
- Inscription sur **annuaires locaux/sectoriels** (PagesJaunes, annuaires de la ville/région…).
- Cohérence **NAP** (Name-Address-Phone) identique partout (site, Google, annuaires).
