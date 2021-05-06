import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import userSaga from './userSaga';
import { homePageSagas } from '../../pages/Home';

export default function* () {
  yield all([fork(authSaga), fork(userSaga), ...homePageSagas]);
}
