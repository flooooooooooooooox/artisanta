# Prompt de démarrage

À coller dans une **nouvelle session Claude Code**, dans le **nouveau dépôt** de la boutique
(jamais dans le dépôt d'un site vitrine existant).

Remplacer les `[...]` par les vraies informations avant d'envoyer. Ce qui n'est pas connu
reste `[à compléter]` — mieux vaut un trou assumé qu'une invention.

---

```
/site-ecommerce

Contexte du projet
Client : [nom de l'entreprise]
Activité : vente de matériel de nettoyage professionnel
Gammes : balayeuses manuelles, autolaveuses accompagnées, autolaveuses autoportées,
aspirateurs industriels eau et poussière, consommables (brosses, disques, raclettes, filtres)
Clientèle : [professionnels uniquement / particuliers / les deux]
Zone de livraison : [France métropolitaine / …]
Domaine : [domaine.fr ou « pas encore acheté »]

Ce que j'ai déjà
- Photos produit : [oui, X par produit / non]
- Fiches techniques PDF : [oui / non]
- Caractéristiques complètes : [oui / partiellement / non]
- Prix : [affichés / sur demande / mixte]
- Compte Stripe : [oui / non]
- Seuil de bascule devis/facture : [1 000 € HT / autre]
- CGV : [oui / non]
- Adhésion DEEE : [oui / non / à vérifier]
- Outil de gestion / facturation : [Cirrion / Pennylane / Sellsy / autre / aucun]
- Cet outil a-t-il une API ou un import de fichier : [oui / non / à vérifier]
- Raccordé à une plateforme agréée (facturation électronique) : [oui / non / à vérifier]

Stack imposée
Next.js sur Vercel · Payload CMS · Neon (Postgres) · Stripe Checkout · Cloudflare R2
Admin : [le client gère son catalogue → auth classique avec rôles]
        [ou : je gère seul → Payload auto-hébergé derrière Tailscale, base sur Neon]

Ce que j'attends
1. Déroule le questionnaire et dis-moi précisément ce qui manque avant de coder.
2. Parcours à seuil obligatoire (seuil par défaut 1 000 € HT sur le total du panier,
   modifiable dans l'admin sans redéploiement) :
   - sous le seuil → panier + Stripe Checkout, paiement immédiat
   - au-dessus → « Confirmer ma demande d'achat » (pas « Commander », et la page précise
     qu'aucun paiement n'est prélevé) → enregistrement en base → email au vendeur →
     le vendeur fixe le prix ferme et le délai dans l'admin → bouton « Préparer pour
     Cirrion » → Cirrion émet le devis et la facture → encaissement par lien Stripe
     (CB ou virement SEPA) → webhook → commande confirmée → suivi de livraison.
3. La boutique ne fait PAS la facturation. Elle prépare un dossier complet (SIREN du client,
   adresse de livraison, catégorie d'opération, lignes avec TVA, éco-participation, frais de
   port) et Cirrion prend le relais : devis, facture, conformité, archivage. Écris la
   passation derrière une interface d'adaptateur : mode « récapitulatif prêt à envoyer » en
   v1, API plus tard si Cirrion en expose une. Ne recode jamais la facturation, ne génère
   jamais de numéro de facture, ne recalcule jamais la TVA à côté de Cirrion.
4. Suivi de livraison : page /suivi/[token] (jeton aléatoire, pas de compte — le lien doit
   être transférable au comptable), email à chaque changement d'étape, récapitulatif PDF
   téléchargeable. Emails depuis le domaine du client, pas depuis un Gmail.
5. Les caractéristiques techniques sont structurées et comparables (largeur de travail,
   rendement m²/h, autonomie, capacités des réservoirs, alimentation, puissance, poids).
6. N'invente aucune caractéristique, aucun délai, aucune garantie, aucun prix :
   mets [à compléter] et liste-le-moi.
7. Légal bloquant avant publication : CGV, DEEE/éco-participation, prix HT ou TTC selon
   le public, pénalités de retard si B2B.
8. SEO/GEO : fiches produit avec Schema Product/Offer, guides d'achat par surface,
   /llms.txt, sitemap.
9. Clés et identifiants uniquement en variables d'environnement.

Commence par le questionnaire. Ne code rien avant qu'on ait tranché le public
(pro/particulier) et le mode d'administration.
```

---

## Variante courte (si le questionnaire est déjà fait)

```
/site-ecommerce

Reprends le projet [nom]. Le questionnaire est rempli, les réponses sont dans
suivi-client/[nom]/questionnaire.md. Passe directement à l'architecture puis au catalogue.
```
