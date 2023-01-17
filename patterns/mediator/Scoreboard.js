export default class Scoreboard {
    constructor() {
        this.scores = [];
    }
    updatePlayerScore(score, player) {
        this.scores[player] = score;
        console.log(`${player}'s score is`, this.scores[player])
    }
}