### Auteur

👤 **Guillaume Gruber**
👤 **Mehdi Lamtargi**
👤 **Lucas Cassan**
👤 **Clement Gras**

---

## 📎 Projet - My Digital School Open Source.

---

Initialisation d'un projet sur l'open source, pratique de NPM package.

### 💡 Bareme

- **_Fichier README.md_** (5 points) <br>
  Pouvoir lancer le projet en suivant la doc étape par étape <br>
  Mode de gouvernance choisi : Communautaire <br>

  Qui a fait quoi ? <br>
  **Guillaume Gruber** <br>
  Frontend : Base du projet, input d'image, et bouton fusion avec ses fonctionnalitées pour envoyer l'image fusionner au backend. <br>
  Backend : Base du projet, avec la mise en place de route puis la récupération de l'image du frontend.<br>
  BDD : Mise en place du serveur mongoDb. <br>
  Readme : Création du readme

  **Mehdi Lamtargi** <br>
  Frontend : Ajout de la fonction de merge d'image et son parametrage. <br>
  GitHub : Gestion des branches git et des merges <br>

  **Lucas Cassan** <br>
  Frontend : UX/UI, amélioration des fonctionnalitées de la fusion d'image. <br>
  GitHub : Création du projet sur GitHub

  **Clement Gras** <br>
  Backend : Ajout de la fonctionnalitée permettant de stocker l'image sur le serveur. <br>
  Interface CLI : Utilisation d'inquire pour lancer le projet

- **_Autres fichiers_** (3 points)<br>
  License<br>
  Code de conduite<br>
  Guide du contributeur : Améliorer ses compétences, se faire connaître<br>

- **_Npm ou Composer_** (4 points)<br>
  Publication de tout le projet ou une partie<br>

- **_UI/UX_** (5 points)<br>
  Qualité du design<br>
  Facilité d’utilisation<br>
  Autres idées créatives<br>

- **_Code_** (3 points)<br>
  Qualité du code<br>

---

## 🔨 Installation

Les fichiers du back-end du serveur pour le projet sont présents dans ce répo.

Vous aurez besoin d'avoir `Node` et `npm` installés localement sur votre machine.

Clonez ce dépôt: https://github.com/lagrube/MoviesAndMe.git

Se déplacer dans le dossier Front exécutez`npm install`, faire de même dans le dossier Back.
Dans le dossier Front/components/Log/Login.js; remplacer `http://172.20.10.2:5000/api/user/login` par votre adresse IP.
Dans le dossier Front/components/Log/Signup.js; remplacer `http://172.20.10.2:5000/api/user/signin` par votre adresse IP.
Vous pouvez ensuite exécuter le serveur avec `npm start`, dans le Front, puis faire de même dans le Back.

### 🔨 En résumé, pour faire fonctionner ce site

- Cloner ce repo
- Ouvrir le terminal sur le dossier du site
- Tapez en ligne de commande `npm install` côté Front et côté Back
- Modifier l'url des requête en front
- Puis tapez en ligne de commande `npm start` côté Front et côté Back

---
