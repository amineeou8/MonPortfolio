# Portfolio Full Stack - Amine

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet démontre mes compétences en développement Web Full Stack, allant de l'intégration Frontend à la gestion d'API Backend en Java.

## Technologies Utilisées

### Frontend (Interface)
* **HTML5** : Structure sémantique et accessible.
* **CSS3** : Design moderne avec **Flexbox** et **Grid Layout**. Gestion des thèmes (Dark/Light Mode) via variables CSS.
* **JavaScript (ES6+)** : Manipulation du DOM et communication asynchrone (`fetch`) avec l'API.

### Backend (Serveur)
* **Java 17 (LTS)** : Langage principal.
* **Spring Boot 3** : Framework pour la création de l'API REST.
* **Maven** : Gestion des dépendances et du build.

---

## Fonctionnalités Clés

1.  **Responsive Design** : Le site s'adapte parfaitement aux mobiles et bureaux.
2.  **Dark Mode** : Bascule dynamique entre thème clair et sombre (persistant).
3.  **Système de Contact Full Stack** :
    * Le formulaire HTML envoie les données en JSON.
    * L'API Java reçoit la requête **POST**.
    * Le serveur traite les données et renvoie une confirmation en temps réel.

---

## Architecture du Projet

Le projet est divisé en deux parties :
* `index.html / style.css / script.js` : Le client (Frontend).
* `/portfolio-api` : Le serveur (Backend Spring Boot).

---

## 💻 Comment lancer le projet en local ?

Pour tester la communication entre le site et le serveur Java, suivez ces étapes :

### 1. Prérequis
* Avoir **Java 17** installé.
* Avoir Git.

### 2. Installation
Clonez le dépôt :

    git clone [https://github.com/amineeou8/MonPortfolio.git](https://github.com/amineeou8/MonPortfolio.git)
    cd MonPortfolio

### 3. Démarrer le Backend (Java)
Ouvrez un terminal dans le dossier portfolio-api et lancez le serveur :

    cd portfolio-api
    ./mvnw spring-boot:run

Le serveur démarrera sur http://localhost:8080.

### 4. Lancer le Frontend
Ouvrez simplement le fichier index.html dans votre navigateur. Testez le formulaire de contact : les logs s'afficheront dans votre terminal Java !
La version en ligne sur GitHub Pages est une version statique. Le formulaire de contact nécessite que le serveur Java tourne sur votre machine locale (localhost) pour fonctionner.

👤 Auteur : 

Amine 
