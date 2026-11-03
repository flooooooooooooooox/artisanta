# Légal e-commerce — bloquant avant publication

> ⚠️ Ce mémo liste les obligations à **vérifier et à faire valider par le client**.
> Ce n'est pas un conseil juridique : les CGV doivent être relues par un juriste, surtout en
> cas de vente à des particuliers. Ne jamais publier une boutique avec des CGV improvisées.

## La question qui commande tout : B2B ou B2C ?

| | **B2B** (professionnels) | **B2C** (particuliers) |
|---|---|---|
| Prix affichés | **HT** (TTC possible en complément) | **TTC obligatoire** |
| Rétractation 14 jours | **Ne s'applique pas** | **Obligatoire** |
| Garantie légale de conformité | Non | **2 ans, obligatoire** |
| Médiateur de la consommation | Non | **Obligatoire** |
| Pénalités de retard dans les CGV | **Obligatoires** | Non |

Vendre aux deux publics = porter les deux régimes. Possible, mais les CGV doivent le dire
explicitement et le site doit afficher HT **et** TTC.

### Segmentation par gamme — la solution recommandée

Plutôt que de porter la rétractation sur des machines lourdes, **réserver les machines aux
professionnels** et ouvrir les consommables à tous :

| Gamme | Public | Prix affiché | Rétractation |
|---|---|---|---|
| **Machines** | Professionnels uniquement | HT (TTC indicatif) | Non |
| **Consommables, pièces, petit matériel** | Tous publics | **HT et TTC** | Oui pour les particuliers |

Pourquoi : un retour de palette sur une machine à 8 000 € coûte plusieurs centaines d'euros
de transport, et le vendeur doit reprendre un matériel potentiellement déjà utilisé.

**Ce qu'il faut pour que la restriction tienne** — l'écrire ne suffit pas :
- mention visible sur la fiche produit et en catégorie (« réservé aux professionnels »)
- **SIREN obligatoire** dans le formulaire de demande d'achat
- case à cocher : « Je déclare agir dans le cadre de mon activité professionnelle »
- CGV qui distinguent explicitement les deux régimes

> ⚠️ **Nuance à faire valider par un juriste** : le Code de la consommation étend certaines
> protections (dont la rétractation) à un professionnel qui achète **hors de son domaine
> d'activité principal** et emploie **5 salariés ou moins**. Un artisan peintre qui achète
> une autolaveuse peut entrer dans ce cas. La restriction « réservé aux pros » réduit
> fortement le risque, elle ne l'annule pas complètement.

> 🔴 L'erreur la plus fréquente du secteur : un site « pro » qui affiche du HT et vend en
> réalité à des particuliers. En cas de contrôle DGCCRF, c'est une infraction.

## Mentions légales (toujours obligatoires)

Dénomination et forme juridique · adresse du siège · téléphone et email ·
**SIRET** · **RCS** + ville d'immatriculation · **TVA intracommunautaire** ·
capital social · directeur de la publication · **hébergeur** (nom, adresse, téléphone) ·
assurance RC Pro si pertinent.

## CGV — les clauses à ne pas oublier

Identité du vendeur · produits et caractéristiques essentielles · **prix (HT/TTC) et TVA** ·
**éco-participation DEEE** · frais et modalités de livraison · délais de livraison ·
moyens de paiement · transfert de propriété et des risques · garanties (légale + commerciale) ·
SAV et pièces détachées · rétractation (B2C) · **pénalités de retard + indemnité forfaitaire
de recouvrement de 40 € (B2B)** · réserve de propriété · données personnelles · droit
applicable et juridiction · médiation (B2C).

**Case à cocher obligatoire** : l'acheteur doit accepter les CGV *avant* de payer.
Pas de case pré-cochée. Le bouton final doit porter une mention sans ambiguïté
(« Commander — paiement de X € »), conformément à l'obligation de **double clic**.
Cela vaut pour le parcours de paiement immédiat (sous le seuil).

