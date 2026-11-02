# Conversion B2B — le devis est le produit

Un acheteur professionnel n'achète pas comme un particulier. Il compare, il demande un prix, il
vérifie le SAV, il fait valider par sa direction. Le site doit l'accompagner dans **ce**
parcours-là, pas forcer un tunnel d'achat impulsif.

## Les deux parcours

```
MACHINE (> 1 000 €)                    CONSOMMABLE (brosse, disque, filtre)
   ↓                                      ↓
Fiche technique complète               Fiche courte + compatibilité
   ↓                                      ↓
« Demander un devis »  ← principal     « Ajouter au panier »
« Être rappelé »                          ↓
« Télécharger la fiche PDF »           Panier → Stripe Checkout
   ↓                                      ↓
Email + enregistrement en base         Webhook → commande + email
   ↓
Rappel du vendeur sous 24-48 h
```

Le paiement direct d'une machine peut rester possible (certains clients équipés veulent
commander vite), mais **jamais comme seul chemin**.

## La fiche produit machine

Ordre qui convertit :

1. **Titre + référence + marque**
2. **Photos** (plusieurs angles, machine en situation)
3. **Les 4 caractéristiques décisives en évidence** — largeur de travail, rendement m²/h,
   autonomie, capacité des réservoirs. Un acheteur les cherche en 5 secondes.
4. **Prix HT** (ou « sur demande ») + éco-participation affichée à part
5. **Les deux boutons** : *Demander un devis* (principal) · *Ajouter au panier* (secondaire)
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

- ❌ Un bouton « Ajouter au panier » seul sur une machine à 8 000 €
- ❌ Cacher le prix **et** le délai **et** le SAV — il ne reste rien pour décider
- ❌ Un formulaire de devis en 15 champs
- ❌ Promettre un délai qu'on ne tient pas
- ❌ Un compte obligatoire pour demander un devis
