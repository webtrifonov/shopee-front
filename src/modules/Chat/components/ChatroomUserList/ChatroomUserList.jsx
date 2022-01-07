import React, { memo } from 'react';
import s from './chatroomUserList.module.scss';
import { chatSelector } from '../../chat.selector';
import { useSelector } from 'react-redux';

export const ChatroomUserList = memo(() => {
  const { chatroomUserList } = useSelector(chatSelector);

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
