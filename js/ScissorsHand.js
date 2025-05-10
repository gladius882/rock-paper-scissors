import { Hand } from "./Hand.js"
import { HandType } from "./HandType.js"

export class ScissorsHand extends Hand {
    constructor() {
        super(
            HandType.SCISSORS,
            HandType.PAPER,
            HandType.ROCK
        );
    }
}