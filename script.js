// 1. On récupère le bouton dans le HTML
const toggleButton = document.getElementById('theme-toggle');

// 2. On écoute l'événement "click" sur ce bouton
toggleButton.addEventListener('click', () => {

    // 3. On ajoute ou on enlève la classe 'light-mode' au <body>
    document.body.classList.toggle('light-mode');

    // 4. Bonus : On change l'icône du bouton en fonction du mode
    if (document.body.classList.contains('light-mode')) {
        toggleButton.textContent = '🌙'; // Lune pour repasser en sombre
    } else {
        toggleButton.textContent = '☀️'; // Soleil pour passer en clair
    }
});

// Petit bonus : Message dans la console pour prouver que le JS charge bien
console.log("Le script est chargé ! Prêt à switcher de thème.");



// --- 5. Appel au Backend Java ---
// On définit l'adresse de ton API locale
const apiUrl = 'http://localhost:8080/test';

// On cible l'endroit où afficher le message
const messageElement = document.getElementById('api-message');

// On lance la requête
fetch(apiUrl)
    .then(response => {
        // Si le serveur répond (même une erreur), on transforme la réponse en texte
        return response.text();
    })
    .then(data => {
        // 'data' contient maintenant le texte "Connexion réussie..." envoyé par Java
        messageElement.textContent = "✅ " + data;
        messageElement.style.color = "#2ecc71"; // Vert succès
    })
    .catch(error => {
        // Si le serveur est éteint ou inaccessible
        console.error('Erreur backend:', error);
        messageElement.textContent = "❌ Le serveur Java ne répond pas (est-il allumé ?)";
        messageElement.style.color = "#e74c3c"; // Rouge erreur
    });


    // --- 6. Gestion du Formulaire de Contact ---
const contactForm = document.getElementById('formulaire-contact');
const responseDiv = document.getElementById('reponse-serveur');

contactForm.addEventListener('submit', function(event) {
    // 1. On empêche le rechargement de la page (comportement par défaut du HTML)
    event.preventDefault();

    // 2. On récupère les données des champs
    const donnees = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // 3. On envoie tout ça au serveur Java
    fetch('http://localhost:8080/contact', {
        method: 'POST', // Méthode pour ENVOYER des données
        headers: {
            'Content-Type': 'application/json' // On prévient Java qu'on envoie du JSON
        },
        body: JSON.stringify(donnees) // On transforme l'objet JS en texte JSON
    })
    .then(response => response.text())
    .then(data => {
        // 4. On affiche la réponse de Java
        responseDiv.textContent = "✅ " + data;
        responseDiv.style.color = "green";
        
        // Optionnel : vider le formulaire
        contactForm.reset();
    })
    .catch(error => {
        console.error('Erreur:', error);
        responseDiv.textContent = "❌ Erreur lors de l'envoi.";
        responseDiv.style.color = "red";
    });
});