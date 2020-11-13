import {
  CHANGE_AUTH_TOKEN,
  FETCH,
  SIGN_IN,
  SIGN_UP,
} from '../actions/actionTypes';
import { reducerGenerator } from '../../utils/store';

const HANDLERS = {
  [SIGN_UP.FIELD.EMAIL]: (state, payload) => {
    return {
      ...state,
      signUpFieldEmail: payload,
    };
  },
  [SIGN_UP.FIELD.PASSWORD]: (state, payload) => ({
    ...state,
    signUpFieldPassword: payload,
  }),
  [SIGN_UP.NO_VALID.EMAIL]: (state, payload) => {
    return {
      ...state,
      signUpNoValidEmail: payload,
    };
  },
  [SIGN_UP.NO_VALID.PASSWORD]: (state, payload) => ({
    ...state,
    signUpNoValidPassword: payload,
  }),
  [FETCH.REGISTER.SUCCESS]: (state, user) => {
    return {
      ...state,
      authUser: user,
    };
  },
  [SIGN_IN.FIELD.EMAIL]: (state, payload) => {
    return {
      ...state,
      signInFieldEmail: payload,
    };
  },
  [SIGN_IN.FIELD.PASSWORD]: (state, payload) => ({
    ...state,
    signInFieldPassword: payload,
  }),
  [SIGN_IN.FIELD.REMEMBER_ME]: (state, payload) => ({
    ...state,
    signInFieldRememberMe: payload,
  }),
  [SIGN_IN.NO_VALID.EMAIL]: (state, payload) => {
    return {
      ...state,
      signInNoValidEmail: payload,
    };
  },
  [SIGN_IN.NO_VALID.PASSWORD]: (state, payload) => ({
    ...state,
    signInNoValidPassword: payload,
  }),
  [CHANGE_AUTH_TOKEN]: (state, payload) => {
    return {
      ...state,
      authToken: payload,
    };
  },
  [FETCH.AUTH_USER.SUCCESS]: (state, user) => {
    return {
      ...state,
      authUser: user,
    };
  },
};

const initialState = {
  signUpFieldEmail: '',
  signUpFieldPassword: '',
  signUpNoValidEmail: [],
  signUpNoValidPassword: [],

  signInFieldEmail: '',
  signInFieldPassword: '',
  signInFieldRememberMe: false,
  signInNoValidEmail: [],
  signInNoValidPassword: [],

  authUser: {},
  authToken: null,
};

export default reducerGenerator(initialState, HANDLERS);
