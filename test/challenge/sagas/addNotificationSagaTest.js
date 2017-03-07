import { expect } from 'chai';
import { delay } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import module, { addNotification } from '../../../challenge/client/sagas/addNotificationSaga';
import { types, actions } from '../../../challenge/client/actions';
import categories from '../../../challenge/client/utils/categories';
import { rewire, resetDependency } from '../../utils/rewire'

describe('addNotificationSaga', () => {
    beforeEach(() => {
        rewire(module, 'getId', () => 'id42');
    });

    it('adds an error notification', () => {
        const saga = addNotification({
            payload: {
                header: 'sample header',
                body: 'sample body',
                category: categories.ERROR
            }
        });

        expect(saga.next().value).to.eql(select());

        expect(saga.next({
            config: {
                MAX_NUMBER_OF_NOTIFICATIONS: 10,
                INFO_DURATION: 5000
            }
        }).value).to.eql(put(actions.addNotification({
            notification: {
                header: 'sample header',
                body: 'sample body',
                category: categories.ERROR,
                id: 'id42'
            },
            max: 10
        })));

        expect(saga.next().done).to.eql(true);
    });

    it('adds an info notification', () => {
        const saga = addNotification({
            payload: {
                header: 'sample header',
                body: 'sample body',
                category: categories.INFO
            }
        });

        expect(saga.next().value).to.eql(select());

        expect(saga.next({
            config: {
                MAX_NUMBER_OF_NOTIFICATIONS: 10,
                INFO_DURATION: 5000
            }
        }).value).to.eql(put(actions.addNotification({
            notification: {
                header: 'sample header',
                body: 'sample body',
                category: categories.INFO,
                id: 'id42'
            },
            max: 10
        })));

        expect(saga.next().value).to.eql(call(delay, 5000));
        expect(saga.next().value).to.eql(put(actions.removeNotification('id42')));
        expect(saga.next().done).to.eql(true);
    });

    afterEach(() => {
        resetDependency(module, 'getId');
    });
});
