import { chat, chatService } from '../../modules/Chat';
import { fork } from 'redux-saga/effects';

export { ChatPage } from './ChatPage';
export const chatPage = {
  chat,
};
export const chatPageSagas = [fork(chatService)];
