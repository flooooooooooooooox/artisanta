# Secteurs → SEO adapté

La **première question** du questionnaire est le secteur. Il pilote automatiquement :
le **type Schema.org**, les **mots-clés locaux**, la **variante de design suggérée**, et des
**suggestions de contenu** (services, avantages, FAQ, étapes).

Format des mots-clés : remplacer `[ville]` par la ville du client. Toujours mettre le mot-clé
principal dans le **title de l'accueil**, le **H1**, et la **meta description**.

Les types Schema.org valides sous `HomeAndConstructionBusiness` : `Electrician`, `Plumber`,
`HousePainter`, `RoofingContractor`, `HVACBusiness`, `Locksmith`, `GeneralContractor`,
`MovingCompany`. Pour les secteurs sans type dédié → **`LocalBusiness`** + `serviceType[]`.

| Secteur | Schema.org `@type` | Mots-clés principaux | Variante | Services types |
|---|---|---|---|---|
| Nettoyage | `LocalBusiness` | nettoyage [ville], entreprise de nettoyage, nettoyage vitres/bureaux/copropriété/fin de chantier | V01 | vitres, bureaux, copropriété, fin de chantier |
| Plomberie | `Plumber` | plombier [ville], dépannage plomberie, fuite d'eau, installation sanitaire, chauffe-eau | V07 | dépannage, sanitaire, chauffe-eau, recherche de fuite |
| Électricité | `Electrician` | électricien [ville], dépannage électrique, mise aux normes, tableau électrique, installation | V05 | dépannage, mise aux normes, tableau, domotique |
| Peinture | `HousePainter` | peintre [ville], peinture intérieure, ravalement de façade, décoration | V11 | intérieur, extérieur, façade, revêtements |
| Paysagiste / jardinier | `LocalBusiness` | paysagiste [ville], entretien de jardin, création de jardin, élagage, tonte | V02 | entretien, création, élagage, clôtures |
| Menuiserie | `GeneralContractor` | menuisier [ville], menuiserie sur mesure, pose de fenêtres, agencement | V04 | sur-mesure, fenêtres, agencement, parquet |
| Maçonnerie | `GeneralContractor` | maçon [ville], construction, rénovation, gros œuvre, terrasse | V03 | gros œuvre, rénovation, terrasse, ouvertures |
| Carrelage | `GeneralContractor` | carreleur [ville], pose de carrelage, faïence, mosaïque | V03 | carrelage, faïence, mosaïque, chape |
| Couvreur | `RoofingContractor` | couvreur [ville], réfection de toiture, zinguerie, étanchéité | V09 | toiture, zinguerie, étanchéité, démoussage |
| Chauffagiste | `HVACBusiness` | chauffagiste [ville], installation chaudière, pompe à chaleur, entretien chauffage | V05 | chaudière, PAC, entretien, dépannage |
| Serrurier | `Locksmith` | serrurier [ville], dépannage serrurerie, ouverture de porte, blindage | V10 | dépannage, ouverture, blindage, clés |
| Charpente | `GeneralContractor` | charpentier [ville], charpente bois, ossature, terrasse bois | V12 | charpente, ossature, terrasse, bardage |
| Rénovation / multi-services | `HomeAndConstructionBusiness` | rénovation [ville], travaux tous corps d'état, homme toutes mains | V10 | rénovation, petits travaux, coordination |
| Déménagement | `MovingCompany` | déménageur [ville], déménagement, garde-meuble, monte-meuble | V06 | déménagement, emballage, garde-meuble |
| Piscine | `LocalBusiness` | pisciniste [ville], entretien de piscine, construction, hivernage | V07 | entretien, construction, hivernage, dépannage |
| Vitrerie / miroiterie | `LocalBusiness` | vitrier [ville], remplacement de vitre, miroiterie, double vitrage | V01 | dépannage, remplacement, miroiterie, survitrage |

## Application dans le code
- `structured-data.ts` : utiliser le `@type` de la ligne. Si `LocalBusiness`, ajouter
  `serviceType: services.map(s => s.title)` et `additionalType` si pertinent.
- `layout.tsx` + pages : injecter les mots-clés locaux dans `title`, `description`, `keywords`.
- Accueil : H1 = « [Métier] à [Ville] » (ex. « Plombier à [Ville] »), puis le slogan.
- Contenu visible : lister les communes voisines (SEO local longue traîne).

## Si le secteur n'est pas dans la liste
Prendre `LocalBusiness`, demander 3-5 prestations, construire les mots-clés sur le modèle
« [métier] [ville] » + « [prestation] [ville] », et suggérer une variante libre cohérente.
