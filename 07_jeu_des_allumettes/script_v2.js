// Variable globales

// Les écouteurs d'évènements :
document.querySelector('#btn-validate').addEventListener('click', isValid);

// Function isValid

// Function 'tour de jeu'

// Function 'fin du jeu'/'Victoire

// Function 'compteur de point'/'mettre à jour l'affichage

// Function resetGame

// Function 'commencer le jeu' / 'choisir le nombre de joueur

// Initialisation du jeu

// FONCTIONS PRINCIPALES
// -------------------------------------------

// 1. GESTION DU JEU
// -------------------
// initialiserJeu()
// - Initialise le nombre d'allumettes (50)
// - Initialise le premier joueur
// - Initialise le nombre de joueurs

// verifierFinPartie()
// - Vérifie s'il reste des allumettes
// - Détermine s'il y a un gagnant

// changerJoueur()
// - Passe au joueur suivant
// - Met à jour l'affichage du joueur actuel


// 2. GESTION DES COUPS
// -------------------
// verifierCoupValide(nombreAllumettes)
// - Vérifie si le nombre est entre 1 et 6
// - Vérifie s'il y a assez d'allumettes restantes

// retirerAllumettes(nombre)
// - Soustrait le nombre d'allumettes choisi du total
// - Met à jour l'affichage des allumettes restantes


// 3. GESTION DES JOUEURS
// -------------------
// definirNombreJoueurs()
// - Demande et valide le nombre de joueurs
// - Crée la liste des joueurs

// obtenirJoueurActuel()
// - Retourne le joueur qui doit jouer


// 4. GESTION DE L'INTERFACE
// -------------------
// afficherEtatJeu()
// - Affiche le nombre d'allumettes restantes
// - Affiche le joueur actuel
// - Affiche les messages de jeu

// afficherMessageVictoire()
// - Affiche le joueur gagnant
// - Propose de rejouer

// reinitialiserPartie()
// - Remet à zéro toutes les valeurs
// - Prépare une nouvelle partie


// 5. GESTION DES ENTRÉES
// -------------------
// recupererNombreAllumettes()
function isValid() {
    // - Récupère le nombre d'allumettes choisi par le joueur
    const inputMatches = document.querySelector('#matches-to-remove');
    let matchesToRemove = inputMatches.value;
    console.log(`${matchesToRemove} allumettes entrées`);

    // - Valide que c'est bien un nombre
    if (matchesToRemove )
}

isValid()

// validerEntree(nombre)
// - Vérifie que l'entrée est un nombre valide
// - Vérifie que le nombre respecte les règles du jeu


// 6. FONCTIONS UTILITAIRES
// -------------------
// calculerAllumettesRestantes()
// - Calcule et retourne le nombre d'allumettes restantes

// afficherErreur(message)
// - Affiche les messages d'erreur aux joueurs

// effacerMessage()
// - Efface les messages précédents