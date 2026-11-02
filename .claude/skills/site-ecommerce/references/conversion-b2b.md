# Conversion B2B — le devis est le produit

Un acheteur professionnel n'achète pas comme un particulier. Il compare, il demande un prix, il
vérifie le SAV, il fait valider par sa direction. Le site doit l'accompagner dans **ce**
parcours-là, pas forcer un tunnel d'achat impulsif.

## Le seuil

Une seule variable décide du parcours : **`PAYMENT_THRESHOLD_HT`**, par défaut **1 000 € HT**.
Elle s'applique au **total du panier**, pas au prix unitaire — 20 bidons de détergent à 60 €
dépassent le seuil et doivent basculer en demande d'achat.

```
TOTAL < seuil                          TOTAL ≥ seuil
   ↓                                      ↓
Panier                                 Panier
   ↓                                      ↓
Stripe Checkout (CB)                   « Confirmer ma demande d'achat »
   ↓                                      ↓
Webhook checkout.session.completed     Récapitulatif + « Voulez-vous confirmer
   ↓                                       votre demande d'achat ? »
Commande payée + email                    ↓
                                       Enregistrement en base (statut : à valider)
                                          ↓
                                       Email au vendeur
                                          ↓
                                       ─── ADMIN ─────────────────────────
                                       Le vendeur ouvre la demande,
                                       fixe prix ferme, délai, frais de port,
                                       puis clique « Valider et envoyer »
                                       ───────────────────────────────────
                                          ↓
                                       Facture Stripe créée et envoyée au client
                                          ↓
                                       Le client paie (CB ou virement SEPA)
                                          ↓
                                       Webhook invoice.paid
                                          ↓
                                       Commande confirmée + préparation
```

