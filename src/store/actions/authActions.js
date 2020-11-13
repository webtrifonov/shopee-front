import { CHANGE_AUTH_TOKEN, FETCH, SIGN_IN, SIGN_UP } from './actionTypes';

// Register
export const changeSignUpFieldEmail = (email) => {
  return {
    type: SIGN_UP.FIELD.EMAIL,
    payload: email,
  };
};
export const changeSignUpFieldPassword = (payload) => {
  return {
    type: SIGN_UP.FIELD.PASSWORD,
    payload,
  };
};
export const changeSignUpNoValidEmail = (email) => {
  return {
    type: SIGN_UP.NO_VALID.EMAIL,
    payload: email,
  };
};
export const changeSignUpNoValidPassword = (password) => {
  return {
    type: SIGN_UP.NO_VALID.PASSWORD,
    payload: password,
  };
};
export const fetchRegisterStart = (payload) => {
  return {
    type: FETCH.REGISTER.START,
    payload,
  };
};
export const fetchRegisterSuccess = (user) => {
  return {
    type: FETCH.REGISTER.SUCCESS,
    payload: user,
  };
};
export const fetchRegisterError = (error) => {
  return {
    type: FETCH.REGISTER.ERROR,
    payload: error,
  };
};
// Login
export const changeSignInFieldEmail = (payload) => {
  return {
    type: SIGN_IN.FIELD.EMAIL,
    payload,
  };
};
export const changeSignInFieldPassword = (payload) => {
  return {
    type: SIGN_IN.FIELD.PASSWORD,
    payload,
  };
};
export const changeSignInFieldRememberMe = (payload) => {
  return {
    type: SIGN_IN.FIELD.REMEMBER_ME,
    payload,
  };
};
export const changeSignInNoValidEmail = (email) => {
  return {
    type: SIGN_IN.NO_VALID.EMAIL,
    payload: email,
  };
};
export const changeSignInNoValidPassword = (password) => {
  return {
    type: SIGN_IN.NO_VALID.PASSWORD,
    payload: password,
  };
};
export const fetchLoginStart = (payload) => {
  return {
    type: FETCH.LOGIN.START,
    payload,
  };
};
export const fetchLoginSuccess = (user) => {
  return {
    type: FETCH.LOGIN.SUCCESS,
    payload: user,
  };
};

export const fetchAuthUserStart = (token) => {
  return {
    type: FETCH.AUTH_USER.START,
    payload: token,
  };
};
export const fetchAuthUserSuccess = (user) => {
  return {
    type: FETCH.AUTH_USER.SUCCESS,
    payload: user,
  };
};

export const changeAuthToken = (token) => {
  return {
    type: CHANGE_AUTH_TOKEN,
    payload: token,
  };
};
