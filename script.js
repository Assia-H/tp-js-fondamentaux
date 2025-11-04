 console.log("Laboratoire prêt !");

 const nom = "Assia";
 let age = 17;
 //nom = "Autre"
 //script.js:6  Uncaught TypeError: Assignment to constant variable.

 age = 18;
 console.log(age);

 const motDePasseAttendu = "Secret123";
 let motDePasseUtilisateur = "12345";

 if (motDePasseAttendu === motDePasseUtilisateur) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length < 8) {
     console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
        console.log("Accès refusé. Mot de passe incorrect.");
}
