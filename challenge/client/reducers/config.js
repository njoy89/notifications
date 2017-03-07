import { handleActions } from 'redux-actions';
import { types } from '../actions';
import categories from '../utils/categories';

const DEFAULT_STATE = {
    MAX_NUMBER_OF_NOTIFICATIONS: 5,
    INFO_DURATION: 90000
};

export const selectors = {
    getConfig: state => state.config
};


export default (state, action) => DEFAULT_STATE;
