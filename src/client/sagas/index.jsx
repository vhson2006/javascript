import { all, fork } from 'redux-saga/effects';
import { watchGetDetailAccount, watchUpdateAccount } from './account-saga';

export default function* () {
  yield all([
    fork(watchGetDetailAccount),
    fork(watchUpdateAccount),
  ]);
}
