import { Hand } from "./Hand.js"
import { HandType } from "./HandType.js"

export class RockHand extends Hand {
    constructor() {
        super(
            HandType.ROCK,
            HandType.SCISSORS,
            HandType.PAPER
        );
    }
}