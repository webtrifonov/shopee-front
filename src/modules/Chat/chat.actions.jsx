import { LISTINGS, SEND_MESSAGE, SET } from './chat.constants';

export const getListingsRequest = (payload) => {
  return {
    type: LISTINGS.REQUEST,
    payload,
  };
};

export const changeSetForm = (payload) => {
  return {
    type: SET.SEND_FORM,
    payload,
  };
};

export const sendMessage = (payload) => {
  return {
    type: SEND_MESSAGE,
    payload,
  };
};
