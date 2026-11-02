# Questionnaire — boutique de matériel professionnel

Poser dans cet ordre. La **question 1 est bloquante** : elle décide du droit applicable et de
l'affichage des prix sur tout le site.

## 1. À qui vend-il ? ⚠️ BLOQUANT
- [ ] **Professionnels uniquement** (B2B) → prix **HT**, pas de droit de rétractation,
      pénalités de retard obligatoires dans les CGV
- [ ] **Particuliers uniquement** (B2C) → prix **TTC**, **rétractation 14 jours obligatoire**,
      garantie légale de conformité, médiateur de la consommation
- [ ] **Les deux** → afficher HT **et** TTC, et prévoir les deux régimes dans les CGV

> C'est l'erreur la plus coûteuse du secteur : afficher du HT à un particulier est une
> infraction, et promettre 14 jours de rétractation à un pro fait perdre de l'argent.

## 2. L'entreprise
- Nom commercial, forme juridique, SIRET, TVA intracommunautaire
- Adresse, téléphone, email
- Est-elle **fabricant, importateur ou revendeur** ? (détermine les obligations DEEE)
- Marques distribuées (exclusivité ou non)
- Zone de livraison : France, UE, DOM-TOM ?

## 3. Le catalogue
- **Combien de références** au total ? Combien de machines, combien de consommables ?
- **Catégories** : balayeuses, autolaveuses (accompagnant / autoportée), aspirateurs
  industriels, monobrosses, nettoyeurs haute pression, injecteurs-extracteurs, accessoires…
- Pour chaque machine, lesquelles de ces **caractéristiques** sont disponibles ?
  largeur de travail · rendement (m²/h) · autonomie · capacité des réservoirs (propre/sale) ·
  puissance · alimentation (batterie / câble / thermique) · poids · niveau sonore · dimensions
- A-t-il les **fiches techniques PDF** ? Les **notices** ?
- A-t-il des **photos** par produit ? Combien ? De quelle qualité ?
- **Variantes** : plusieurs largeurs, batterie vs câble, avec/sans chargeur ?

## 4. Prix et commandes
- **Affiche-t-il les prix** ou uniquement « prix sur demande » ?
- Remises par quantité ? Tarifs négociés par client ?
- Moyens de paiement souhaités : CB (Stripe), **virement**, chèque, à réception de facture ?
- Propose-t-il du **financement / leasing** ? (argument fort en B2B)
- **Qui traite les devis**, et sous quel délai s'engage-t-il à répondre ?

## 5. Logistique ⚠️ souvent sous-estimé
- Les machines partent en **palette** → transporteur spécialisé, pas un colis classique
- Frais de port : forfait, par poids, par zone, ou devis au cas par cas ?
- **Délais de livraison** réels par produit (stock / sur commande / délai fabricant)
- Livraison avec **hayon** ? Mise en service sur site ? Formation à l'utilisation ?
- Retrait sur place possible ?

## 6. Après-vente (décisif en B2B)
- **Garantie** : durée par gamme, pièces et/ou main-d'œuvre
- Assure-t-il le **SAV** lui-même ou via le fabricant ?
- Vend-il les **pièces détachées** ? Sont-elles au catalogue ?
- Contrat de maintenance proposé ?
- Délai d'intervention en cas de panne ?

## 7. Fonctionnalités voulues
- [ ] Comparateur de machines (fort pour la conversion B2B)
- [ ] Guide d'achat / aide au choix par surface à nettoyer
- [ ] Demande de devis multi-produits (panier de devis)
- [ ] Compte client avec historique des commandes et factures
- [ ] Téléchargement des fiches techniques et notices
- [ ] Recherche par caractéristique (largeur, autonomie, surface)
- [ ] Avis clients
- [ ] Blog / conseils (excellent pour le SEO du secteur)

## 8. Légal ⚠️ BLOQUANT avant publication
Cf. `legal-ecommerce.md` pour le détail. À collecter :
- Mentions légales complètes (SIRET, RCS, TVA, siège, directeur de publication, hébergeur)
- **CGV** : les a-t-il déjà rédigées ? Par un juriste ?
- **Éco-participation DEEE** : est-il adhérent à un éco-organisme (Ecologic, Ecosystem) ?
  **Obligatoire** pour vendre du matériel électrique.
- Médiateur de la consommation (si vente à des particuliers)
- Assurance responsabilité civile professionnelle

## 9. Technique
- Nom de domaine acheté ?
- Compte **Stripe** créé ? (nécessaire pour encaisser)
- Qui gère le catalogue au quotidien : **lui** ou **toi** ?
  → détermine si l'admin peut être derrière Tailscale ou doit être accessible publiquement
- A-t-il un ERP / logiciel de gestion à synchroniser ?

---

## Ce qui manque le plus souvent
1. Les **fiches techniques PDF** et les caractéristiques complètes
2. Les **délais de livraison réels** par produit
3. Les **CGV** rédigées
4. L'adhésion **DEEE**
5. De bonnes **photos** produit
