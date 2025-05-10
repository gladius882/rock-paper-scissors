import { Hand } from "./Hand.js"
import { HandType } from "./HandType.js"

export class PaperHand extends Hand {
    constructor() {
        super(
            HandType.PAPER,
            HandType.ROCK,
            HandType.SCISSORS
        );
    }
}