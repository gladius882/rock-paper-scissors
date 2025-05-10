import { RockHand } from '../js/RockHand.js';
import { PaperHand } from '../js/PaperHand.js';
import { ScissorsHand } from '../js/ScissorsHand.js';
import { GameState } from '../js/GameState.js';

describe('RockHand', () => {
    test("should draw against RockHand", () => {
        const rock1 = new RockHand();
        const rock2 = new RockHand();

        expect(rock1.gameResultWith(rock2)).toBe(GameState.DRAW);
    }),
    test("should win against ScissorsHand", () => {
        const rock = new RockHand();
        const scissors = new ScissorsHand();

        expect(rock.gameResultWith(scissors)).toBe(GameState.WIN);
    }),
    test("should lose against PaperHand", () => {
        const rock = new RockHand();
        const paper = new PaperHand();

        expect(rock.gameResultWith(paper)).toBe(GameState.LOSE);
    })
})