// Demander comment savoir quand on a une fonction => une fonctionnalité

// DOM :
const input = document.querySelector('#input-number');
// console.log(input);
const btn = document.querySelector('#btn-validate');
// console.log(btn);

// Je récupère la valeur de l'input par un écouteur d'évènement sur le bouton valider
btn.addEventListener('click', () =>
{
    let givenNumberMatches = input.value;
    console.log(`Valeur validéé: ${givenNumberMatches}`);
})