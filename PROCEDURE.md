# 📖 Procédure — Créer et livrer un site d'artisan de A à Z

Guide pour utiliser nos skills. À suivre pour chaque client. Nos **3 skills** :

| Tape… | Il fait… |
|---|---|
| **`/suivi-client`** | Gère le client : dossier, avancement, ce qui manque, messages, **reprise d'un site déjà commencé** |
| **`/site-artisan`** | Construit le site (design + conversion + SEO + **GEO** + pages prestation locales + légal) |
| **`/controle-final`** | Vérifie tout avant de livrer (technique + **audit SEO systématique** + légal) → GO / NO-GO |

➕ **Plugin optionnel `claude-seo`** (audit SEO poussé) — voir § Plugin plus bas.

---

## ⚙️ Mise en place (une seule fois — DÉJÀ FAIT)
- ✅ Dépôt `site-artisan-template` créé avec les 3 skills + marqué « Template repository ».

---

## 🔁 A. Pour un NOUVEAU client

1. **Créer le repo** : GitHub → `site-artisan-template` → **« Use this template »** → nommer `nom-du-client`.
2. **Ouvrir Claude Code sur le repo du client.**
3. **Lancer** : `/suivi-client` → dire **« nouveau client »** → il crée le dossier et démarre le questionnaire.
4. **Répondre au questionnaire** (le **secteur d'abord** → règle le SEO). Collecter auprès de l'artisan :
   - Secteur, nom, ville, valeurs, cible
   - **Logo** + **photos** (avant/après si possible)
   - Prestations, zone d'intervention + rayon, horaires
   - Téléphone, email, réseaux, **lien avis Google** (+ note)
   - **Infos légales** : SIRET/SIREN, forme juridique, assurance, adresse, hébergeur,
     **directeur de publication (nom du gérant)**, **médiateur conso** (si particuliers)
5. **Construction** : `/suivi-client` appelle `/site-artisan` (ou lance-le direct). Il génère :
   design premium, conversion, **SEO + GEO** (llms.txt, robots IA, schéma enrichi),
   **une page par prestation** (`/[service]-[ville]`), pages légales.
6. **Boost SEO (optionnel)** : si `claude-seo` installé → `/seo audit`, `/seo local`, `/seo maps`.
7. **Contrôle final** : `/controle-final` → ✅ GO / 🟡 réserves / 🔴 NO-GO. Corriger les bloquants.
8. **Mise en ligne** (voir § Déploiement).
9. **Après livraison** : demander un **avis Google**, proposer la **maintenance** (20–50 €/mois).

---

## 🔁 B. Pour un client EXISTANT (déjà suivi)
- `/suivi-client` → « où en est [nom] ? » / « qu'est-ce qui manque pour [nom] ? » / « relance [nom] ».
- Il lit le dossier, dit l'état, génère les messages, continue la construction ou déploie.

---

## 🔁 C. Site DÉJÀ COMMENCÉ mais pas suivi (reprise / oublié)
Quand un site a été **démarré ou construit sans passer par « nouveau client »**.
- `/suivi-client` → dire **« j'ai déjà commencé un site, reprise »**.
- Il **crée le dossier rétroactivement** (à partir du code existant), **audite l'existant**
  (`/controle-final`), **compare au standard actuel** et liste ce qui manque — notamment les
  ajouts récents : **GEO**, **pages prestation locales**, **légal complet**, fonctionnalités.
- Il **met à niveau** via `/site-artisan` (retrofit, sans repartir de zéro), puis repasse
  `/controle-final` jusqu'au ✅ GO.

---

## 🚀 Déploiement (Vercel)
1. vercel.com → **Add New Project** → importer le repo du client → **Deploy**.
2. **Branche de production** : Settings → Environments → Production → **Branch Tracking = `main`**
   (bien écrire `main`, sans faute). Sinon les push ne se déploient pas.
3. **Root Directory** : Settings → General → **laisser vide** (racine du repo).
4. **Formulaire** : Settings → Environment Variables → ajouter `RESEND_API_KEY`,
   `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` → **Redeploy** → **tester le formulaire en vrai**.
5. **URL** : mettre `siteConfig.url` = **URL réelle** (Vercel ou domaine). Un domaine inexistant
   casse le SEO **et** le GEO.

---

## 🔌 Plugin `claude-seo` (audit SEO poussé — optionnel)
- **Ne s'installe QUE dans le terminal Claude Code** (PC/Mac) — **pas** sur le web ni le mobile
  (sandbox → `/plugin` désactivé).
- Installer (dans un terminal) :
  ```
  npm install -g @anthropic-ai/claude-code
  claude
  /plugin marketplace add https://github.com/AgriciDaniel/claude-seo   # URL HTTPS (évite l'erreur SSH)
  /plugin install claude-seo                                            # choisir « user scope »
  ```
- Une fois installé, `/controle-final` et `/site-artisan` l'utilisent automatiquement.
- **Pas obligatoire** : sans lui, `/controle-final` fait l'audit à la main (7 catégories, score /100).

---

## 💬 Phrases utiles
- « nouveau client [nom] » · « j'ai déjà commencé un site, reprise »
- « où en est [nom] ? » · « qu'est-ce qui manque pour [nom] ? » · « relance [nom] »
- « liste mes clients » · « c'est bon pour livrer ? » (lance le contrôle final)

## ⚠️ À ne jamais oublier
- **Légal = bloquant** avant publication (directeur de publication, médiateur conso si particuliers).
- **Ne pas inventer** d'infos → demander au client (placeholder `[à compléter]` visible).
- Tester le **formulaire** en vrai après déploiement.
- `siteConfig.url` = **vraie URL** (sinon SEO/GEO cassés).
- Une **variante de design = un seul client**.
