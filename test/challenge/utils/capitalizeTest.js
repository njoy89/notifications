import { expect } from 'chai';
import capitalize from '../../../challenge/client/utils/capitalize';

describe('capitalize()', () => {
    it('works on given input', () => {
        expect(capitalize('test')).to.eql('Test');
        expect(capitalize('TEST42')).to.eql('Test42');
    });
});
