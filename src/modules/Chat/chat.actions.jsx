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
export const getChatroomUserListRequest = (payload) => {
  return {
    type: GET_CHATROOM_USER_LIST.REQUEST,
    payload,
  };
};
export const getChatroomUserListSuccess = (payload) => {
  return {
    type: GET_CHATROOM_USER_LIST.SUCCESS,
    payload,
  };
};
export const getChatroomUserListFailure = (payload) => {
  return {
    type: GET_CHATROOM_USER_LIST.FAILURE,
    payload,
  };
};
