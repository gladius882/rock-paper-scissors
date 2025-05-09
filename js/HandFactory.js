class HandFactory {
    static create(type) {
        switch(type) {
            case HandType.ROCK: return new RockHand();
            case HandType.PAPER: return new PaperHand();
            case HandType.SCISSORS: return new ScissorsHand();
            default: throw new Error('Unknows hand type: ${type}');
        }
    }
}