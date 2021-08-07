import React, { memo, useEffect, useState } from 'react';
import s from './messagesList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';
import socket from '../../../../utils/socket';

export const MessageList = memo(() => {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    socket.on('GET_MESSAGES', (payload) => {
      setMessageList(payload.messageList);
    });
    socket.on('NEW_MESSAGE', (payload) => {
      console.log('>>> payload = ', payload);

      setMessageList((prev) => [...prev, payload.messageData]);
    });
  }, []);

  return (
    <div className={s.messageListContainer}>
      {messageList?.length
        ? messageList.map((item) => <MessageItem key={item.id} item={item} />)
        : null}
    </div>
  );
});
