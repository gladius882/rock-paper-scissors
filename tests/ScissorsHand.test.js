import { RockHand } from '../js/RockHand.js';
import { PaperHand } from '../js/PaperHand.js';
import { ScissorsHand } from '../js/ScissorsHand.js';
import { GameState } from '../js/GameState.js';

describe('ScissorsHand', () => {
    test("should draw against ScissorsHand", () => {
        const scissors1 = new ScissorsHand();
        const scissors2 = new ScissorsHand();

        expect(scissors1.gameResultWith(scissors2)).toBe(GameState.DRAW);
    }),
    test("should win against PaperHand", () => {
        const scissors = new ScissorsHand();
        const paper = new PaperHand();

        expect(scissors.gameResultWith(paper)).toBe(GameState.WIN);
    }),
    test("should lose against RockHand", () => {
        const scissors = new ScissorsHand();
        const rock = new RockHand();

        expect(scissors.gameResultWith(rock)).toBe(GameState.LOSE);
    })
})