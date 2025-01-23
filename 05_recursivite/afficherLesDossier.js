import {dossierPrincipal} from "./dossierPrincipal.js";

// console.log(dossierPrincipal);

// Afficher le nom du dossier
//  - Créer la function afficherDossier
function afficherDossier() {
    console.log(">", dossierPrincipal.nom); // Ada
}

afficherDossier();

// TODO étape 2: Créer deux fonctions qui afficheront les dossiers et le fichier le dossier Ada
function afficherDossierIteractif() {
    for (const elementSecondary of dossierPrincipal.contenu) {
        console.log(elementSecondary.nom);
    }
}

afficherDossierIteractif();

console.log(">", dossierPrincipal.nom);

function afficherDossierRecursif(i, array) {
    // console.log(dossierPrincipal.contenu[0].nom);
    // console.log(dossierPrincipal.contenu[1].nom);
    // console.log(array.nom.length);

    console.log(dossierPrincipal.contenu[i].nom);

    if (i === array.nom.length) {
        return;
    }

    afficherDossierRecursif(i + 1, dossierPrincipal);
}

afficherDossierRecursif(0, dossierPrincipal);

// TODO étape 3 compléter la function pour afficher les dossiers de 3ème niveau