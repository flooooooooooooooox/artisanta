# Guide de déploiement (Vercel + Resend + domaine)

À faire après génération, avec le client. Étapes guidées, pas à pas.

## 1. Mise en ligne sur Vercel
1. Pousser le code sur un dépôt GitHub.
2. vercel.com → « Add New… Project » → importer le dépôt.
3. Framework détecté : Next.js → « Deploy ». Le site est en ligne sur `…vercel.app`.

## 2. Formulaire → email (Resend)
1. Créer un compte sur **resend.com** avec **l'email de réception du client** (astuce : sans
   domaine vérifié, l'expéditeur de test `onboarding@resend.dev` ne délivre que vers l'adresse
   du compte Resend).
2. Resend → API Keys → créer une clé (`re_…`).
3. Vercel → projet → **Settings → Environment Variables**, ajouter (cocher Production + Preview) :
   - `RESEND_API_KEY` = la clé
   - `CONTACT_TO_EMAIL` = email de réception
   - `CONTACT_FROM_EMAIL` = `NOM <onboarding@resend.dev>`
4. Vercel → **Deployments → ⋯ → Redeploy** (les variables ne s'activent qu'au redéploiement).
5. Tester le formulaire en ligne, vérifier la boîte mail (+ dossier Spam) et les logs Resend.

## 3. Nom de domaine
1. Acheter le domaine (OVH, Gandi, Namecheap… ~10 €/an).
2. Vercel → projet → **Settings → Domains** → ajouter le domaine → suivre les enregistrements DNS.
3. Mettre à jour `siteConfig.url` dans `site-data.ts` avec le domaine final (impacte canonical,
   sitemap, robots, OpenGraph). Committer + redéployer.
4. Une fois le domaine vérifié dans Resend, passer à un expéditeur pro (`contact@domaine`) et
   basculer `CONTACT_TO_EMAIL` vers l'adresse pro.

## ⚠️ Point critique SEO
Tant que le site tourne sur `…vercel.app` mais que `siteConfig.url` pointe vers le domaine final
non encore actif, **le canonical et le sitemap pointent vers un domaine qui n'existe pas** →
Google n'indexera pas correctement. Deux options :
- brancher le vrai domaine rapidement, **ou**
- mettre temporairement `siteConfig.url` = l'URL `…vercel.app` réelle, le temps d'avoir le domaine.

## 🔐 Sécurité
Ne jamais committer les clés (`.env.local` est gitignoré ; `.env.example` sert de modèle).
Si une clé a été exposée, la régénérer dans Resend et la remplacer sur Vercel.

## ✅ Checklist « prêt à publier »
- [ ] Mentions légales complètes (SIRET, forme juridique, assurance, adresse, hébergeur)
- [ ] Formulaire testé (email bien reçu)
- [ ] Téléphone cliquable OK
- [ ] Domaine branché + `siteConfig.url` à jour
- [ ] Fiche Google Business cohérente (horaires, zone) et liée au site
- [ ] `npm run build` sans erreur
