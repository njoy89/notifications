import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notifications, { selectors as notificationsSelectors } from './notifications';
import config, { selectors as configSelectors } from './config';

export default combineReducers({
    form: formReducer,
    config,
    notifications
});

export const selectors = {
    ...notificationsSelectors,
    ...configSelectors
};
