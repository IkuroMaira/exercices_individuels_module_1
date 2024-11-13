// Demander comment savoir quand on a une fonction => une fonctionnalité

// DOM :
const input = document.querySelector('#input-number');
// console.log(input);
const btn = document.querySelector('#btn-validate');
// console.log(btn);
const divMessage = document. querySelector('.div-message');

let givenNumberMatches = null;

// Je récupère la valeur de l'input par un écouteur d'évènement sur le bouton valider
btn.addEventListener('click', () =>
{
    givenNumberMatches = input.value;
    console.log(`Valeur validéé: ${givenNumberMatches}`);

    console.log(checkNumber(givenNumberMatches));
})

// Je veux vérifier que la valeur est bien ente 1 et 6

checkNumber = (number) => {
    let message = document.createElement('p');
    if (number >= 1 && number<= 6) {
        console.log('Le nombre est entre 1 et 6.');

        // Affichage du message :
        message.textContent = 'Le nombre est entre 1 et 6.';
        divMessage.appendChild(message);
    } else {
        console.log('Veuillez entrer un nombre entre 1 et 6.');

        // Affichage du message :
        message.textContent = 'Veuillez entrer un nombre entre 1 et 6.';
        divMessage.appendChild(message);
    }
}