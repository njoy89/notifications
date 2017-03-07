import { expect } from 'chai';
import reducer, { selectors } from '../../../challenge/client/reducers/config';
import { actions } from '../../../challenge/client/actions';

describe('config', () => {
    describe('reducer', () => {
        it('handles no action', () => {
            expect(reducer(undefined, {type: ''})).to.eql({
                MAX_NUMBER_OF_NOTIFICATIONS: 5,
                INFO_DURATION: 90000
            });
        });
    });

    describe('selectors', () => {
        it('get all notifications', () => {
            const state = {
                config: {
                    MAX_NUMBER_OF_NOTIFICATIONS: 15,
                    INFO_DURATION: 1000
                }
            };
            expect(selectors.getConfig(state)).to.eql({
                MAX_NUMBER_OF_NOTIFICATIONS: 15,
                INFO_DURATION: 1000
            });
        });
    });
});
