package com.amine.portfolio_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin // Autorise ton site web à parler à ce serveur
public class PortfolioController {

    // --- Méthode existante (Test) ---
    @GetMapping("/test")
    public String testerConnexion() {
        return "Connexion réussie : Le Backend Java répond ! 🚀";
    }

    // --- Nouvelle méthode (Formulaire de contact) ---
    // Elle est bien À L'INTÉRIEUR des accolades de la classe
    @PostMapping("/contact")
    public String recevoirContact(@RequestBody ContactForm formulaire) {
        System.out.println("----------------------------------------------");
        System.out.println("NOUVEAU MESSAGE REÇU ! 📩");
        System.out.println("De : " + formulaire.nom);
        System.out.println("Email : " + formulaire.email);
        System.out.println("Message : " + formulaire.message);
        System.out.println("----------------------------------------------");
        
        return "Merci " + formulaire.nom + ", j'ai bien reçu ton message !";
    }

} // <--- C'est ici que la classe se termine vraiment