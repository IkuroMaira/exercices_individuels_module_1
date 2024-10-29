const btnSubmitNumber = document.getElementById('submitNumber')
const btnValidateGuess = document.getElementById('validateGuess')

let guessNumber = null;
let proposedNumber = null;

function askNumber(number) {

    if (number === null || isNaN(number) || number > 50 || number < 0) {
        document.getElementById('errorPlayeur1').textContent = "Joueur 1, donner un nombre à deviner entre 0 et 50:";
        return null
    } else {
        document.getElementById('successMessagePlayer1').textContent = "Joueur 1, le nombre est bon !";
        document.getElementById('errorPlayeur1').textContent = '';
        return number
    }
}

btnSubmitNumber.addEventListener('click', function () {

    let getGuessNumber = document.getElementById('guessNumber');

    const inputValue1 = parseInt(getGuessNumber.value);
    console.log("La valeur de l'input 1 est ", inputValue1);

    guessNumber = askNumber(inputValue1);
    console.log("Le nombre 1 à deviner est : ", guessNumber);

    if (guessNumber !== null) {
        getGuessNumber.disabled = true;
        btnSubmitNumber.disabled = true;
    }

    document.getElementById('guessNumber').value = ''
})

function givenNumber(number) {

    if (isNaN(number)) {
        document.getElementById('errorPlayer2').innerText = 'Essaie encore'
        return null
    } else {
        return number
    }
}

btnValidateGuess.addEventListener('click', () => {

    // Ajouter un blocage tant que le premier joueur n'a pas mis son nombre
    if (guessNumber === null) {
        document.getElementById('errorPlayer2').innerText = "Le premier joueur n'a pas encore choisi de nombre.";
        return;
    }

    let getInputGivenNumber = document.getElementById('userGuess');

    const inputValue2 = parseInt(getInputGivenNumber.value);
    console.log("La valeur de l'input 2 est ", inputValue2);

    proposedNumber = givenNumber(inputValue2);
    console.log("Le nombre 2 donné est : ", proposedNumber);

    document.getElementById('userGuess').value = ''
})

// function didWin() {
//
//     if (proposedNumber === guessNumber) {
//         console.log("Bravo")
//         return true;
//     } else {
//         console.log("Oh non")
//         return false;
//     }
// }

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