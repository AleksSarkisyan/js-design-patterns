

import Player from './Player.js';
import Scoreboard from './Scoreboard.js';

export default class Mediator {
    constructor() {
        this.players = [new Player('Pesho'), new Player('Gosho')];
        this.scoreboard = new Scoreboard();
    }
    updateScore(score) {
        for (const player of this.players) {
            this.scoreboard.updatePlayerScore(score, player.name);
        }
    }
}