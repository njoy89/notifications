import { expect } from 'chai';
import reducer, { selectors } from '../../../challenge/client/reducers/notifications';
import { actions } from '../../../challenge/client/actions';

describe('notifications', () => {
    describe('reducer', () => {
        it('handles no action', () => {
            expect(reducer(undefined, { type: '' })).to.eql([]);
        });

        it('handles adding a notification', () => {
            expect(reducer(undefined, actions.addNotification({
                notification: { id: '42' },
                max: 10
            }))).to.eql([
                { id: '42' }
            ]);
        });

        it('handles adding a notification as well as too many notification in the state', () => {
            const existingNotifications = [
                { id: '42' },
                { id: '43' },
                { id: '44' }
            ];
            expect(reducer(existingNotifications, actions.addNotification({
                notification: { id: '45' },
                max: 3
            }))).to.eql([
                { id: '43' },
                { id: '44' },
                { id: '45' }
            ]);
        });

        it('handles removing a notification', () => {
            const existingNotifications = [
                { id: '42' },
                { id: '43' }
            ];
            expect(reducer(existingNotifications, actions.removeNotification('43'))).to.eql([
                { id: '42' }
            ]);
        })
    });

    describe('selectors', () => {
        it('get all notifications', () => {
            const state = {
                notifications: [
                    { id: '42' },
                    { id: '43' }
                ]
            };
            expect(selectors.getNotifications(state)).to.eql([
                { id: '42' },
                { id: '43' }
            ]);
        });
    });
});
