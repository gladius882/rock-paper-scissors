import { RockHand } from '../js/RockHand.js';
import { PaperHand } from '../js/PaperHand.js';
import { ScissorsHand } from '../js/ScissorsHand.js';
import { GameState } from '../js/GameState.js';

describe('PaperHand', () => {
    test("should draw against PaperHand", () => {
        const paper1 = new PaperHand();
        const paper2 = new PaperHand();

        expect(paper1.gameResultWith(paper2)).toBe(GameState.DRAW);
    }),
    test("should win against RockHand", () => {
        const paper = new PaperHand();
        const rock = new RockHand();

        expect(paper.gameResultWith(rock)).toBe(GameState.WIN);
    }),
    test("should lose against ScissorsHand", () => {
        const paper = new PaperHand();
        const scissors = new ScissorsHand();

        expect(paper.gameResultWith(scissors)).toBe(GameState.LOSE);
    })
})