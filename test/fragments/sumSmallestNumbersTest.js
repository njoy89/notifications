import { expect } from 'chai';
import sumSmallestNumbers from '../../fragments/sumSmallestNumbers';

describe('sumSmallestNumbers()', () => {
    it('works on sample tests', () => {
        expect(sumSmallestNumbers([1, 2, 3, 4])).to.eql(3);
        expect(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).to.eql(5);
        expect(sumSmallestNumbers([4, 4])).to.eql(8);
        expect(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).to.eql(-18);
        expect(sumSmallestNumbers([1, 1, 1, 1])).to.eql(2);
    });

    it('works for the smallest input', () => {
        expect(sumSmallestNumbers([1, 2])).to.eql(3);
    });

    it('handles an array with all the same numbers', () => {
        expect(sumSmallestNumbers([42, 42, 42, 42, 42, 42, 42, 42, 42])).to.eql(84);
    });

    it('handles input consisted only of negative numbers', () => {
        expect(sumSmallestNumbers([-42, -43, -44, -45, -46, -47])).to.eql(-93);
    });
});
