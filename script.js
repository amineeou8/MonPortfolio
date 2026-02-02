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
