---
name: site-ecommerce
user-invocable: true
description: >-
  Construit une boutique en ligne B2B de matériel et d'équipement professionnel
  (machines de nettoyage, outillage, matériel technique). Utiliser quand l'utilisateur veut
  créer un site e-commerce vendant des machines ou du matériel à des professionnels :
  balayeuses, autolaveuses, aspirateurs industriels, monobrosses, nettoyeurs haute pression,
  consommables et pièces détachées. Pose le questionnaire, met en place l'architecture
  (Next.js + Payload + Neon + Stripe + Cloudflare R2 sur Vercel), construit le catalogue
  technique, le parcours hybride devis/achat, le légal e-commerce et guide le déploiement.
---

# Boutique B2B de matériel professionnel

Objectif : produire une boutique en ligne qui **vend réellement** du matériel professionnel.
Ce n'est pas un site vitrine (→ `/site-artisan`) ni une boutique grand public.

## ⚠️ La règle qui conditionne tout : le parcours hybride

Une autolaveuse coûte 3 000 à 15 000 €. **Aucun acheteur professionnel ne paie ça par carte
sans échange préalable.** Imposer un tunnel « panier → CB » fait fuir la majorité des prospects.

| Gamme | Parcours | Pourquoi |
|---|---|---|
| **Machines** (> 1 000 €) | Fiche technique + **« Demander un devis »** · paiement direct en option | L'acheteur veut un conseil, une facture, parfois du leasing |
| **Consommables** (brosses, disques, raclettes, filtres, détergents) | **Panier → Stripe Checkout** | Achat de réassort, décision rapide, faible montant |

Le **devis est le produit d'appel**, pas le panier. Toute la page machine doit converger vers
lui. Ne jamais livrer une boutique où une machine à 8 000 € n'a qu'un bouton « Ajouter au panier ».

## Fichiers de référence (à lire au démarrage)
- `references/questionnaire.md` — toutes les questions à poser au client
- `references/architecture.md` — la stack, les décisions techniques, ce qui marche et ce qui ne marche pas
- `references/catalogue.md` — modèle de données produit (machines techniques, variantes, consommables)
- `references/conversion-b2b.md` — parcours devis, tunnel d'achat, éléments de réassurance B2B
- `references/legal-ecommerce.md` — **CGV, rétractation, DEEE, mentions B2B** (bloquant avant publication)
- `references/seo-produit.md` — SEO et GEO des fiches produit (Schema Product, guides d'achat)
- `references/prompt-demarrage.md` — le prompt à coller pour lancer un nouveau projet

## ⚠️ Avant tout : un dépôt neuf

Une boutique ne se construit **jamais** dans le dépôt d'un site vitrine existant. Créer un
dépôt privé dédié, puis travailler dedans. Vérifier qu'aucun `.env` n'est suivi par git.

## Déroulé

### 1. Questionnaire
Dérouler `questionnaire.md`. Point bloquant à clarifier d'emblée : **vend-il à des
professionnels, à des particuliers, ou aux deux ?** La réponse change le droit applicable
(rétractation, prix HT/TTC, garanties) et toute la présentation des prix.

### 2. Architecture
Suivre `architecture.md`. Pile par défaut :
- **Next.js sur Vercel** — vitrine, catalogue, fiches produit
- **Payload CMS** — catalogue + back-office + rôles (admin / gestionnaire)
- **Neon (Postgres)** — base partagée, joignable par Vercel *et* par l'admin
- **Stripe** — Checkout hébergé pour les consommables, pas de PCI à porter
- **Cloudflare R2** — images et fiches techniques PDF (pas de frais de sortie)

⚠️ **Vercel ne peut pas être placé derrière Tailscale** (fonctions éphémères, aucun démon).
Pour un admin réellement privé : héberger Payload sur une machine du tailnet, la base restant
sur Neon pour que Vercel puisse lire. Si le **client** doit gérer ses produits lui-même,
abandonner Tailscale → authentification classique avec rôles.

### 3. Catalogue
Suivre `catalogue.md`. Une machine n'est pas un produit e-commerce ordinaire : les
**caractéristiques techniques sont l'argument de vente** (largeur de travail, rendement m²/h,
autonomie, capacité des réservoirs, alimentation). Elles doivent être structurées, comparables
et présentes dans les données structurées.

### 4. Construction
1. Scaffold Next.js (App Router, TS, Tailwind). Lire `node_modules/next/dist/docs/` avant de coder.
2. Payload : collections `products`, `categories`, `brands`, `quotes`, `orders`, `users`.
3. Pages : accueil, catégories, **fiche produit**, comparateur, demande de devis, panier,
   checkout, compte, légales.
4. Stripe : Checkout pour les consommables + webhook de confirmation de commande.
5. R2 : adaptateur S3 pour images et PDF de fiches techniques.
6. SEO/GEO complet (`seo-produit.md`).

### 5. Vérification
`npx tsc --noEmit && npm run build`. Tester : un devis part bien en email, un achat de
consommable passe bout en bout en mode test Stripe, les PDF se téléchargent.
Puis dérouler les checklists de `/controle-final` **plus** celles de `legal-ecommerce.md`.

### 6. Déploiement
Vercel + variables d'environnement (Stripe, Neon, R2, email). Tester un **vrai paiement**
en mode test puis en réel avant d'annoncer la mise en ligne.

## Règles importantes
- **Le légal e-commerce est bloquant** : CGV, rétractation (si B2C), **éco-participation DEEE**
  pour tout matériel électrique, pénalités de retard (obligatoire en B2B). Cf. `legal-ecommerce.md`.
- **Prix HT en B2B**, TTC en B2C. Si les deux publics : afficher les deux.
- **Ne jamais inventer** une caractéristique technique, un délai de livraison, une garantie
  ou une certification → demander au client, placeholder `[à compléter]` sinon.
- **Pas de paiement sans CGV acceptées** (case à cocher obligatoire avant commande).
- **Sécurité** : clés Stripe et identifiants Neon/R2 uniquement en variables d'environnement.
- **Stripe Checkout hébergé** par défaut : évite toute obligation de conformité PCI.
- Confirmer avant toute action irréversible (passage en mode live Stripe, mise en ligne).
