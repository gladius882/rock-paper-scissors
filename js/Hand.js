import { GameState } from "./GameState.js"

export class Hand {
    constructor(name, winsWith, loosesWith) {
        this.name = name;
        this.loosesWith = loosesWith;
        this.winsWith = winsWith;
    }

    gameResultWith(otherHand) {
        if (otherHand.name == this.name) return GameState.DRAW;
        if (otherHand.name == this.loosesWith) return GameState.LOSE;
        if (otherHand.name == this.winsWith) return GameState.WIN;
    }
}