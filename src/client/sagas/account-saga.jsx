import {
  takeEvery, put, call, delay,
} from 'redux-saga/effects';
import actions from '../actions';
import constants from '../constants';
import { getDetailAccount, updateAccount } from '../services/profile-service';

function* getDetailAccountAsync(routeParam) {
  const data = yield call(getDetailAccount, routeParam);
  yield put({ type: actions.GET_ACCOUNT, value: data ? data.getDetailAccount : {} });
}

export function* watchGetDetailAccount() {
  yield takeEvery(actions.SAGA_GET_ACCOUNT, getDetailAccountAsync);
}

function* updateAccountAsync(routeParam) {
  const data = yield call(updateAccount, routeParam);
  if (data) {
    yield delay(2000);
    yield put({ type: actions.REQUEST_STATUS, value: constants.SUCCESSFUL_REQUEST_STATUS });
    yield delay(2000);
    yield put({ type: actions.REQUEST_STATUS, value: constants.DEFAULT_REQUEST_STATUS });
  } else {
    yield delay(2000);
    yield put({ type: actions.REQUEST_STATUS, value: constants.UNSUCCESSFUL_REQUEST_STATUS });
    yield delay(2000);
    yield put({ type: actions.REQUEST_STATUS, value: constants.DEFAULT_REQUEST_STATUS });
  }
  yield put({ type: actions.UPDATE_ACCOUNT, value: data ? data.updateAccount : {} });
}

export function* watchUpdateAccount() {
  yield takeEvery(actions.SAGA_UPDATE_ACCOUNT, updateAccountAsync);
}
