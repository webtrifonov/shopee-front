import { reducerGenerator } from '../../utils/store';
import { SET, GET_CHATROOM_USER_LIST } from './chat.constants';

const HANDLERS = {
  [SET.SEND_FORM]: (state, payload) => {
    return {
      ...state,
      sendForm: {
        ...state.sendForm,
        ...payload,
      },
    };
  },
  [GET_CHATROOM_USER_LIST.SUCCESS]: (state, payload) => {
    return {
      ...state,
      chatroomUserList: payload.chatroomUserList,
      count: payload.count,
    };
  },
};
const initialState = {
  loadingListings: false,
  sendForm: {
    name: '',
    message: '',
  },
  chatroomUserList: [],
};
export const chat = reducerGenerator(initialState, HANDLERS);
