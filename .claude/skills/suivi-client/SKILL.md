---
name: suivi-client
user-invocable: true
description: >-
  Gère la relation client de bout en bout pour les sites d'artisans : accueil d'un nouveau
  client, suivi d'un client existant, reprise d'un site déjà commencé, état d'avancement, ce
  qui manque, et rédaction des messages à lui envoyer. Utiliser quand l'utilisateur dit
  « nouveau client », « je rappelle un client », « où en est [client] », « qu'est-ce qui manque
  pour [client] », « relance [client] », ou « j'ai déjà commencé un site / reprise / je l'ai
  oublié dans le suivi ». S'appuie sur le skill /site-artisan pour la construction du site.
---

# Suivi client (chef de projet des sites d'artisans)

Rôle : être l'assistant de gestion de clientèle. Chaque client a un **dossier** persistant.
Le skill sait toujours **où on en est**, **ce qui manque**, et **quoi faire ensuite**.

## Fichiers de référence
- `references/pipeline.md` — les étapes du projet + ce qu'il faut à chaque étape
- `references/dossier-template.md` — modèle de dossier client
- `references/messages.md` — modèles de messages prêts à envoyer au client

## Où sont stockés les dossiers
Un dossier par client dans `clients/<slug-client>/dossier.md` (+ assets dans le même dossier).
`<slug-client>` = nom en minuscules sans accents ni espaces (ex. `propre-eclat`).

> 🔒 **Confidentialité** : ne JAMAIS stocker de secret dans le dossier (clé API Resend, mots de
> passe, identifiants). Noter seulement « configuré : oui/non ». Garder les dossiers dans un
> dépôt **privé**.

## Déroulé

### Cas A — Nouveau client
1. Créer `clients/<slug>/dossier.md` à partir de `dossier-template.md`.
2. Enregistrer les coordonnées et le **canal de contact préféré** (WhatsApp / email / téléphone).
3. Lancer l'**intake** : soit dérouler le questionnaire de `/site-artisan`, soit envoyer au
   client la **demande d'infos** (modèle dans `messages.md`) et cocher au fur et à mesure.
4. Marquer l'étape du pipeline et la **prochaine action** + date de relance.

### Cas B — Client existant (« je rappelle [client] »)
1. Charger `clients/<slug>/dossier.md`.
2. Afficher un **résumé clair** : étape actuelle, ce qui est fait, **ce qui manque**, prochaine
   action.
3. Proposer la suite : relancer (générer le message), continuer la construction (`/site-artisan`),
   déployer, ou passer en maintenance.
4. Mettre à jour le dossier (historique daté + prochaine action).

### Cas C — Site déjà commencé mais pas suivi (« reprise / j'ai oublié de le créer »)
À utiliser quand un site a **déjà été démarré ou construit** (parfois déjà en ligne) **sans**
passer par « nouveau client » → il n'a pas de dossier. Objectif : **le rattraper** et le remettre
au standard actuel.
1. **Créer le dossier rétroactivement** (`dossier-template.md`) en remplissant ce qu'on sait déjà
   depuis le code existant (`src/lib/site-data.ts`, pages, `legalMentions`…).
2. **Faire l'état des lieux** du site existant (audit) — de préférence via `/controle-final`
   (crawl + checklists SEO/GEO/légal, + `/seo audit` si le plugin `claude-seo` est dispo).
3. **Comparer au standard actuel** et lister ce qui manque, en particulier les ajouts récents :
   - **GEO** : `/llms.txt`, robots IA, schéma enrichi (`geo.md`)
   - **Pages prestation locales** `/[service]-[ville]` (levier SEO n°1, cf. `features.md`)
   - **Légal** complet (directeur de publication, médiateur conso si particuliers…)
   - Fonctionnalités manquantes (avant/après, avis, carte, FAQ…) selon `features.md`
4. **Ajouter/mettre à niveau** en appelant `/site-artisan` sur le code existant (ne pas repartir
   de zéro : compléter/retrofit, garder le contenu déjà validé par le client).
5. Repasser `/controle-final` jusqu'au ✅ GO, puis mettre à jour le dossier (historique + reste à faire).

### À chaque interaction
- Tenir à jour la **checklist « ce qui manque »** (surtout légal + technique, cf. `/site-artisan`).
- Ajouter une ligne d'**historique** (date + résumé).
- Définir la **prochaine action** et une **date de relance**.
- Committer le dossier mis à jour.

## Ce que le skill produit à la demande
- Un **état d'avancement** synthétique d'un client
- La **liste de ce qui manque** pour avancer
- Un **message prêt à envoyer** (demande d'infos, relance, validation, mise en ligne, avis)
- La **liste de tous les clients** et leur étape (survol du portefeuille)

## Règles
- Toujours repartir du dossier (source de vérité), pas de mémoire.
- Ne jamais inventer d'infos client → placeholder + à demander.
- Aucun secret dans les dossiers.
- Confirmer avant d'envoyer/publier quoi que ce soit vers l'extérieur.