> ⚠️ **Au-dessus du seuil, pas de carte bancaire.** Le bouton ne dit **pas** « Commander » :
> une demande d'achat n'est pas une commande, et le site doit l'écrire noir sur blanc
> (« Nous validons votre demande et vous envoyons une facture sous 24 h ouvrées. Aucun
> paiement n'est prélevé maintenant. »). Sinon la demande peut être lue comme un bon de
> commande ferme, ce qui engage le vendeur sur un prix qu'il n'a pas encore fixé.

## Le parcours au-dessus du seuil, en détail

### 1. La confirmation côté client
Récapitulatif avant validation : produits, quantités, montant **indicatif** HT, et la phrase
qui lève l'ambiguïté. Champs demandés : nom · société · email · téléphone · adresse de
livraison · message. Le SIRET peut être demandé ici (il servira sur la facture), mais rester
optionnel pour ne pas bloquer la demande.

### 2. La validation dans l'admin
C'est l'étape qui donne la main au vendeur. Dans Payload, sur la demande :
- il voit le détail et le contact
- il **fixe le prix ferme**, les frais de port, le délai réel, l'éco-participation
- il peut ajouter une ligne (mise en service, formation, consommable de démarrage)
- il clique **« Valider et envoyer la facture »**

Statuts : `à valider` → `facture envoyée` → `payée` → `en préparation` → `expédiée`
(+ `refusée` / `annulée`). Rien ne part au client sans ce clic.

### 3. Le devis, puis la facture — et surtout : qui émet quoi

> 🔴 **La boutique n'émet pas la facture légale.** En France, depuis la réforme de la
> facturation électronique, une facture entre professionnels doit transiter par une
> **plateforme agréée** (PA, anciennement PDP) dans un format structuré (Factur-X, UBL, CII).
> **Stripe n'est pas une plateforme agréée** et produit des PDF, pas des factures
> structurées. Cf. `legal-ecommerce.md`.

Répartition des rôles qui tient dans le temps :

| Qui | Fait quoi |
|---|---|
| **La boutique (Payload)** | Demande d'achat, validation, **devis** (les devis ne sont pas concernés par la réforme), suivi de commande |
| **L'outil de facturation du client**, raccordé à une plateforme agréée | **La facture légale** |
| **Stripe** | **L'encaissement** : lien de paiement, carte ou virement SEPA, et le webhook qui marque la commande payée |

Parcours concret :
1. Le vendeur valide la demande dans l'admin → la boutique génère un **devis** PDF et l'envoie
2. Le client accepte le devis
3. Le vendeur émet la **facture depuis son outil comptable** (Pennylane, Sellsy, Tiime… —
   raccordé à une plateforme agréée)
4. Le paiement passe par un **lien Stripe** joint au devis ou à la facture
5. Webhook Stripe → la commande passe en « payée » dans l'admin

**Stripe Invoicing reste utilisable** comme page de paiement et pour les relances d'impayés,
mais ce n'est **pas** la facture légale du client : ne pas construire le projet comme si
c'était le cas.

> ⚠️ À vérifier au questionnaire : avec quel outil le client facture-t-il aujourd'hui, et
> est-il raccordé à une plateforme agréée ? S'il ne l'est pas, c'est une démarche à faire de
> son côté — ça ne se règle pas dans le code du site.

### 4. Le paiement — espace client ou email ?

**Recommandation : par email, avec le lien de facture hébergé par Stripe. Pas d'espace client
en v1.**

La raison est concrète : en B2B, **celui qui commande n'est pas celui qui paie**. La demande
vient du responsable technique, la facture est réglée par la comptabilité. Un espace client
avec identifiants **bloque** le comptable, qui n'a pas le mot de passe. Un lien de facture
transmis par email, lui, se forwarde et se paie en deux clics.

| | Lien de facture par email ⭐ | Espace client |
|---|---|---|
| Le comptable peut payer | ✅ il forwarde le lien | ❌ il faut un compte |
| À développer | rien, Stripe le fait | comptes, mots de passe, RGPD, maintenance |
| Relances impayés | automatiques (Stripe) | à coder |
| PDF de facture | fourni | à générer |

L'espace client reste pertinent en **phase 2**, pour l'historique des commandes, le
retéléchargement des factures et les fiches techniques du matériel acheté — c'est un service
de fidélisation, pas un prérequis pour vendre.

> 📧 **Ne pas envoyer les factures depuis une adresse Gmail personnelle.** Les emails
> transactionnels partent de Stripe ou de Resend avec le domaine du client
> (`facturation@domaine.fr`), SPF et DKIM configurés. Un devis parti d'un Gmail perso finit
> en spam ou fait mauvais effet — dans les deux cas la vente est perdue.

## La fiche produit machine

Ordre qui convertit :

1. **Titre + référence + marque**
2. **Photos** (plusieurs angles, machine en situation)
3. **Les 4 caractéristiques décisives en évidence** — largeur de travail, rendement m²/h,
   autonomie, capacité des réservoirs. Un acheteur les cherche en 5 secondes.
4. **Prix HT** (ou « sur demande ») + éco-participation affichée à part
5. **L'action** : au-dessus du seuil, *Demander un devis* (principal) et *Ajouter à ma demande*
   — jamais « Commander ». Sous le seuil, *Ajouter au panier*.
6. **Disponibilité et délai réel**
7. **Tableau complet des caractéristiques**
8. **Fiche technique PDF** à télécharger — très demandé, sert aussi à justifier un budget en interne
9. **Garantie et SAV**
10. **« Pour quelles surfaces ? »** — aide au dimensionnement, le vrai besoin du client
11. **Consommables et pièces compatibles** (panier mixte, vente additionnelle)
12. **Machines comparables** (3 maximum)

## Le formulaire de devis

**Courts champs, réponse rapide.** Chaque champ supplémentaire fait perdre des demandes.

Indispensables : nom · société · email · téléphone · produit(s) + quantité · message
Utiles : surface à nettoyer · type de sol · délai souhaité
À ne pas demander d'emblée : SIRET, adresse complète, numéro de TVA → ça vient au devis.

- **Panier de devis** : pouvoir demander plusieurs machines d'un coup.
- **Engagement de réponse affiché** (« réponse sous 24 h ouvrées ») — et tenu.
- Email au vendeur **et** accusé de réception au client.
- Enregistrement en base (`quotes`) : ne jamais dépendre uniquement de l'email.

## Réassurance B2B

Ce qui rassure un pro n'est pas ce qui rassure un particulier :

| Levier | Pourquoi |
|---|---|
| **SAV et pièces détachées** | La peur n°1 : une machine immobilisée arrête un chantier |
| **Délais annoncés et tenus** | Une livraison en retard coûte cher au client |
| **Paiement par virement / à réception de facture** | Le réflexe comptable du B2B |
| **Conseil humain joignable** | Un numéro de téléphone visible partout |
| **Références clients** | Collectivités, syndics, entreprises de nettoyage |
| **Fiches techniques et notices** | Prouve le sérieux et permet de comparer |
| **Financement / leasing** | Débloque les achats à gros montant |

Afficher le **téléphone en permanence** (en-tête + fiche produit). En B2B, beaucoup d'achats
se décident au téléphone, pas au clic.

## Le comparateur

Fort sur ce type de catalogue : l'acheteur hésite entre 2-3 modèles.
Comparer sur les caractéristiques marquées `comparable: true`, 3 machines maximum,
et toujours un bouton « Demander un devis » en bas de chaque colonne.

## L'aide au choix

Page « Quelle machine pour quelle surface ? » : un acheteur sait sa surface en m² et son
type de sol, pas quel modèle il lui faut. Cette page capte énormément de trafic qualifié et
convertit mieux qu'une page catégorie.

## À ne pas faire

- ❌ Un paiement par carte sur une machine à 8 000 €
- ❌ Écrire « Commander » sur ce qui n'est qu'une demande d'achat
- ❌ Envoyer la facture automatiquement, sans validation humaine dans l'admin
- ❌ Imposer un compte client pour payer une facture — le comptable ne l'aura pas
- ❌ Cacher le prix **et** le délai **et** le SAV — il ne reste rien pour décider
- ❌ Un formulaire de demande en 15 champs
- ❌ Promettre un délai qu'on ne tient pas
- ❌ Facturer depuis un Gmail personnel
