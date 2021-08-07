import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';

import { GET_CHATROOM_USER_LIST, SEND_MESSAGE } from './chat.constants';
import { getChatroomUserListSuccess } from './chat.actions';

const HANDLERS = {
  *[SEND_MESSAGE]({ payload }) {
    console.log('>>> payload = ', payload);

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
      console.log('>>> error = ', error);

      // yield put(getListingsFailure(error.message));
    }
  },
  *[GET_CHATROOM_USER_LIST]({ payload }) {
    console.log('>>> payload = ', payload);

    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/chats/chatroom_users`,
        data: payload,
      });
      if (response.data?.success) {
        console.log('>>> response.data = ', response.data);

        // const { products, count } = response.data;
        yield put(getChatroomUserListSuccess(response.data?.messages));
      }
    } catch (error) {
      console.log('>>> error = ', error);

      // yield put(getListingsFailure(error.message));
    }
  },
};
export const chatService = sagaGenerator(HANDLERS);
