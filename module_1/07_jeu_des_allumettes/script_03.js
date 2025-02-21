// AVEC DEUX JOUEURS :
// ___________________________

// DOM :
const input = document.querySelector('#input-number');
const validateBtn = document.querySelector('#btn-validate');
const replayBtn = document.querySelector('#btn-replay');
const textPlayer = document.querySelector('#text-player');

const divMessage = document. querySelector('.div-messages');
const btnContainer = document.querySelector('.buttons-container');

let givenNumberMatches = null;
let matchesToRemove = 10;
let numberOfMatchesToDelete = null;
let currentPlayer = 1;

// On indique le tour du joueur :
textPlayer.innerText = `C'est au joueur ${currentPlayer} de commencer.`;

// Lorsque je clique sur le bouton valider
// Je récupère la valeur de l'input par un écouteur d'évènement sur le bouton valider
validateBtn.addEventListener('click', () =>
{
    givenNumberMatches = parseInt(input.value);
    // console.log(givenNumberMatches);
    console.log(`Valeur validéé: ${givenNumberMatches}`);

    // On vide l'input :
    input.value = '';

    checkNumber(givenNumberMatches);
})

// Je veux vérifier que la valeur est bien ente 1 et 6
const checkNumber = (number) => {

    if (number >= 1 && number<= 6) {
        console.log('Le nombre est entre 1 et 6.');

        // Changer de joueur
        // version courte : currentPlayer = currentPlayer === 1 ? 2 : 1;
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
        // Je change mon texte pour le joueur 2 :
        textPlayer.innerText = `C'est au tour du joueur ${currentPlayer}`;

        // Si les conditions sont remplies, je stocke dans une variable :
        numberOfMatchesToDelete += number;
        console.log(`La valeur stockée: ${numberOfMatchesToDelete}`);

        // Le nombre d'allumettes restantes :
        let remainingMatches = matchesToRemove - numberOfMatchesToDelete;
        console.log(`Il reste ${remainingMatches}`);

        // Afficher les messages :
        let message = document.createElement('p');
        // messageInfos.innerText = `Il reste ${remainingMatches}`;
        message.innerText = `Il reste ${remainingMatches} allumettes à enlever`;
        message.classList.add('messages-infos');
        divMessage.appendChild(message);

        gameMatches();
    } else {
        console.log('Veuillez entrer un nombre entre 1 et 6.');

        // Affichage du message :

        // Si les condition ne sont pas remplies, je ne remplie pas la variable.
        // Je ne mets pas la variable à zéro pour ne pas perdre les valeurs entrée précédemment.
        console.log(`La valeur stockée: ${numberOfMatchesToDelete}`);
    }
}

// Je veux que lorsque le jeux est gagné on arrête ou on continue :
const gameMatches = () => {
    let message = document.createElement('p');
    message.classList.add('messages-infos');

    if (numberOfMatchesToDelete === matchesToRemove) {
        // Le gagnant est le joueur qui vient de jouer => version courte
        // console.log(`Victoire du joueur ${currentPlayer === 1 ? 2 : 1} !!`);
        // textPlayer.innerText = `Victoire du joueur ${currentPlayer === 1 ? 2 : 1} !!`;

        if (currentPlayer === 1) {
            console.log(`Victoire du joueur ${currentPlayer}!!`);
            textPlayer.innerText = `Victoire du joueur ${currentPlayer}`;
        } else if (currentPlayer === 2) {
            console.log(`Victoire du joueur ${currentPlayer}!!`);
            textPlayer.innerText = `Victoire du joueur ${currentPlayer}`;
        }

        // Désactiver le bouton valider et activer le bouton Rejouer :
        validateBtn.disabled = true;
        replayBtn.disabled = false;
    } else if (numberOfMatchesToDelete > matchesToRemove) {
        console.log('Tu dépasses le nombre d\' allumettes à supprimer.');
    }
}

// Quand j'appuie sur le bouton rejouer le compteur d'allumettes revient à zéro ou null
replayBtn.addEventListener('click', () => {
    numberOfMatchesToDelete = null;
    console.log(`La nouvelle valeur de est: ${numberOfMatchesToDelete}`);

    // Vider le conteneur des messages
    
    currentPlayer = 1; // Réinitialiser au joueur 1
    textPlayer.innerText = `C'est au tour du joueur ${currentPlayer}`;

    // Réactiver le bouton Valider :
    validateBtn.disabled = false;
    replayBtn.disabled = true;
})