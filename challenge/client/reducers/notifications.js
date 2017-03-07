import { handleActions } from 'redux-actions';
import { types } from '../actions';
import categories from '../utils/categories';

const DEFAULT_STATE = [];

export const selectors = {
    getNotifications: state => state.notifications
};

export default handleActions({
    [types.addNotification]: (state, { payload: { notification, max } }) =>
        // remove the oldest one if the number would exceed the maximum number of notifications
        state.length >= max
            ? state.slice(1).concat([ notification ])
            : state.concat([ notification ]),
    [types.removeNotification]: (state, { payload: notificationId }) =>
        state.filter(notification => notification.id !== notificationId)
}, DEFAULT_STATE);
