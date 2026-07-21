---
name: controle-final
description: >-
  Contrôle qualité + conformité légale d'un site d'artisan AVANT livraison au client. Utiliser
  quand l'utilisateur dit « contrôle final », « vérifie avant de livrer », « audit avant
  livraison », « est-ce prêt à livrer / publier ? », « c'est bon pour [client] ? ». Lance les
  vérifications techniques, SEO, conversion, design et surtout légales, puis rend un verdict
  GO / NO-GO avec la liste des bloquants. Met à jour le dossier /suivi-client.
---

# Contrôle final avant livraison

Objectif : **dernier filet de sécurité** avant de livrer/publier. Rien ne part chez le client
tant que ce contrôle n'est pas passé au **vert**. Le **légal est bloquant absolu**.

## Fichier de référence
- `references/checklists.md` — toutes les vérifications + règles GO / NO-GO + recette de crawl

## Déroulé
1. **Vérifs automatiques** :
   - `npx tsc --noEmit && npm run lint && npm run build` (doit passer sans erreur)
   - Lancer le site (`npm run start`) et **crawler** chaque page (recette dans checklists.md) :
     statut HTTP, `<title>`, meta description, canonical, 1 seul H1, meta robots, JSON-LD,
     images `alt`, liens internes, 404.
2. **Dérouler les checklists** de `checklists.md` : Technique, SEO, Conversion, Design,
   Contenu, **Légal**, Déploiement.
3. **Rechercher les placeholders** restants : `grep -rn "à compléter" src/` doit renvoyer 0.
4. **Rendre le verdict** :
   - 🔴 **NO-GO** si un seul item **bloquant** échoue (surtout légal ou build).
   - 🟡 **GO avec réserves** si seuls des items « recommandés » manquent (les lister).
   - ✅ **GO** si tout est vert.
5. **Rapport clair** : liste des ✅ / ⚠️ / 🔴, puis la **liste d'actions** pour lever les bloquants.
6. Mettre à jour le **dossier client** (`/suivi-client`) : résultat du contrôle + date.

## Bloquants absolus (NO-GO immédiat)
- `npm run build` échoue
- Un champ **légal obligatoire** en `[à compléter]` (mentions, SIRET, assurance décennale si
  bâtiment, hébergeur, médiateur conso si particuliers) — cf. legal.md
- **Canonical / sitemap pointent vers un domaine qui n'existe pas** (site non indexable)
- Formulaire de contact **non fonctionnel** (Resend non configuré) au moment de la mise en ligne
- Texte de remplissage visible (lorem, `[à compléter]`, fausses données)

## Règles
- Ne jamais déclarer « prêt à livrer » sans avoir passé ce contrôle.
- Vérifier réellement (crawl + build), ne pas se fier à la mémoire.
- Distinguer **bloquant** (NO-GO) et **recommandé** (réserve).
- Toujours finir par la **liste d'actions** concrètes.
