import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import productsSaga from './productsSaga';
import userSaga from './userSaga';

export default function* () {
  yield all([fork(authSaga), fork(productsSaga), fork(userSaga)]);
}
