# Trouve ton artisan

Projet réalisé dans le cadre de ma formation en développement web.

Le site permet de trouver un artisan de la région Auvergne-Rhône-Alpes, de consulter sa fiche et de le contacter par formulaire.

## Site en ligne

https://51.77.144.158/

## Technologies utilisées

- React et React Router
- Bootstrap et Sass
- Node.js et Express
- MySQL et Sequelize
- Nodemailer pour l’envoi des emails
- Figma pour les maquettes

## Organisation du projet

- `frontend` : interface du site
- `backend` : API et envoi des emails
- `database` : scripts SQL de création et de remplissage
- `docs` : documentation et maquettes

## Prérequis

- Node.js 22.12 ou une version plus récente compatible avec Vite
- npm
- MySQL
- Git
- Un compte SMTP pour tester l’envoi des emails

## Installation

### 1. Récupérer le projet

```bash
git clone https://github.com/Sandra-Lng/devoir-trouve-ton-artisan.git
cd devoir-trouve-ton-artisan
```

### 2. Installer les dépendances

Dans le dossier `backend` :

```bash
cd backend
npm ci
```

Puis dans le dossier `frontend` :

```bash
cd ../frontend
npm ci
```

### 3. Créer la base de données

Dans MySQL Workbench, ouvrir et exécuter les fichiers dans cet ordre :

1. `database/creation.sql`
2. `database/remplissage.sql`

Le script de remplissage s’exécute une seule fois sur une base vide.

Créer ensuite un utilisateur MySQL pour l’application, avec uniquement le droit `SELECT` sur la base `trouve_ton_artisan`.

### 4. Configurer le backend

Copier `backend/.env.example` et nommer la copie `.env` dans le même dossier.

Adapter les valeurs à sa configuration :

- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER` et `DB_PASSWORD` : connexion MySQL.
- `PORT` : port du backend, généralement `3000` en local.
- `FRONTEND_URL` : `http://localhost:5173` en local.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` et `SMTP_PASSWORD` : connexion au serveur d’envoi des emails.
- `MAIL_FROM` : adresse utilisée pour envoyer les messages.
- `MAIL_TEST_TO` : adresse qui reçoit les messages pendant les tests.

Avec Gmail, `SMTP_PASSWORD` doit être un mot de passe d’application.

Le fichier `.env` contient des informations privées et ne doit pas être envoyé sur GitHub.

## Lancer le projet en local

Dans un premier terminal, depuis la racine du projet :

```bash
cd backend
npm start
```

Dans un second terminal, depuis la racine du projet :

```bash
cd frontend
npm run dev
```

Ouvrir l’adresse affichée par Vite, généralement http://localhost:5173.

Le backend écoute sur http://127.0.0.1:3000.

## Emails de test

Lorsque `MAIL_TEST_TO` est renseigné, tous les messages du formulaire sont envoyés à cette adresse de test.

Sans cette valeur, les messages sont envoyés à l’adresse de l’artisan enregistrée dans la base de données.

## Hébergement

Le site est hébergé sur un VPS OVH sous Ubuntu.

- Nginx sert les fichiers du frontend et transmet les requêtes `/api` au backend.
- PM2 maintient le backend en fonctionnement.
- MySQL stocke les catégories, les spécialités et les artisans.
- Le backend écoute sur `127.0.0.1:3001` sur le VPS.

Le site est accessible en HTTPS avec un certificat Let’s Encrypt renouvelé automatiquement. Les emails du formulaire sont redirigés vers une adresse de test.

## Vérifications effectuées

- Navigation entre les catégories et les fiches artisans.
- Rechargement direct d’une fiche artisan.
- Recherche avec et sans résultat.
- Affichage et menu sur téléphone.
- Champs obligatoires du formulaire.
- Envoi et réception d’un email depuis le site hébergé.
- Liens du footer vers les pages en construction.
- Affichage de la page 404 et du favicon.

## Vérification du code et des dépendances

Vérifications effectuées le 4 octobre 2026 :

- `npm run lint` dans le frontend : 0 erreur et 0 avertissement.
- `npm audit` dans le frontend : 0 vulnérabilité connue signalée.
- `npm audit` dans le backend : 0 vulnérabilité connue signalée.