## Demande d'achat et facture (parcours au-dessus du seuil)

### La demande d'achat n'est pas une commande
Le site doit l'écrire explicitement, à côté du bouton de confirmation : la demande ne vaut
pas commande, le montant affiché est indicatif, aucun paiement n'est prélevé. À défaut, une
« demande d'achat » confirmée par le client peut s'analyser en **commande ferme**, et engager
le vendeur sur un prix et un délai qu'il n'a pas encore fixés.

Le contrat se forme quand le client **accepte le devis ou paie la facture**, pas avant.

### 🔴 Facturation électronique — Stripe ne suffit pas

La réforme française de la facturation électronique impose que les factures entre
professionnels passent par une **plateforme agréée** (PA, anciennement PDP) dans un
**format structuré** : Factur-X, UBL ou CII (socle EN 16931). Un PDF envoyé par email
n'est plus une facture conforme entre assujettis.

**Stripe n'est pas une plateforme agréée.** Stripe Invoicing produit des PDF et ne fait pas
le e-reporting à la DGFiP ; la documentation de Stripe elle-même renvoie vers un prestataire
agréé (son partenaire mis en avant est Billit ; Pennylane et Invopop sont aussi cités).

Calendrier (à reconfirmer sur impots.gouv.fr, il a déjà été reporté plusieurs fois) :

| Date | Obligation |
|---|---|
| **1er sept. 2026** | **Toutes** les entreprises doivent pouvoir **recevoir** une facture électronique → être raccordées à une plateforme agréée. Émission obligatoire pour les grandes entreprises et les ETI. |
| **1er sept. 2027** | Émission obligatoire pour les **PME, TPE et micro-entreprises** |

> Un client TPE/PME n'émet donc en format structuré qu'à partir de septembre 2027, **mais il
> doit déjà être raccordé pour recevoir**. À vérifier avec lui et son comptable — ce n'est pas
> un sujet de développement web, mais ça détermine l'architecture du projet.

**Conséquence sur le projet** : la boutique émet des **devis** (non concernés par la réforme)
et encaisse via Stripe. La **facture légale** sort de l'outil comptable du client, raccordé à
une plateforme agréée. Ne pas faire du site le système de facturation.

### Mentions obligatoires sur la facture

Depuis le 1er septembre 2026, **quatre mentions s'ajoutent** aux mentions classiques :
- le **SIREN du client** (9 chiffres) — sert de clé de routage entre plateformes
- l'**adresse de livraison**, si elle diffère de l'adresse de facturation
- la **catégorie de l'opération** : livraison de biens, prestation de services, ou mixte
- la mention de l'**option pour la TVA sur les débits**, le cas échéant

> Pour une boutique de machines, les deux premières sont structurantes : il faut **collecter
> le SIREN du client et son adresse de livraison dès la demande d'achat**, sinon la facture
> ne pourra pas être émise correctement. C'est la raison de les demander au formulaire.

