# Excellence du design — la barre à atteindre sur CHAQUE site

Objectif : un rendu **« wow »**, premium, qui inspire immédiatement confiance. Ces principes
sont un standard minimum, pas une option.

## 1. Rythme & espace
- **Respiration généreuse** : sections `py-16`/`py-20`, marges internes larges (`p-6`/`p-8`)
- **Échelle d'espacement cohérente** (multiples de 4 px)
- **Largeur de lecture maîtrisée** : texte en `max-w-xl`/`max-w-3xl`, jamais pleine largeur
- **Alternance de fonds** entre sections : `cream` → `cream-alt` → `navy` → `cream` (crée le rythme)

## 2. Typographie
- **Hiérarchie forte** : H1 grand et affirmé (`text-4xl`/`text-5xl`, `font-bold`), sous-titres
  discrets, corps lisible (`text-navy/70`)
- **Eyebrow** au-dessus des titres (petit, majuscules, `tracking-widest`, couleur brand)
- Paire de polices de la variante (titres à caractère + corps neutre lisible)
- Pas plus de 2 polices, poids maîtrisés

## 3. Couleur & profondeur
- **Accent (brand) utilisé avec parcimonie** : réservé aux CTA, liens, détails — jamais partout
- **Profondeur douce** : ombres subtiles (`shadow-sm`→`shadow-xl` au survol), `ring-1 ring-navy/5`
- **Dégradés discrets** : hero et CTA en dégradé `navy → navy-light`, halos flous `blur-3xl`
- Coins arrondis **cohérents** (`rounded-2xl`/`rounded-3xl`)

## 4. Hero mémorable
- Dégradé de fond + **halos lumineux animés** (drift) + **particules** discrètes
- Logo mis en valeur (flottement doux + reflet brillant + halo au survol)
- Apparition **en cascade** au chargement (`hero-in` avec délais)
- Titre avec mot-clé, sous-titre, 2 CTA nets

## 5. Micro-interactions (dosées, jamais gadget)
- **Cartes** : soulèvement + ombre + liseré au survol **et au toucher** (`active:`)
- **Boutons** : dégradé + ombre colorée + léger relief au survol, enfoncement au clic
- **Apparition au scroll** (reveal fondu + glissement) sur les sections
- **Étincelles** discrètes sur les titres de section
- **Carrousel d'avis** en défilement infini (pause au survol)
- Tout **désactivé** sous `prefers-reduced-motion`

## 6. Imagerie
- Photos réelles, **ratios cohérents** (`aspect-square`/`aspect-[4/3]`), `object-cover`
- **Avant/après glissable** = pièce maîtresse visuelle
- Images en **WebP**, `sizes` renseigné, `alt` systématique
- Badge/watermark léger de marque si pertinent

## 7. Cohérence des composants
- **Icônes** homogènes (même style de trait `strokeWidth={2}`, mêmes tailles)
- Boutons via classes `.btn` (primary / ghost / outline / sm) — jamais de style ad hoc
- Cartes, badges, puces : même langage visuel partout

## 8. Finition = qualité perçue
- **États focus** visibles (accessibilité), contrastes AA
- Header **sticky** avec descente animée au chargement
- Footer riche (bande CTA, colonnes, réseaux, horaires)
- **404 personnalisée** aux couleurs de la marque
- Favicon = logo, image de partage OpenGraph soignée

## Barre de qualité (vérifier avant livraison)
- [ ] Rythme d'espacement et alternance de fonds cohérents
- [ ] Hiérarchie typographique forte + eyebrows
- [ ] Accent brand réservé aux actions
- [ ] Hero animé et mémorable
- [ ] Micro-interactions au survol ET au toucher
- [ ] Reveal au scroll, sans surcharge
- [ ] Icônes/boutons homogènes
- [ ] Accessibilité (focus, contraste, reduced-motion)
- [ ] Rendu impeccable sur mobile en premier
