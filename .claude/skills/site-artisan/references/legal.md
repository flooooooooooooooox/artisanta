# Obligations légales (droit français) — CHAQUE site doit les respecter

⚠️ **Bloquant** : un site ne doit pas être annoncé « prêt à publier » tant que ces éléments ne
sont pas en place. Ne **jamais inventer** ces informations → placeholder `[à compléter]` visible
et listé au client.

## 1. Mentions légales (obligatoire — loi LCEN, art. 6-III)
Page `/mentions-legales` accessible depuis le footer. Doit contenir :

**Éditeur du site**
- Dénomination / nom commercial + **forme juridique** (EI, micro-entreprise, EURL, SARL, SAS…)
- **Capital social** (si société)
- **Adresse du siège social**
- **SIRET / SIREN**
- **RCS + ville** (si commerçant) **ou RM / RNE + ville** (artisan inscrit au Répertoire des Métiers)
- **N° de TVA intracommunautaire** (si assujetti)
- Email + téléphone de contact
- **Directeur / responsable de la publication** (le représentant légal en général)

**Hébergeur**
- Nom / raison sociale, **adresse**, **téléphone** (ex. Vercel Inc., 340 S Lemon Ave #4133,
  Walnut, CA 91789, USA — à confirmer selon l'hébergement réel)

## 2. Spécificités artisan du bâtiment
- **Assurance décennale** obligatoire (loi Spinetta) : nom de l'assureur + n° de contrat +
  **couverture géographique**. Mention obligatoire sur devis/factures, fortement recommandée
  sur le site.
- **RC Pro** (responsabilité civile professionnelle)
- **Qualifications** si détenues : RGE, Qualibat, Qualifelec, label… (atout SEO + confiance)
- **Immatriculation au Répertoire des Métiers** (artisan) : numéro + chambre de métiers

## 3. Données personnelles — RGPD (obligatoire dès qu'il y a un formulaire)
Page `/politique-de-confidentialite` : responsable du traitement, **données collectées**,
**finalité**, **base légale** (consentement / mesures précontractuelles), **durée de
conservation**, **destinataires**, **droits** (accès, rectification, effacement, limitation,
opposition, portabilité), **droit de réclamation auprès de la CNIL** (www.cnil.fr), contact.
+ **Mention de consentement sous le formulaire** de contact (déjà dans le squelette).

## 4. Cookies
- **Pas de bandeau requis** si le site ne dépose que des cookies **techniques strictement
  nécessaires** (cas par défaut de nos sites : pas de tracking).
- **Bandeau de consentement OBLIGATOIRE** dès qu'on ajoute des traceurs non essentiels
  (Google Analytics, pixel Meta, pub…). Le mentionner au client si demandé.
- La **carte Google Maps** intégrée peut déposer des cookies → l'indiquer dans la politique de
  confidentialité (on utilise OpenStreetMap par défaut → pas de cookie Google).

## 5. Médiation de la consommation (obligatoire si clients particuliers)
Tout professionnel vendant à des consommateurs doit adhérer à un **médiateur de la
consommation** et indiquer sur son site : **nom + adresse + site web du médiateur**
(art. L.616-1 et R.616-1 du Code de la consommation). → champ à demander.

## 6. Micro-entrepreneur / auto-entrepreneur
- Mention **« TVA non applicable, art. 293 B du CGI »** si non assujetti à la TVA
- **Assurance pro** obligatoire pour les activités du bâtiment même en micro
- Pas de capital social à mentionner

## 7. Prix & devis (site vitrine sans vente en ligne)
- **CGV non obligatoires** sans vente en ligne, mais **conditions de devis** recommandées
- Si des prix sont affichés : **TTC**, et préciser « devis gratuit et sans engagement »
- Vente en ligne (paiement) → alors **CGV obligatoires** (droit de rétractation, etc.)

## 8. Accessibilité (RGAA)
- Déclaration d'accessibilité **obligatoire uniquement** pour le secteur public et les grandes
  entreprises (CA ≥ 250 M€). **Non obligatoire pour un artisan**, mais on vise quand même les
  bonnes pratiques (contraste, `alt`, focus, `prefers-reduced-motion`).

---

## Champs à collecter au questionnaire (section légale)
- Forme juridique · Capital social (si société)
- SIRET / SIREN
- RCS **ou** RM (Répertoire des Métiers) + ville d'immatriculation
- N° TVA intracommunautaire (ou statut « TVA non applicable »)
- Adresse du siège social
- Assurance décennale + RC Pro (assureur + n° + zone) — **si bâtiment**
- Qualifications (RGE, Qualibat…) éventuelles
- Directeur de la publication
- Hébergeur (par défaut Vercel — coordonnées à jour)
- Médiateur de la consommation (nom + adresse + site) — **si clients particuliers**

## À implémenter dans `site-data.ts` → `legalMentions{}`
```ts
legalMentions: {
  companyName, legalForm, capital, siret, rcsOrRm, vatNumber, headOffice,
  insurance, insuranceArea, qualifications, publicationDirector, host,
  consumerMediator,
}
```
Chaque valeur manquante = `"[à compléter]"` affiché tel quel sur la page.
