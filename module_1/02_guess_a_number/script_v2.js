// Créer une fonction qui demande un nombre à deviner
function askNumber() {
    let number = null; // j'initialise la variable

    // Tant que le nombre n'est pas valide
    while (number === null || isNaN(number) || number > 50 || number < 0) {
        let message = "Joueur 1, donner un nombre à deviner entre 0 et 50: ";

        // On ajoute un message d'erreur si nécessaire
        if (number !== null && isNaN(number)) {
            message = "Erreur: Le nombre doit être entre 0 et 50. Réessayez :";
        }

        // On demande le nombre à l'utilisateur
        let userPrompt = prompt(message);
        number = parseInt(userPrompt);
    }

    return number;
}

// Je stocke le nombre à deviner ici :
const guessNumber = askNumber();
console.log("Le nombre à deviner est : ", guessNumber);

const givenNumber = () => {
    let userPrompt = prompt("Donner un nombre: ");
    console.log(`Variable userPrompt`, userPrompt);
    let number = parseInt(userPrompt);

    while (number !== guessNumber) {
        userPrompt = prompt("Essaie encore")
        number = parseInt(userPrompt)
        if (isNaN(number)) {
            alert("Erreur, la valeur n'est pas valide !")
        }
    }

    console.log("Variable number: ", number);
    return number
}

function didWin(guessNumber) {
    let userNumber = givenNumber();

    if (userNumber === guessNumber) {
        return true;
    } else {
        return false;
    }
}

function gamePlay(booleanWin) {
    booleanWin = didWin(guessNumber);

    if (booleanWin === true) {
        alert("Bravo, vous avez gagné !")
    } else {
        while (booleanWin === false) {
            givenNumber()
        }
    }
}

gamePlay();