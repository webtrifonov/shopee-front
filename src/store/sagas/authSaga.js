import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import {FETCH} from '../actions/actionTypes';
import {sagaGenerator} from '../../utils/store';
import {all} from '@redux-saga/core/effects';
import {closeModal, toggleTooltip} from '../actions/appActions';
import {
  changeAuthToken,
  changeSignInNoValidEmail, changeSignInNoValidPassword,
  changeSignUpNoValidEmail, changeSignUpNoValidPassword,
  fetchAuthUserSuccess,
  fetchRegisterSuccess
} from '../actions/authActions';
import {STORAGE_TOKEN, TOOLTIP_DURATION} from '../../utils/constants';
import {delay} from '../../utils/utils';

const HANDLERS = {
  * [FETCH.REGISTER.START]({payload}) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: `/auth/register`,
        data: payload
      });

      if (response.data?.success) {
        const {user, token} = response.data;
        // localStorage.setItem(STORAGE_TOKEN, token);
        yield put(toggleTooltip('Success registration!'));
        yield delay(TOOLTIP_DURATION)
        yield all([
          put(closeModal()),
          put(changeAuthToken(token)),
          put(fetchRegisterSuccess(user)),
          put(changeSignUpNoValidEmail([])),
          put(changeSignUpNoValidPassword([])),
        ]);
      } else  {
        if (response.data?.message === 'повторяющееся значение ключа нарушает ограничение уникальности "users_email_key"') {
          yield put(changeSignUpNoValidEmail(['That email is also used']));
        } else {
          yield put(changeSignUpNoValidEmail([response.data?.message]));
        }
      }
    } catch (error) {
      yield put(toggleTooltip(error.message));
    }
  },
  * [FETCH.LOGIN.START]({payload: {email, password, rememberMe}}) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: `/auth/login`,
        data: {
          email,
          password
        }
      });
      if (response.data?.success) {
        const {user, token} = response.data;
        if (rememberMe) {
          localStorage.setItem(STORAGE_TOKEN, token);
        }
        yield all([
          put(closeModal()),
          put(changeAuthToken(token)),
          put(fetchRegisterSuccess(user)),
          put(changeSignInNoValidEmail([])),
          put(changeSignInNoValidPassword([])),
        ]);
      } else  {
        if (response.data?.message === 'You entered the wrong password') {
          yield put(changeSignInNoValidPassword([response.data?.message]));
        } else {
          yield put(changeSignInNoValidEmail([response.data?.message]));
        }
      }
    } catch (error) {
      yield put(toggleTooltip(error.message));
    }
  },
  * [FETCH.AUTH_USER.START]({payload}) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/user`,
        headers: {
          Authorization: payload,
        },
      });
      if (response.data?.success) {
        const {user} = response.data;
        yield all([
          put(fetchAuthUserSuccess(user)),
        ]);
      }
    } catch (error) {
      yield put(toggleTooltip(error.message));
    }
  },
}
export default sagaGenerator(HANDLERS);
