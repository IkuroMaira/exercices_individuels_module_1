import {dossierPrincipal} from "./dossierPrincipal.js";

// console.log(dossierPrincipal);

// Afficher le nom du dossier
//  - Créer la function afficherDossier
function afficherDossier() {
    console.log(">", dossierPrincipal.nom); // Ada => niveau 0
}

afficherDossier();

// console.log(dossierPrincipal.contenu); // niveau 1
// console.log(dossierPrincipal.contenu[0].contenu[0].nom); // niveau 2
// console.log(dossierPrincipal.contenu[0].contenu[0].contenu[0].nom) // niveau 3

// TODO étape 2: Créer deux fonctions qui afficheront les dossiers et le fichier le dossier Ada
function afficherDossierIteractif() {
    // Ce premier essai n'est finalement pas très pratique avec la boucle for of
    for (const elementSecondary of dossierPrincipal.contenu) {
        console.log(elementSecondary.nom);
    }

    for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
        console.log(dossierPrincipal.contenu[i].nom);
        // for (let i = 0; i < dossierPrincipal.contenu.length; i++) {
        //     console.log(dossierPrincipal.contenu[i].contenu[i].nom);
        // }
    }
}

afficherDossierIteractif();

// console.log(">", dossierPrincipal.nom);
//
// function afficherDossierRecursif(i, array) {
//     // console.log(dossierPrincipal.contenu[0].nom);
//     // console.log(dossierPrincipal.contenu[1].nom);
//     // console.log(array.nom.length);
//
//     console.log(dossierPrincipal.contenu[i].nom);
//
//     if (i === array.nom.length) {
//         return;
//     }
//
//     afficherDossierRecursif(i + 1, dossierPrincipal);
// }
//
// afficherDossierRecursif(0, dossierPrincipal);

// TODO étape 3 compléter la function pour afficher les dossiers de 3ème niveau