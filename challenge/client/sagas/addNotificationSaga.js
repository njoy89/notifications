import { takeEvery, delay } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import categories from '../utils/categories';
import capitalize from '../utils/capitalize';
import getId from '../utils/getId';

import { selectors } from '../reducers';
import { actions, types } from '../actions';

export function *addNotification({ payload: { header, body, category } }) {
    const id = getId();

    const notification = {
        id,
        header: header || capitalize(category),
        body,
        category
    };

    const state = yield select();

    const {
        MAX_NUMBER_OF_NOTIFICATIONS,
        INFO_DURATION,
    } = selectors.getConfig(state);

    yield put(actions.addNotification({
        notification,
        max: MAX_NUMBER_OF_NOTIFICATIONS
    }));

    if (category === categories.INFO) {
        yield call(delay, INFO_DURATION);
        yield put(actions.removeNotification(id));
    }
}

export default function* () {
    yield takeEvery(types.addNotificationSaga, addNotification);
}
