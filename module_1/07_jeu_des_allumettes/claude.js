class MatchGame {
    constructor() {
        this.totalMatches = 50;
        this.currentPlayer = 1;
        this.playerCount = 2;
        this.matchesRemaining = this.totalMatches;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Configuration initiale
        document.getElementById('startGame').addEventListener('click', () => this.startGame());
        document.getElementById('playTurn').addEventListener('click', () => this.playTurn());
        document.getElementById('newGame').addEventListener('click', () => this.resetGame());
    }

    startGame() {
        this.playerCount = parseInt(document.getElementById('playerCount').value);
        if (this.playerCount < 2 || this.playerCount > 10) {
            alert('Le nombre de joueurs doit être entre 2 et 10');
            return;
        }

        document.getElementById('setup').classList.add('hidden');
        document.getElementById('gameInterface').classList.remove('hidden');
        this.updateDisplay();
    }

    playTurn() {
        const input = document.getElementById('matchesToRemove');
        const matchesToRemove = parseInt(input.value);

        if (!this.isValidMove(matchesToRemove)) {
            alert('Vous devez retirer entre 1 et 6 allumettes');
            return;
        }

        this.matchesRemaining -= matchesToRemove;
        input.value = '';

        if (this.matchesRemaining <= 0) {
            this.endGame();
        } else {
            this.currentPlayer = (this.currentPlayer % this.playerCount) + 1;
            this.updateDisplay();
        }
    }

    isValidMove(matches) {
        return matches >= 1 && matches <= 6 && matches <= this.matchesRemaining;
    }

    updateDisplay() {
        document.getElementById('currentPlayer').textContent = this.currentPlayer;
        document.getElementById('matchCount').textContent = this.matchesRemaining;

        // Mise à jour de l'affichage visuel des allumettes
        const matchesDisplay = document.getElementById('matchesDisplay');
        matchesDisplay.innerHTML = '';
        for (let i = 0; i < this.matchesRemaining; i++) {
            const match = document.createElement('div');
            match.className = 'match';
            matchesDisplay.appendChild(match);
        }
    }

    endGame() {
        document.getElementById('gameInterface').classList.add('hidden');
        document.getElementById('gameOver').classList.remove('hidden');
        document.getElementById('winner').textContent =
            `Le joueur ${this.currentPlayer} a gagné !`;
    }

    resetGame() {
        this.matchesRemaining = this.totalMatches;
        this.currentPlayer = 1;
        document.getElementById('gameOver').classList.add('hidden');
        document.getElementById('setup').classList.remove('hidden');
        document.getElementById('playerCount').value = 2;
    }
}

// Initialisation du jeu
document.addEventListener('DOMContentLoaded', () => {
    new MatchGame();
});