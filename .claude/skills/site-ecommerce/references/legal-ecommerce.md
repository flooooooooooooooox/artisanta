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

### Mentions obligatoires sur la facture
Stripe Invoicing gère la numérotation séquentielle et le PDF, mais **pas** les mentions
françaises : elles doivent être configurées dans les réglages de facturation Stripe
(champs personnalisés + pied de facture), sinon les factures sont non conformes.

Numéro séquentiel · date d'émission · date de la vente · identité et adresse du vendeur ·
**SIRET** · **RCS** · **TVA intracommunautaire** du vendeur (et de l'acheteur si pertinent) ·
identité et adresse de l'acheteur · désignation et quantité des produits · prix unitaire HT ·
**taux et montant de TVA** · total HT, TVA, TTC · **éco-participation DEEE** ligne à part ·
date d'échéance et conditions de règlement · **taux des pénalités de retard** ·
**indemnité forfaitaire de 40 €** pour frais de recouvrement · mention de l'escompte
(ou son absence).

### Conservation
Les factures doivent être conservées **10 ans**. Stripe les archive, mais ne pas en faire la
seule copie : prévoir un export régulier, ou enregistrer le PDF côté R2 à la réception du
webhook `invoice.paid`.

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
- [ ] Mentions obligatoires configurées dans les réglages de facturation Stripe
- [ ] Pénalités de retard + indemnité de 40 € présentes sur la facture
- [ ] **Adhésion DEEE vérifiée et éco-participation affichée**
- [ ] Frais de port et délais clairs **avant** le paiement
- [ ] Pénalités de retard dans les CGV (B2B)
- [ ] Rétractation + formulaire type + médiateur (B2C)
- [ ] Politique de confidentialité + bandeau cookies conforme
- [ ] Emails de confirmation (devis et commande) testés
- [ ] Webhook Stripe signé et testé bout en bout
- [ ] Aucune clé dans le dépôt
