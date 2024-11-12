let numberPromptUser1 = parseInt(prompt('Combien veux-tu retirer d\'allumettes ? Entre 1 et 6.'));
// console.log(numberPromptUser1);

let removedMatches = null;

// On vérifie la valeur renseignée dans le prompt :
checkNumber = (matches) => {

    // if (matches >= 1 && matches <= 6) { // Entre 1 et 6
    //     console.log(`Chiffre rentré dans le prompt: ${matches}`);
    //     return matches;
    // } else {
    //     alert('Rentre un numéro entre 1 et 6.');
    //     numberPromptUser1 = parseInt(prompt('Il faut un nombre entre 1 et 6'));
    // }

    // Tant que le nombre n'est pas valide
    while (matches === null || isNaN(matches) || matches > 6 || matches < 0) {
        let message = "Donnez un nombre entre 0 et 6: ";

        // On ajoute un message d'erreur si nécessaire
        if (matches !== null && isNaN(matches)) {
            message = "Erreur: Le nombre doit être entre 0 et 6. Réessayez !";
        }

        // On demande le nombre à l'utilisateur
        let userPrompt = prompt(message);
        matches = parseInt(userPrompt);
    }

    return matches;
}

removeMatch = (matchesLevel1) => {
    // Nombre d'allumettes à supprimer :
    const removingMatches = 50;
    // console.log(removingMatches);

    // On vérifie le nombre :
    checkNumber(matchesLevel1);

    // On retire le nombre d'allumettes aux allumettes à supprimer :
    let remainingMatches = removingMatches - matchesLevel1;
    console.log(remainingMatches);
}

removeMatch(numberPromptUser1);