# Pipeline projet — étapes & conditions de passage

Chaque client est à **une étape**. Pour avancer, il faut que les conditions soient remplies.
Le skill affiche toujours l'étape + ce qui bloque.

| # | Étape | Ce qu'il faut pour valider l'étape |
|---|---|---|
| 1 | **Prospect** | Premier contact, coordonnées, secteur, canal de contact préféré |
| 2 | **Intake** | Questionnaire rempli : entreprise, services, zone, contact, photos/logo |
| 3 | **Design choisi** | Variante de design attribuée (marquée utilisée) + fonctionnalités décidées |
| 4 | **Construit** | Site généré, `npm run build` OK, rendu validé (captures) |
| 5 | **Validation client** | Le client a vu la preview et validé (ou demandé des retouches) |
| 6 | **Légal complété** | Tous les champs légaux fournis (fin des `[à compléter]`) — cf. legal.md |
| 6b | **Contrôle final** | Lancer **`/controle-final`** → verdict ✅ GO obligatoire avant de livrer/déployer |
| 7 | **Déployé** | Vercel en ligne + Resend configuré + formulaire testé |
| 8 | **En ligne (domaine)** | Domaine branché + `siteConfig.url` à jour + fiche Google cohérente |
| 9 | **Maintenance** | Contrat de suivi / relances périodiques (avis, mises à jour) |

## Ce qui manque le plus souvent (à surveiller)
- **Légal** : SIRET, forme juridique, assurance décennale, médiateur conso, hébergeur
- **Technique** : clé Resend non configurée sur Vercel, domaine pas encore acheté/branché
- **Contenu** : photos avant/après, avis Google (note + textes), textes « À propos »
- **Validation** : le client n'a pas encore validé la preview

## Indicateurs à garder dans le dossier
- Étape actuelle (1→9)
- % d'infos collectées
- Blocages (ce qui empêche de passer à l'étape suivante)
- Prochaine action + date de relance
