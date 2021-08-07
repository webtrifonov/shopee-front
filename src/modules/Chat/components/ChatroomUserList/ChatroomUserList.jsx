import React, { memo, useEffect, useState } from 'react';
import s from './chatroomUserList.module.scss';
import { chatSelector } from '../../chat.selector';
import { useDispatch, useSelector } from 'react-redux';
import { getChatroomUserListRequest } from '../../chat.actions';

export const ChatroomUserList = memo(() => {
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();
  const { chatroomUserList } = useSelector(chatSelector);

  useEffect(() => {
    dispatch(getChatroomUserListRequest({ limit: 10, offset }));
  }, [dispatch]);
  return (
    <div className={s.list}>
      {chatroomUserList.map((item) => {
        return (
          <div key={item?.id} className={s.item}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
});