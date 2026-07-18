# Questionnaire client (à poser en une fois au démarrage)

Poser ces questions de façon groupée et efficace. Utiliser `AskUserQuestion` pour les choix
fermés (secteur, langues, options), et le fil de conversation pour le texte libre et les
fichiers (logo, photos). Tout ce qui manque = laisser un placeholder `[à compléter]` visible.

## 0. Secteur (PREMIÈRE question — pilote tout le SEO)
Demander le **secteur d'activité** en tout premier (nettoyage, plomberie, électricité,
peinture, paysagiste, menuiserie, maçonnerie, carrelage, couvreur, chauffagiste, serrurier,
charpente, rénovation/multi-services, déménagement, piscine, vitrerie…).
→ Consulter `sectors.md` : le secteur détermine automatiquement le **type Schema.org**, les
**mots-clés locaux** (title/H1/description), la **variante de design suggérée** et des
**suggestions de prestations/FAQ/étapes**. Adapter tout le SEO en conséquence.

## 1. Entreprise
- Nom commercial
- Valeurs / promesse client (1 phrase)
- Cible (particuliers, professionnels, syndics, collectivités…)
- Ville principale (sert au mot-clé local « [métier] à [ville] »)

## 2. Identité visuelle
- Logo (fichier à envoyer) — sinon on génère un logo texte provisoire
- Préférence de couleurs (sinon → choix d'une **variante de design libre**, cf. design-variants.md)
- Photos de réalisations / avant-après (fichiers) — optionnel
- Ambiance souhaitée (épuré, coloré, premium, chaleureux…)

## 3. Contenu & prestations
- Liste des prestations principales (titre + courte description chacune)
- Zone d'intervention (ville + rayon en km) → sert au SEO local et à la carte
- Communes voisines couvertes (pour le SEO longue traîne) — sinon on les déduit de la ville
- Horaires d'ouverture

## 4. Contact
- Téléphone (format affiché + on génère le lien `tel:` en +33)
- Email de réception des demandes
- Réseaux sociaux (Facebook, Instagram…)
- Lien de la fiche / des avis Google + note moyenne (ex. 4,8) + nb d'avis
- 3 à 6 avis clients réels (nom, note, texte, date) — optionnel mais fortement recommandé

## 5. Fonctionnalités à activer (à la carte — cf. features.md)
- Galerie avant/après glissable ? (oui/non)
- Carte de la zone d'intervention (OpenStreetMap) ? (oui/non)
- Section avis Google + carrousel ? (oui/non)
- Formulaire de contact avec envoi email (Resend) ? (oui/non)
- Section FAQ ? (oui/non)
- Section « Pourquoi nous choisir » ? (oui/non)
- Section « Comment ça se passe » ? (oui/non)
- Barre d'action fixe mobile (Appeler + Devis) ? (oui/non)

## 6. Mentions légales (obligatoire avant mise en ligne)
- Forme juridique · SIRET · RCS · adresse du siège
- Assurance (RC Pro / décennale)
- Responsable de publication · Hébergeur (Vercel par défaut)

## 7. Technique / déploiement
- Clé API Resend (pour l'envoi des demandes) — cf. deployment.md
- Nom de domaine (si déjà acheté) — sinon on met un placeholder et on branche plus tard

> Champs non fournis → placeholder `[à compléter]` dans le code, listés en fin de génération
> pour que le client les complète avant publication.
