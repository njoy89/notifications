import addNotificationSaga from './addNotificationSaga';

export default function* () {
    yield [
        addNotificationSaga()
    ];
};
