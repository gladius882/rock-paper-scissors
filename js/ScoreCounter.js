export class ScoreCounter {
    constructor(playerScoreQuery, computerScoreQuery) {
        this.playerScore = 0;
        this.computerScore = 0;
        this.playerScoreQuery = playerScoreQuery;
        this.computerScoreQuery = computerScoreQuery;
    }

    addPlayerScore() {
        this.playerScore++;

        document.querySelector(this.playerScoreQuery).
            innerText = this.playerScore;
    }

    addComputerScore() {
        this.computerScore++;

        document.querySelector(this.computerScoreQuery).
            innerText = this.computerScore;
    }
}