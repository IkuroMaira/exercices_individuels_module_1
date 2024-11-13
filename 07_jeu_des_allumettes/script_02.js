// Demander comment savoir quand on a une fonction => une fonctionnalité

// DOM :
const input = document.querySelector('#input-number');
const btn = document.querySelector('#btn-validate');
const divMessage = document. querySelector('.div-message');

let givenNumberMatches = null;
let matchesToRemove = 10;
let numberOfMatchesToDelete = null;

// Lorsque je clique sur le bouton valider
// Je récupère la valeur de l'input par un écouteur d'évènement sur le bouton valider
btn.addEventListener('click', () =>
{
    givenNumberMatches = parseInt(input.value);
    // console.log(givenNumberMatches);
    console.log(`Valeur validéé: ${givenNumberMatches}`);

    checkNumber(givenNumberMatches);
})

// Je veux vérifier que la valeur est bien ente 1 et 6
checkNumber = (number) => {
    let message = document.createElement('p');
    if (number >= 1 && number<= 6) {
        console.log('Le nombre est entre 1 et 6.');

        // Affichage du message :
        message.textContent = 'Le nombre est entre 1 et 6.';
        divMessage.appendChild(message);

        // Si les conditions sont remplies, je stocke dans une variable :
        numberOfMatchesToDelete += number;
        console.log(`La valeur stockée: ${numberOfMatchesToDelete}`);
    } else {
        console.log('Veuillez entrer un nombre entre 1 et 6.');

        // Affichage du message :
        message.textContent = 'Veuillez entrer un nombre entre 1 et 6.';
        divMessage.appendChild(message);

        // Si les condition ne sont pas remplies, je ne remplie pas la variable.
        // Je ne mets pas la variable à zéro pour ne pas perdre les valeurs entrée précédemment.
        console.log(`La valeur stockée: ${numberOfMatchesToDelete}`);
    }
}