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

## Le bouton « Préparer pour Cirrion »

Dans l'admin, sur une demande validée. Trois modes, par ordre de préférence :

| Mode | Comment | Quand |
|---|---|---|
| **A — API** | Un bouton, un appel, la référence Cirrion revient et se stocke | si Cirrion expose une API |
| **B — Export structuré** | JSON / CSV / Factur-X téléchargé, importé dans Cirrion | si Cirrion sait importer |
| **C — Récapitulatif prêt à envoyer** | Bloc formaté, copiable en un clic, ou message prêt pour **WhatsApp** (Cirrion crée des devis depuis WhatsApp) | toujours possible, aucun prérequis |

> ⚠️ **Aucune API Cirrion publiquement documentée à ce jour.** Ne pas promettre au client un
> « envoi en un clic » avant d'avoir la réponse de leur support. Partir du **mode C**, qui
> fonctionne de toute façon, et garder la porte ouverte.

**Écrire la passation derrière une interface**, pour que passer de C à A soit un adaptateur
à écrire, pas le projet à refaire :

```ts
interface GestionAdapter {
  prepare(quote: Quote): DossierGestion;        // mise en forme des champs
  send?(dossier: DossierGestion): Promise<{ externalRef: string }>;  // mode A seulement
}
```

Statut `passation`: `a-preparer` → `envoye-a-cirrion` → `facture-emise`.
Le vendeur ressaisit la référence Cirrion (mode B/C) ou elle revient de l'API (mode A).

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
- ❌ Promettre une intégration API avant de l'avoir confirmée avec Cirrion
