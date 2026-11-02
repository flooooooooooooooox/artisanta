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

Un **seuil configurable** (par défaut **1 000 € HT**) décide du parcours :

| Montant | Parcours | Pourquoi |
|---|---|---|
| **Sous le seuil** (consommables, pièces, petits accessoires) | **Panier → Stripe Checkout**, paiement immédiat | Réassort, décision rapide, faible montant |
| **Au-dessus du seuil** (machines) | **Demande d'achat → validation dans l'admin → dossier envoyé à Cirrion (devis + facture) → encaissement → suivi de livraison** | L'acheteur veut un prix ferme, un délai, une facture à faire payer par sa compta |

**Aucun paiement par carte au-dessus du seuil.** Le bouton ne dit pas « Commander » mais
**« Confirmer ma demande d'achat »**, et la page le précise : ce n'est pas une commande, c'est
une demande qui sera validée et chiffrée. Le parcours complet est détaillé dans
`conversion-b2b.md`.

## Fichiers de référence (à lire au démarrage)
- `references/questionnaire.md` — toutes les questions à poser au client
- `references/architecture.md` — la stack, les décisions techniques, ce qui marche et ce qui ne marche pas
- `references/catalogue.md` — modèle de données produit (machines techniques, variantes, consommables)
- `references/conversion-b2b.md` — parcours devis, tunnel d'achat, éléments de réassurance B2B
- `references/passation-gestion.md` — passation à l'outil de gestion (Cirrion) et suivi de livraison
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
3. Pages : accueil, catégories, **fiche produit**, comparateur, demande d'achat, panier,
   checkout, **suivi de livraison à jeton** (`/suivi/[token]`), légales.
4. Stripe : **Checkout** sous le seuil, **lien de paiement / Invoicing** au-dessus, et un
   webhook qui traite `checkout.session.completed` **et** `invoice.paid`, de façon idempotente.
   Seuil vérifié côté serveur. Dans l'admin : écran de validation d'une demande d'achat
   (prix ferme, délai, frais de port) avec un bouton **« Préparer pour Cirrion »**.
5. Suivi de livraison : page à jeton + email à chaque changement d'étape + récapitulatif PDF.
6. R2 : adaptateur S3 pour images et PDF de fiches techniques.
7. SEO/GEO complet (`seo-produit.md`).

### 5. Vérification
`npx tsc --noEmit && npm run build`. Tester **les deux parcours bout en bout en mode test
Stripe** : un achat sous le seuil (panier → CB → commande enregistrée) **et** un achat
au-dessus (demande → email reçu → validation dans l'admin → facture reçue → payée →
`invoice.paid` traité). Vérifier aussi qu'un panier dépassant le seuil ne peut pas créer
une session Checkout, et que les PDF de fiches techniques se téléchargent.
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
- **Aucun devis envoyé sans validation humaine** dans l'admin. C'est tout l'intérêt du
  parcours au-dessus du seuil : le vendeur fixe le prix ferme avant que quoi que ce soit parte.
- **La boutique n'émet pas la facture légale.** En France, une facture entre professionnels
  doit passer par une **plateforme agréée** en format structuré, et **Stripe n'en est pas une**.
  La boutique capte la vente et prépare un dossier complet ; **l'outil de gestion du client
  (Cirrion) émet le devis, la facture et porte la conformité**. Collecter le **SIREN**,
  l'adresse de livraison et la catégorie d'opération dès la demande, pour que le dossier
  parte complet du premier coup. Cf. `passation-gestion.md` et `legal-ecommerce.md`.
- **Une donnée, une source de vérité** : jamais de numéro de facture ni de TVA recalculés
  côté boutique à côté de l'outil de gestion.
- **Ne jamais écrire « Commander »** sur une demande d'achat : juridiquement, une demande
  confirmée sans réserve peut s'analyser en commande ferme.
- **Emails transactionnels depuis le domaine du client** (Resend ou Stripe), jamais depuis un
  Gmail personnel : délivrabilité et crédibilité.
- **Sécurité** : clés Stripe et identifiants Neon/R2 uniquement en variables d'environnement.
- **Stripe Checkout hébergé** par défaut : évite toute obligation de conformité PCI.
- Confirmer avant toute action irréversible (passage en mode live Stripe, mise en ligne).
