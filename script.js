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

const moi = {
    prenom: "Assia",
    nom: "HADJERIS",
    age: 19,
    competences: ["HTML", "CSS"]
};
console.log("Je m'appelle" + " " + moi.prenom + " " + moi.nom);

const notes = [12, 15, 9, 18];
for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}

const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];
