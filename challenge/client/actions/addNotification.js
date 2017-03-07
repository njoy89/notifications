import { createAction } from 'redux-actions';

export const types = {
    addNotificationSaga: 'ADD_NOTIFICATION_SAGA',
    addNotification: 'ADD_NOTIFICATION',
    removeNotification: 'REMOVE_NOTIFICATION'
};

export const actions = {
    addNotificationSaga: createAction(types.addNotificationSaga),
    addNotification: createAction(types.addNotification),
    removeNotification: createAction(types.removeNotification)
};
