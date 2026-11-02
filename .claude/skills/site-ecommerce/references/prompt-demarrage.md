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
- CGV : [oui / non]
- Adhésion DEEE : [oui / non / à vérifier]

Stack imposée
Next.js sur Vercel · Payload CMS · Neon (Postgres) · Stripe Checkout · Cloudflare R2
Admin : [le client gère son catalogue → auth classique avec rôles]
        [ou : je gère seul → Payload auto-hébergé derrière Tailscale, base sur Neon]

Ce que j'attends
1. Déroule le questionnaire et dis-moi précisément ce qui manque avant de coder.
2. Parcours hybride obligatoire : machines → fiche technique + « Demander un devis » ;
   consommables → panier + Stripe Checkout.
3. Les caractéristiques techniques sont structurées et comparables (largeur de travail,
   rendement m²/h, autonomie, capacités des réservoirs, alimentation, puissance, poids).
4. N'invente aucune caractéristique, aucun délai, aucune garantie, aucun prix :
   mets [à compléter] et liste-le-moi.
5. Légal bloquant avant publication : CGV, DEEE/éco-participation, prix HT ou TTC selon
   le public, pénalités de retard si B2B.
6. SEO/GEO : fiches produit avec Schema Product/Offer, guides d'achat par surface,
   /llms.txt, sitemap.
7. Clés et identifiants uniquement en variables d'environnement.

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
