# Checklists de contrôle final

Légende : 🔴 = **bloquant** (NO-GO si échoue) · 🟡 = recommandé (réserve) · ✅ = à cocher.

## A. Technique 🔴
- 🔴 `npx tsc --noEmit` sans erreur
- 🔴 `npm run lint` sans erreur
- 🔴 `npm run build` réussit
- 🔴 Toutes les pages répondent **HTTP 200** ; la **404** fonctionne
- 🟡 Aucune erreur console au chargement
- 🟡 Images en WebP + `sizes` renseigné (perf)

## B. SEO 🔴/🟡
- 🔴 **1 seul `<h1>` par page**, et le H1 de l'accueil contient le mot-clé local (« [Métier] à [Ville] »)
- 🔴 **Titres uniques** par page + suffixe marque (pas de double suffixe)
- 🔴 **Canonical propre par page** et **PAS** vers un domaine inexistant
- 🔴 `sitemap.xml` (pages indexables), `robots.txt` cohérents avec l'URL réelle
- 🔴 Données structurées présentes (LocalBusiness adapté au secteur + WebSite + FAQ + horaires)
- 🔴 **Toutes les images ont un `alt`**
- 🟡 Meta descriptions présentes (110–160 caractères)
- 🟡 OpenGraph + favicon = logo, image de partage soignée
- 🟡 Pages légales en `noindex`, communes voisines en contenu visible

## C. Conversion 🔴/🟡 (cf. conversion.md)
- 🔴 CTA principal + **téléphone cliquable** visibles au-dessus de la ligne de flottaison
- 🔴 **Barre d'appel fixe mobile** (si activée) fonctionnelle
- 🔴 Formulaire : champs minimum + réassurance sous le bouton + **alternative téléphone**
- 🟡 Note Google / avis présents près d'un CTA
- 🟡 Avant/après visible sur l'accueil ; FAQ anti-objections ; « devis gratuit » répété

## D. Design 🟡 (cf. design-excellence.md)
- 🟡 Rendu impeccable **mobile ET desktop** (faire des captures)
- 🟡 Rythme/espace cohérents, hiérarchie typo, accent brand réservé aux actions
- 🟡 Micro-interactions au survol **et** au toucher ; reveal au scroll
- 🟡 Contrastes AA, états focus visibles, `prefers-reduced-motion` respecté

## E. Contenu 🔴
- 🔴 **Aucun `[à compléter]` visible** : `grep -rn "à compléter" src/` = 0 résultat
- 🔴 Aucun texte de remplissage (lorem, fausses données inventées)
- 🔴 Téléphone / email / horaires **exacts**
- 🟡 Textes « À propos » personnalisés, photos réelles

## F. Légal 🔴 (BLOQUANT — cf. legal.md)
- 🔴 Mentions légales complètes : forme juridique, SIRET/SIREN, RCS **ou** RM + ville,
  adresse du siège, directeur de publication, **hébergeur**
- 🔴 **Assurance décennale + RC Pro** renseignées **si secteur bâtiment**
- 🔴 Politique de confidentialité (RGPD) présente + consentement sous le formulaire
- 🔴 **Médiateur de la consommation** indiqué **si clients particuliers**
- 🟡 N° TVA (ou « TVA non applicable, art. 293 B du CGI ») ; qualifications (RGE/Qualibat)
- 🟡 Mention cookies (bandeau requis seulement si traceurs non essentiels)

## G. Déploiement 🔴 (au moment de la mise en ligne)
- 🔴 `siteConfig.url` = **URL réelle** (domaine branché, ou URL Vercel en attendant)
- 🔴 Variables Resend configurées sur Vercel + **formulaire testé** (email bien reçu)
- 🟡 Domaine branché + fiche Google cohérente (horaires, zone) + lien du site

---

## Recette de crawl (vérif automatique)
```bash
npm run build && (npm run start -- -p 3000 &) && sleep 6
for p in "/" "/services" "/a-propos" "/contact" "/mentions-legales" "/politique-de-confidentialite"; do
  echo "== $p =="
  curl -s "http://localhost:3000$p" | grep -oE '<title>[^<]*</title>|rel="canonical" href="[^"]*"|name="robots" content="[^"]*"'
done
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]*</loc>'
grep -rn "à compléter" src/ | wc -l   # doit être 0 avant livraison
```

## Format du verdict à rendre
```
VERDICT : ✅ GO  /  🟡 GO avec réserves  /  🔴 NO-GO
Bloquants (🔴) : [liste]
Réserves (🟡)  : [liste]
Actions pour livrer : [liste ordonnée]
```
