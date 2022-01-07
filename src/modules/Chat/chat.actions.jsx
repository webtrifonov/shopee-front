import { SEND_MESSAGE, GET_CHATROOM_USER_LIST, SET } from './chat.constants';

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
