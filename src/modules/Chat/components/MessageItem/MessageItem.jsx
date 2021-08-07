import React from 'react';
import s from './messageItem.module.scss';

export const MessageItem = ({ item: { id, image, name, message } }) => {
  return (
    <div className={s.messageItemContainer}>
      <div className={`${s.messageItem} bg-black`}>
        {image ? (
          <div className={s.imageContainer}>
            <img src={image} alt="no image" />
          </div>
        ) : null}
        <div className={s.textContainer}>
          <div className={s.name}>{name}</div>
          <div className={s.message}>{message}</div>
        </div>
        {/*<div className={s.textContainer}>*/}
        {/*  <div className={s.name}>{name}</div>*/}
        {/*  <div className={s.message}>{message}</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
