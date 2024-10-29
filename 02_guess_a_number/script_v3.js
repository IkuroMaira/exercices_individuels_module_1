// 1. créer un variable qui récupère le bouton "Valider le nombre à trouver" :
const btnSubmitNumber = document.getElementById('submitNumber')
console.log(btnSubmitNumber) // OK

// Ajouter un évènement au click sur le bouton "Valider le nombre à trouver" :
btnSubmitNumber.addEventListener('click', function () {
    // Récupérer un input :
    let getGuessNumber = document.getElementById('guessNumber');

    const inputValue = parseInt(getGuessNumber.value);
    console.log("La valeur de l'input est ", inputValue);

    // Je stocke le nombre à deviner ici :
    const guessNumber = askNumber(inputValue);
    console.log("Le nombre à deviner est : ", guessNumber);

    if (guessNumber !== null) {
        getGuessNumber.disabled = true;
        btnSubmitNumber.disabled = true;
    }

    // Je remet "à zéro" l'input pour le nombre à deviner
    document.getElementById('guessNumber').value = ''
})

// Créer une fonction qui demande un nombre à deviner
function askNumber(number) {

    // Si number n'est pas valide ...
    if (number === null || isNaN(number) || number > 50 || number < 0) {
        document.getElementById('errorPlayeur1').textContent = "Joueur 1, donner un nombre à deviner entre 0 et 50:";
        return null
    } else {
        document.getElementById('successMessagePlayer1').textContent = "Joueur 1, le nombre est bon !";
        document.getElementById('errorPlayeur1').textContent = '';
        return number
    }
}

// const givenNumber = () => {
//     let userPrompt = prompt("Donner un nombre: ");
//     console.log(`Variable userPrompt`, userPrompt);
//     let number = parseInt(userPrompt);
//
//     while (number !== guessNumber) {
//         userPrompt = prompt("Essaie encore")
//         number = parseInt(userPrompt)
//         if (isNaN(number)) {
//             alert("Erreur, la valeur n'est pas valide !")
//         }
//     }
//
//     console.log("Variable number: ", number);
//     return number
// }

// function didWin(guessNumber) {
//     let userNumber = givenNumber();
//
//     if (userNumber === guessNumber) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function gamePlay(booleanWin) {
//     booleanWin = didWin(guessNumber);
//
//     if (booleanWin === true) {
//         alert("Bravo, vous avez gagné !")
//     } else {
//         while (booleanWin === false) {
//             givenNumber()
//         }
//     }
// }
//
// gamePlay();