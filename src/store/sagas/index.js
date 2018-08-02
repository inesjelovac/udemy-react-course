import { takeEvery, all } from 'redux-saga/effects';
import { logoutSaga, checkoutTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrderSaga } from './order';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGUOT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkoutTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga),
    ])
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
    yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrderSaga);
}
