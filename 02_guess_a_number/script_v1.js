// ÉTAPE 1 : demander un nombre et le récupérer
// let givenNumber = prompt("Donner un nombre au hasard : ");
// console.log(givenNumber);

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

// Créer une fonction qui demande un nombre
// function givenNumber() {
//     let userPrompt = prompt("Donner un nombre au hasard : ");
//     let number = parseInt(userPrompt);
//
//     // Vérifie si la conversion a réussi (si ce n'est pas NaN)
//     if (isNaN(number)) {
//         console.log("Ce n'est pas un nombre valide.");
//         return null; // Retourne un message d'erreur
//     }
//
//     return number;
// }

// console.log("Fonction givenNumber: ", givenNumber());

// function givenNumber(   ) {
//     let number = null;
//     // let userPrompt = prompt("Joueur 2 ,donner un nombre: ");
//
//     while (number === null ) {
//         let userPrompt = prompt("Joueur 2 ,donner un nombre: ");
//
//         if (number !== guessNumber) {
//             let message = "Le nombre n'est pas valide !"
//             userPrompt = prompt(message);
//             number = parseInt(userPrompt);
//         } else if (number === guessNumber) {
//             alert("Bravo")
//         }
//     }
//
//     return number
// }

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

// console.log("Le nombre donné est: ", givenNumber());

// ÉTAPE 2 :

// Je stocke le nombre donné par le joueur 2 ici :
// let userNumber = givenNumber();
// console.log(userNumber());

// Va indiquer si on se rapproche de 22
// function didWin(userNumber) {
//
//     if (userNumber < 22) {
//         alert("Plus grand");
//         // getDiv.innerText = "Plus grand";
//     } else if (userNumber > 22) {
//         alert("Plus petit");
//     } else if (userNumber === 22) {
//         alert("Bravo !")
//     } else if (userNumber === null) {
//         alert("La valeur est incorrecte.");
//     }
// }


// function didWin(userNumber, guessNumber) {
//     if (userNumber !== guessNumber) {
//         return false;
//     } else {
//         return true;
//     }
// }

function didWin(guessNumber) {
    let userNumber = givenNumber();

    if (userNumber === guessNumber) {
        return true;
    } else {
        return false;
    }
}

// TEST didWIN en console
// didWin(90);
// didWin(22);
// didWin(9);

// // J'appelle givenNumber pour obtenir le nombre et passer ce nombre à didWin
// let booleanWin = didWin(userNumber);
// let booleanWin = didWin(guessNumber);

// function gamePlay(booleanWin) {
//     if (booleanWin === true) {
//         return getH1.innerText = "Bravo, le jeu est fini !"
//     } else {
//         givenNumber()
//     }
// }
// Le problème c'est que le jeu s'arrête quand même après que la fenêtre de la fonction givenNumber réapparaît

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
// Le problème c'est que il continue de me demander un numéro => résolu

// ÉTAPE 3 :
// console.log("Fonction didWin: ", didWin(userNumber)); // retourne true quand givenNumber = 22 et false sinon
// console.log("Fonction gamePlay", gamePlay());
// Affiche une nouvelle fois la fenêtre de givenNumber (booleanWin = false), stope et affiche la fin du jeu (boolean = true)
gamePlay();

// Je créé une div qui affiche le message :
// const getParagrapheErrorPlayer1 = document.getElementById("errorPlayer1");

// ÉTAPE 4 : ajouter un joueur voir en haut de la page

// ÉTAPE 5 : afficher le range et le nombre de tentative