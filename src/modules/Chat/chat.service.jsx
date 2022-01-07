import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';

import { GET_CHATROOM_USER_LIST, SEND_MESSAGE } from './chat.constants';
import { getChatroomUserListSuccess } from './chat.actions';

const HANDLERS = {
  *[SEND_MESSAGE]({ payload }) {
    try {
      const response = yield call(axios, {
        method: 'POST',
        url: `/chats/messages`,
        data: payload,
      });
      if (response.data?.success) {
        console.log('>>> response.data = ', response.data);
      }
    } catch (error) {
      console.log('error = ', error);
    }
  },
};
export const chatService = sagaGenerator(HANDLERS);
