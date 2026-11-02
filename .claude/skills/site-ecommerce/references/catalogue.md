# Catalogue — modèle de données

Une machine n'est pas un produit e-commerce ordinaire. **Les caractéristiques techniques sont
l'argument de vente** : un acheteur professionnel compare des largeurs de travail et des
rendements, pas des couleurs.

## Collection `products`

```ts
{
  // Identité
  title: string            // "Autolaveuse autoportée T600"
  slug: string             // "autolaveuse-autoportee-t600"
  reference: string        // référence fabricant
  brand: relation          // → brands
  category: relation       // → categories
  shortDescription: string // 1-2 phrases, reprises en meta description
  description: richText    // argumentaire complet

  // Commercial
  kind: "machine" | "consommable" | "piece"   // ⚠️ pilote le parcours (devis vs panier)
  priceHT: number          // en centimes, entier
  vatRate: number          // 20 par défaut
  priceOnRequest: boolean  // true → masque le prix, force le devis
  ecoTax: number           // éco-participation DEEE, en centimes (obligatoire si électrique)

  // Disponibilité
  stock: number
  stockPolicy: "stock" | "sur-commande" | "delai-fabricant"
  leadTimeDays: number     // délai réel annoncé

  // Caractéristiques techniques (le cœur)
  specs: [
    { label: string, value: string, unit: string, comparable: boolean }
  ]

  // Médias
  images: [upload]         // → R2
  datasheet: upload        // fiche technique PDF
  manual: upload           // notice

  // Après-vente
  warrantyMonths: number
  compatibleParts: [relation]   // pièces détachées compatibles

  // SEO
  metaTitle: string
  metaDescription: string
}
```

## Caractéristiques par famille

Les rendre **structurées et comparables** (pas un bloc de texte) : c'est ce qui alimente le
comparateur, les filtres et les données structurées.

**Autolaveuses**
largeur de travail (mm) · largeur d'aspiration (mm) · rendement théorique (m²/h) ·
réservoir eau propre (L) · réservoir eau sale (L) · autonomie (h) · alimentation
(batterie / câble) · tension (V) · puissance (W) · poids (kg) · niveau sonore (dB)

**Balayeuses**
largeur de balayage (mm) · nombre de brosses latérales · capacité du bac (L) ·
rendement (m²/h) · manuelle / thermique / électrique · poids (kg)

**Aspirateurs industriels**
puissance (W) · dépression (kPa) · débit d'air (m³/h) · capacité cuve (L) ·
nombre de moteurs · eau et poussière ? · classe de filtration (L / M / H) · niveau sonore (dB)

**Monobrosses / nettoyeurs haute pression**
diamètre (mm) · vitesse (tr/min) · pression (bar) · débit (L/h) · eau chaude ? · puissance (W)

> `comparable: true` sur les caractéristiques qui servent au comparateur et aux filtres
> (largeur, rendement, autonomie, capacité). Les autres restent en affichage simple.

## Autres collections

**`categories`** — nom, slug, description (texte SEO réel, pas deux lignes), image, parent
**`brands`** — nom, slug, logo, description, lien fabricant
**`quotes`** — demandes de devis : contact, société, SIRET, produits + quantités, message,
statut (`nouveau` / `traité` / `gagné` / `perdu`), date
**`orders`** — commandes Stripe : lignes, montants HT/TVA/TTC, éco-participation, client,
adresse de livraison, statut, `stripeSessionId`
**`users`** — rôles : `admin` (tout) · `gestionnaire` (catalogue + commandes) · `client`

## Règles

- **Prix en centimes, en entier.** Jamais de flottant sur de la monnaie.
- **`kind` pilote le parcours** : `machine` → devis mis en avant ; `consommable` / `piece` →
  panier direct. C'est le champ le plus structurant du modèle.
- **Ne jamais inventer une caractéristique.** Si la fiche fabricant ne la donne pas, ne pas
  l'afficher — un acheteur pro détecte immédiatement une valeur fantaisiste et perd confiance.
- **L'éco-participation DEEE s'affiche séparément** du prix (obligation légale).
- **Les délais doivent être réels.** Annoncer « sous 48 h » une machine à 6 semaines de délai
  fabricant est le meilleur moyen de perdre un client et de s'exposer.
- Un produit sans image ni fiche technique ne doit pas être publié : en B2B, l'absence de
  documentation technique tue la vente.
