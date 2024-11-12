// On demande et vérifie le nombre :
function checkNumber(numberOfMatches) {

    // Tant que le nombre n'est pas valide
    while (numberOfMatches === null || isNaN(numberOfMatches) || numberOfMatches > 6 || numberOfMatches < 0) {
        let message = "Donner un nombre à deviner entre 0 et 6: ";

        // On ajoute un message d'erreur si nécessaire
        if (numberOfMatches !== null && isNaN(numberOfMatches)) {
            message = "Erreur: Le nombre doit être entre 0 et 6. Réessayez :";
        }

        // On demande le nombre à l'utilisateur
        let userPrompt = prompt(message);
        numberOfMatches = parseInt(userPrompt);
    }

    // console.log(numberOfMatches)
    return numberOfMatches;
}

// Fonction principale du jeu
function gameMatches() {
    let numberMatchestoWin = 10;

    while (numberMatchestoWin > 0) {
        // Afficher l'état du jeu
        console.log(`\nIl reste ${numberMatchestoWin} allumettes`);

        // Demander le nombre d'allumettes à retirer
        let matchesToRemove = parseInt(prompt(`Combien d'allumettes voulez-vous retirer (1-6) ?`));

        // Vérifier si le nombre est valide
        if (!checkNumber(matchesToRemove)) {
            // console.log("Nombre invalide ! Vous devez retirer entre 1 et 6 allumettes.");
            continue;
        }

        // Vérifier si le joueur ne retire pas plus d'allumettes qu'il n'en reste
        if (matchesToRemove > numberMatchestoWin) {
            console.log(`Il ne reste que ${numberMatchestoWin} allumettes !`);
            continue;
        }

        // Retirer les allumettes
        numberMatchestoWin -= matchesToRemove;

        // Vérifier la victoire
        if (numberMatchestoWin === 0) {
            console.log(`\nFélicitations ! Vous avez gagné !`);
            break;
        }
    }
}

// Lancer le jeu
gameMatches();