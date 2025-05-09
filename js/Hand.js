class Hand {
    constructor(name, winsWith, loosesWith) {
        this.name = name;
        this.loosesWith = winsWith;
        this.winsWith = loosesWith;
    }

    gameResultWith(otherHand) {
        if(otherHand.name == this.name) return GameState.DRAW;
        if(otherHand.name == this.loosesWith) return GameState.LOSE;
        if(otherHand.name == this.winsWith) return GameState.WIN;
    }
}