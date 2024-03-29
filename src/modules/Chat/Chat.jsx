import s from './chat.module.scss';
import React, { memo, useEffect } from 'react';
import { MessageList } from './components/MessageList/MessageList';
import { SendMessageForm } from './components/SendMessageForm/SendMessageForm';
import socket from '../../utils/socket';
import { ChatroomUserList } from './components/ChatroomUserList/ChatroomUserList';

export const Chat = memo(() => {
  useEffect(() => {
    socket.emit('CONNECT_TO_GENERAL');
    console.log('> CONNECT_TO_GENERAL');
    return () => {
      socket.emit('DISCONNECT_FROM_GENERAL');
      console.log('> DISCONNECT_FROM_GENERAL');
    };
  }, []);
  return (
    <div className={s.chat}>
      <ChatroomUserList />
      <MessageList />
      <SendMessageForm />
    </div>
  );
});
Chat.displayName = 'Chat';