Mentions classiques, toujours dues :
numéro séquentiel · date d'émission · date de la vente · identité et adresse du vendeur ·
**SIRET** · **RCS** · **TVA intracommunautaire** du vendeur (et de l'acheteur si pertinent) ·
identité et adresse de l'acheteur · désignation et quantité des produits · prix unitaire HT ·
**taux et montant de TVA** · total HT, TVA, TTC · **éco-participation DEEE** ligne à part ·
date d'échéance et conditions de règlement · **taux des pénalités de retard** ·
**indemnité forfaitaire de 40 €** pour frais de recouvrement · mention de l'escompte
(ou son absence).

### Conservation
Les factures doivent être conservées **10 ans**. La conservation incombe à l'outil de
facturation du client et à sa plateforme agréée, pas à la boutique. Côté site, conserver
quand même la trace de la vente (demande, devis, montant, paiement Stripe) : c'est ce qui
permet de reconstituer un dossier en cas de litige.

## ⚠️ DEEE — éco-participation (spécifique au matériel électrique)

Toute machine électrique (autolaveuse, aspirateur industriel, monobrosse…) relève de la filière
**DEEE** (déchets d'équipements électriques et électroniques).

Le client doit :
1. **Adhérer à un éco-organisme** agréé (Ecologic, Ecosystem…) et obtenir son **identifiant
   unique** délivré par l'ADEME
2. **Afficher l'éco-participation séparément du prix** sur chaque fiche produit et sur la facture
3. **Informer sur la reprise** de l'ancien équipement (reprise « 1 pour 1 »)
4. Faire figurer son identifiant unique dans les mentions légales / CGV

> ❌ Ne pas publier de boutique de matériel électrique sans avoir vérifié ce point avec le
> client. C'est une obligation réglementaire, pas une bonne pratique.

### Qui porte l'obligation selon le montage

| Montage | Adhésion à son nom | Ce qu'il doit faire |
|---|---|---|
| **Fabricant ou importateur** (achat hors France, même sans stock) | **Oui** — il est « producteur » | Adhérer, déclarer, afficher l'éco-participation, informer sur la reprise |
| **Revendeur** d'un fournisseur français qui paie déjà | Non | Afficher et **répercuter à l'identique** l'éco-participation, récupérer l'**identifiant unique** du fournisseur, informer sur la reprise |
| **Mise en relation / place de marché** (le fournisseur facture l'acheteur) | Non… sauf défaut | **Vérifier l'identifiant unique de chaque vendeur.** À défaut, l'obligation lui retombe dessus |

> 🔴 Le montage « je mets juste en relation » **n'exonère de rien**. L'article L541-10-9 du
> Code de l'environnement (loi AGEC) vise toute personne qui facilite, via une interface
> électronique, des ventes à distance de produits sous REP pour le compte d'un tiers. La FAQ
> du ministère indique que la responsabilité de la place de marché peut être engagée,
> notamment si elle n'a pas vérifié l'identifiant du vendeur.

**Dans les trois cas, l'éco-participation s'affiche sur chaque fiche produit** et en ligne
distincte sur la facture. Le champ `ecoTax` du modèle produit est donc toujours nécessaire.

> ⚠️ Sources datées et évolutives sur ce point : faire confirmer par l'expert-comptable du
> client ou directement par l'éco-organisme avant la mise en ligne.

## 🔴 Le client importe hors UE — il devient responsable comme un fabricant

Acheter des machines en Chine (ou ailleurs hors UE) et les revendre en France fait
du client un **importateur**. Ce n'est pas un détail de logistique : il endosse
l'essentiel des obligations du fabricant, parce qu'il est la personne qui met le
produit sur le marché européen.

| Obligation | Ce que ça implique concrètement |
|---|---|
| **Marquage CE et déclaration UE de conformité** | Il doit la détenir et pouvoir la produire. Un certificat fourni par l'usine ne vaut rien s'il ne correspond pas aux directives applicables. |
| **Dossier technique** | À tenir à disposition des autorités, généralement 10 ans. |
| **Notice d'instructions en français** | Obligatoire. Une notice en anglais ou traduite à la machine ne suffit pas. |
| **Directives applicables** | Machines, basse tension, CEM, RoHS, et le règlement batteries pour les modèles sur batterie. |
| **Responsabilité du fait des produits défectueux** | En cas d'accident, c'est vers lui qu'on se retourne, pas vers l'usine. |
| **DEEE** | Il **est** le producteur : adhésion à un éco-organisme et identifiant unique **obligatoires**, pas « à vérifier ». |
| **Filière batteries** | REP distincte de la DEEE, à ne pas oublier sur les machines sur batterie. |
| **Garantie et SAV** | Aucun réseau constructeur en France : garantie, réparations et pièces détachées reposent entièrement sur lui. |

> ⚠️ **Règlement Machines (UE) 2023/1230** : applicable au **20 janvier 2027**, il
> remplace la directive 2006/42/CE et précise les obligations de l'importateur
> (articles 13 et 14), qui doit vérifier avant mise sur le marché que le fabricant
> a rempli les siennes. Les machines mises sur le marché avant cette date restent
> sous la directive.

### Ce que ça change pour le site

- **Ne pas écrire « garantie constructeur »** : il n'y en a pas. La garantie est la
  sienne, et elle doit être décrite telle qu'elle est.
- **Les pièces détachées deviennent un sujet de premier plan.** C'est la première
  question d'un acheteur professionnel, et un stock de pièces en France est un
  argument de vente autant qu'une nécessité pratique.
- **Les subventions de type CARSAT sont peu probables** : seuls les modèles
  référencés au cahier des charges de l'Assurance Maladie sont financés, et les
  marques citées sont européennes et installées. À vérifier avant de bâtir un
  argumentaire dessus.
- **Ne jamais afficher une conformité sans l'avoir vue.** Demander la déclaration
  UE de conformité et la notice française **avant** de publier la fiche produit.

## B2B — pénalités de retard

Mentions **obligatoires** sur les factures et dans les CGV :
- Taux des pénalités de retard (souvent 3× le taux d'intérêt légal, ou le taux BCE + 10 points)
- **Indemnité forfaitaire de 40 €** pour frais de recouvrement
- Délai de paiement (plafond légal : 60 jours à compter de la facture, ou 45 jours fin de mois)

## B2C — rétractation

Si le client vend à des particuliers :
- **14 jours** à compter de la réception, sans justification
- **Formulaire type de rétractation** à fournir
- Remboursement sous 14 jours après retour
- Les **frais de retour** peuvent être à la charge de l'acheteur **si c'est annoncé avant la
  commande** — point important sur une machine de 200 kg en palette
- Mention d'un **médiateur de la consommation** (le client doit y adhérer)

## RGPD

- Bannière de cookies **avec refus aussi facile que l'acceptation** ; pas de dépôt avant consentement
- Politique de confidentialité : finalités, durées, droits, contact
- Base légale des traitements (contrat pour les commandes, intérêt légitime ou consentement
  pour la prospection)
- Stripe est sous-traitant : le mentionner
- Les demandes de devis sont des données personnelles → durée de conservation définie

## Paiement et sécurité

- **Stripe Checkout hébergé** : aucune donnée de carte ne transite par le site → pas de
  conformité PCI-DSS à porter. Ne jamais construire un formulaire de carte maison.
- **HTTPS** partout (natif sur Vercel)
- **Clés uniquement en variables d'environnement**, jamais dans le dépôt
- Vérifier la **signature du webhook Stripe** — sans ça, n'importe qui peut déclarer une
  commande payée

## Checklist de publication

- [ ] Public déterminé (B2B / B2C / les deux) et prix affichés en conséquence
- [ ] Mentions légales complètes et exactes
- [ ] CGV rédigées, relues par le client, **validées par un juriste si B2C**
- [ ] Case d'acceptation des CGV avant paiement (non pré-cochée)
- [ ] Récapitulatif de commande + double clic (parcours sous le seuil)
- [ ] Mention « ceci n'est pas une commande, aucun paiement n'est prélevé » sur la demande d'achat
- [ ] **Client raccordé à une plateforme agréée** (obligatoire depuis le 1er sept. 2026 pour
      recevoir) et outil de facturation identifié
- [ ] SIREN du client et adresse de livraison collectés dès la demande d'achat
- [ ] Pénalités de retard + indemnité de 40 € présentes sur la facture
- [ ] **Adhésion DEEE vérifiée et éco-participation affichée**
- [ ] Frais de port et délais clairs **avant** le paiement
- [ ] Pénalités de retard dans les CGV (B2B)
- [ ] Rétractation + formulaire type + médiateur (B2C)
- [ ] Politique de confidentialité + bandeau cookies conforme
- [ ] Emails de confirmation (devis et commande) testés
- [ ] Webhook Stripe signé et testé bout en bout
- [ ] Aucune clé dans le dépôt
