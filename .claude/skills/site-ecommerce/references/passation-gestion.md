# Passation à l'outil de gestion (Cirrion)

La boutique **ne gère pas** la facturation ni la conformité. Elle capte la vente et prépare un
dossier complet ; l'outil de gestion du client prend le relais.

```
BOUTIQUE (acquisition)                  CIRRION (gestion)
──────────────────────                  ─────────────────
Catalogue, fiches techniques            Devis et facture
Demande d'achat                         TVA
Validation par le vendeur               Plateforme agréée / conformité
Dossier complet prêt à envoyer   ───▶   Comptabilité
Suivi de livraison côté client          Archivage légal
```

**Une donnée, une source de vérité.** La boutique ne stocke jamais un numéro de facture
qu'elle aurait inventé, ni un montant de TVA qu'elle aurait recalculé à côté de Cirrion.
Elle garde la référence de ce que Cirrion a émis.

## Ce que la boutique doit collecter

Le dossier doit partir **complet du premier coup** : si le vendeur doit rappeler le client
pour un SIREN manquant, la passation ne sert à rien.

**Client** — civilité, nom, prénom · raison sociale · **SIREN (9 chiffres)** ·
email · téléphone · adresse de facturation · **adresse de livraison** (obligatoire sur la
facture si différente)

**Commande** — pour chaque ligne : désignation, référence, quantité, prix unitaire HT,
taux de TVA · **éco-participation DEEE** en ligne séparée · frais de port HT ·
lignes ajoutées par le vendeur (mise en service, formation) · total HT, TVA, TTC

**Contexte** — référence interne de la demande · **catégorie de l'opération** (livraison de
biens / prestation de services / mixte — mention obligatoire) · délai annoncé ·
conditions de règlement · note interne

Ces champs ne sont pas décoratifs : ce sont les **mentions obligatoires** de la facture
(cf. `legal-ecommerce.md`). Les collecter au formulaire, c'est éviter un aller-retour par vente.

## L'espace vendeur et le bouton d'envoi

La commande arrive dans l'espace du vendeur, et **un seul bouton l'envoie à Cirrion**.

```ts
interface GestionAdapter {
  prepare(quote: Quote): DossierGestion;                             // mise en forme
  send(dossier: DossierGestion): Promise<{ externalRef: string }>;   // appel API
}
```

Garder l'adaptateur même avec une API maîtrisée : il isole le format d'échange du reste du
code, et c'est ce qui permet de faire évoluer Cirrion sans toucher la boutique.

Statut `passation` : `a-preparer` → `envoye` → `accepte` → `facture-emise`.

**L'appel doit être rejouable.** Si Cirrion ne répond pas, la commande ne doit ni être perdue
ni partir en double : identifiant d'idempotence côté Cirrion, et un bouton « renvoyer » visible
dans l'espace vendeur plutôt qu'un échec silencieux.

### Le délai d'acceptation
Quand le PDF annonce un **temps d'acceptation** au client, le compteur part au moment de la
commande, pas au moment où le vendeur se connecte. Deux conséquences :

1. **La commande part vers Cirrion dès la validation du client**, en statut « en attente
   d'acceptation » — le dossier existe côté Cirrion avant toute intervention humaine.
2. Le clic du vendeur **fait passer le dossier en « accepté »**. Le temps d'acceptation est
   l'écart entre les deux horodatages, et il est mesuré, pas déclaré.

Afficher le délai restant dans l'espace vendeur : s'il s'engage sous 24 h, il doit voir à
quelle heure l'échéance tombe.

### Où vit cet espace
Le vendeur a besoin d'un accès **public avec mot de passe** : il ne sera jamais sur un tailnet.

- **Un seul Payload sur Vercel, avec des rôles** est la solution la plus simple : rôle
  `admin` (catalogue + commandes) et rôle `vendeur` (commandes uniquement). C'est de la
  configuration, pas du développement.
- Monter un Payload privé derrière Tailscale **et** un second espace vendeur public avec sa
  propre authentification, c'est deux bases de code et deux surfaces d'attaque pour protéger
  un catalogue qui n'est pas secret. À éviter sauf raison précise.

## Le suivi de livraison côté client

Le client doit voir où en est sa commande sans avoir à téléphoner.

**Un lien de suivi à jeton**, pas un espace client :
`/suivi/[token]` — token aléatoire, long, non devinable, envoyé par email.
Même raison que pour la facture : en B2B, le lien doit pouvoir être **transféré** à un
collègue ou au comptable, qui n'aura jamais de mot de passe.

Sur la page : les étapes, la date de chaque changement, le délai annoncé, le numéro de suivi
du transporteur, le contact du vendeur, et un **bouton « Télécharger le récapitulatif PDF »**
(utile en interne pour justifier un achat ou une réception).

Étapes : `demande reçue` → `devis envoyé` → `commande confirmée` → `en préparation` →
`expédiée` → `livrée`

**Un email à chaque changement d'étape**, avec le lien de suivi. Depuis le domaine du client
via Resend — jamais depuis un Gmail personnel : délivrabilité et crédibilité.
Ne pas notifier les changements internes (note ajoutée, prix ajusté) : seulement ce qui
intéresse l'acheteur.

> 🔒 Le jeton donne accès aux informations de la commande : le générer avec un générateur
> cryptographique, pas un identifiant incrémental ni un hash du numéro de commande.

## À ne pas faire

- ❌ Recoder la facturation dans Payload « en attendant »
- ❌ Générer un numéro de facture côté boutique — il appartient à Cirrion
- ❌ Recalculer la TVA des deux côtés : les montants divergeront
- ❌ Un espace client avec mot de passe pour voir un suivi de livraison
- ❌ Faire partir le compteur du délai d'acceptation au clic du vendeur plutôt qu'à la commande
- ❌ Un envoi vers Cirrion qui échoue en silence, sans trace ni bouton pour rejouer
