import React, { memo, useEffect, useState } from 'react';
import s from './messagesList.module.scss';
import { MessageItem } from '../MessageItem/MessageItem';
import socket from '../../../../utils/socket';
import { useDispatch } from 'react-redux';

export const MessageList = memo(() => {
  const [messageList, setMessageList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const receiveMessage = (payload) => {
      // dispatch(receiveMessage(data));
      setMessageList((prev) => [...prev, payload?.messageData]);
    };
    const getMessages = (payload) => {
      setMessageList(payload.messageList);
    };
    socket.on('RECEIVE_MESSAGE', receiveMessage);
    socket.on('GET_MESSAGES', getMessages);
  }, []);

  return (
    <div className={s.messageListContainer}>
      {messageList?.length
        ? messageList.map((item) => <MessageItem key={item?.id} item={item} />)
        : null}
    </div>
  );
});
