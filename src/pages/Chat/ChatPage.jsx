import React from 'react';
import { Title } from './components/Title/Title';
import { Chat } from '../../modules/Chat';

export const ChatPage = () => {
  return (
    <div>
      <Title>General chat</Title>
      <Chat />
    </div>
  );
};
