import { expect } from "chai";
import { Arrays } from "../src/arrays";

describe('Arrays problems test', function () {
    it('build array from permutation', function () {
        const input = [0, 2, 1, 5, 3, 4];
        const expected = [0, 1, 2, 4, 5, 3]; 
        let result = Arrays.buildArrayFromPermutation(input);
        expect(result).deep.equal(expected);
    });

    it('Concatenation of Array 1', function () {
        const input = [1, 2, 1];
        const expected = [1, 2, 1, 1, 2, 1];
        let result = Arrays.getConcatenation(input);
        expect(result).deep.equal(expected);
    });
    it('Concatenation of Array 2', function () {
        const input = [1, 3, 2, 1];
        const expected = [1, 3, 2, 1, 1, 3, 2, 1];
        let result = Arrays.getConcatenation(input);
        expect(result).deep.equal(expected);
    });
    it('Shuffle the Array 1', function () {
        const input = [2, 5, 1, 3, 4, 7];
        const expected = [2, 3, 5, 4, 1, 7];
        let result = Arrays.shuffleArray(input, 3);
        expect(result).deep.equal(expected);
    });
    it('Shuffle the Array 2', function () {
        const input = [1, 2, 3, 4, 4, 3, 2, 1];
        const expected = [1, 4, 2, 3, 3, 2, 4, 1];
        let result = Arrays.shuffleArray(input, 4);
        expect(result).deep.equal(expected);
    });
    it('Shuffle the Array 3', function () {
        const input = [1, 1, 2, 2];
        const expected = [1, 2, 1, 2];
        let result = Arrays.shuffleArray(input, 2);
        expect(result).deep.equal(expected);
    });
});