export const FETCH = {
  REGISTER: {
    START: 'FETCH_REGISTER_START',
    SUCCESS: 'FETCH_REGISTER_SUCCESS',
    ERROR: 'FETCH_REGISTER_ERROR',
  },
  LOGIN: {
    START: 'FETCH_LOGIN_START',
    SUCCESS: 'FETCH_LOGIN_SUCCESS',
    ERROR: 'FETCH_LOGIN_ERROR',
  },
  AUTH_USER: {
    START: 'FETCH_AUTH_USER_START',
    SUCCESS: 'FETCH_AUTH_USER_SUCCESS',
    ERROR: 'FETCH_AUTH_USER_ERROR',
  },
  ORDERS: {
    START: 'FETCH_ORDERS_START',
    SUCCESS: 'FETCH_ORDERS_SUCCESS',
    ERROR: 'FETCH_ORDERS_ERROR',
  },
};

export const SIGN_UP = {
  FIELD: {
    EMAIL: 'SIGN_UP_FIELD_EMAIL',
    PASSWORD: 'SIGN_UP_FIELD_PASSWORD',
  },
  NO_VALID: {
    EMAIL: 'SIGN_UP_NO_VALID_EMAIL',
    PASSWORD: 'SIGN_UP_NO_VALID_PASSWORD',
  },
};
export const SIGN_IN = {
  FIELD: {
    EMAIL: 'SIGN_IN_FIELD_EMAIL',
    PASSWORD: 'SIGN_IN_FIELD_PASSWORD',
    REMEMBER_ME: 'SIGN_IN_FIELD_REMEMBER_ME',
  },
  NO_VALID: {
    EMAIL: 'SIGN_IN_NO_VALID_EMAIL',
    PASSWORD: 'SIGN_IN_NO_VALID_PASSWORD',
  },
};
export const CHANGE_AUTH_TOKEN = 'CHANGE_AUTH_TOKEN';
