# Architecture — ce qui marche, et ce qui ne marche pas

## La pile par défaut

```
┌─────────────────────────────┐
│  Vercel (public)            │   Next.js : vitrine, catalogue, fiches produit,
│  Boutique Next.js           │   panier, tunnel de commande
└──────────┬──────────────────┘
           │ lit / écrit
           ▼
┌─────────────────────────────┐
│  Neon (Postgres cloud)      │   Produits, stock, commandes, devis, utilisateurs
└──────────▲──────────────────┘
           │ lit / écrit
┌──────────┴──────────────────┐
│  Payload CMS (admin)        │   Back-office : catalogue, commandes, rôles
│  Vercel OU machine privée   │
└─────────────────────────────┘

Stripe  → Checkout hébergé + webhooks (paiement, commandes)
R2      → images produit, fiches techniques PDF
```

| Brique | Rôle | Pourquoi ce choix |
|---|---|---|
| **Next.js / Vercel** | Boutique publique | ISR : pages produit statiques et rapides, régénérées à chaque modif |
| **Payload CMS** | Catalogue + back-office + rôles | Admin complet livré, schéma typé, adaptateur S3 natif |
| **Neon** | Postgres managé | Joignable par Vercel **et** par un admin privé — c'est la clé de voûte |
| **Stripe Checkout** | Paiement | Page hébergée par Stripe → **aucune obligation PCI** à porter |
| **Cloudflare R2** | Images + PDF | Pas de frais de sortie, compatible S3 |

## ⚠️ Vercel et Tailscale ne se combinent pas

**Tailscale ne peut pas protéger une route Vercel.** Les fonctions Vercel sont éphémères et
n'ont aucun démon persistant : elles ne peuvent pas rejoindre un tailnet. Et filtrer par IP est
impossible — Vercel voit l'IP publique du visiteur, jamais son adresse `100.x.x.x`.

Ce que Vercel propose réellement :
- **Deployment Protection par mot de passe** — protège *tout* le déploiement, pas une page
- **Vercel Authentication** — réservé aux membres de l'équipe Vercel
- **Trusted IPs** — plan **Enterprise** uniquement

### Les deux options viables

**Option A — Admin sur Vercel, authentification classique** ⭐ *si le client gère son catalogue*
Payload tourne dans l'app Next.js, admin sur `/admin`, comptes + rôles + 2FA.
Le client se connecte de n'importe où avec un email et un mot de passe.
→ Simple, rien à maintenir, aucune friction pour le client.

**Option B — Admin auto-hébergé derrière Tailscale** *si seul l'exploitant gère le catalogue*
Payload sur un VPS ou une machine du tailnet, base **toujours sur Neon** pour que Vercel lise.
→ L'interface est réellement privée, mais la base reste joignable publiquement (identifiants +
SSL) : Tailscale protège l'admin, **pas les données**.
→ Coût : un serveur à maintenir, des mises à jour, une machine allumée.

> **La question qui tranche : qui ouvre l'admin au quotidien ?**
> Le client → option A, sans discussion. Lui seul → option B défendable.
> Imposer Tailscale à un client non technique garantit des appels au support.

### Si la base doit rester 100 % privée
Payload publie le catalogue (JSON + images) vers **R2**, et Vercel lit R2.
Base jamais exposée, mais il faut une étape de publication à chaque modification.
À ne proposer que si l'exigence de confidentialité est réelle.

## Variables d'environnement

```
DATABASE_URL=                  # Neon (avec sslmode=require)
PAYLOAD_SECRET=                # secret de signature Payload
NEXT_PUBLIC_SITE_URL=

STRIPE_SECRET_KEY=             # sk_test_… puis sk_live_…
STRIPE_WEBHOOK_SECRET=         # whsec_…
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_PUBLIC_URL=                 # domaine public du bucket (images)

RESEND_API_KEY=                # emails : devis, confirmations de commande
CONTACT_TO_EMAIL=
```

> 🔒 **Jamais dans le code, jamais dans le dépôt.** Uniquement dans Vercel → Settings →
> Environment Variables, et en `.env.local` pour le développement.

## Points d'attention techniques

- **Images R2 + `next/image`** : ajouter le domaine R2 dans `images.remotePatterns` de
  `next.config.ts`, sinon les images ne s'affichent pas.
- **Webhook Stripe** : la route doit lire le **corps brut** de la requête pour vérifier la
  signature. C'est l'erreur n°1 — un webhook mal configuré laisse des commandes non confirmées.
- **ISR** : régénérer les pages produit sur modification Payload (hook `afterChange` →
  `revalidatePath`), sinon le catalogue affiche des prix périmés.
- **Stock** : décrémenter **dans le webhook Stripe** (paiement confirmé), jamais à la mise au
  panier — sinon un panier abandonné bloque du stock.
- **Prix** : stocker en **centimes, en entier**. Jamais de flottant sur de la monnaie.
- **Lire `node_modules/next/dist/docs/`** avant de coder : cette version de Next diffère
  des habitudes.
