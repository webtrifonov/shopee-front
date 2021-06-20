import React, { memo, useState } from 'react';
import s from './sendMessageForm.module.scss';
import Input from '../Input/Input';
import { Textarea } from '../Textarea/TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from '../../chat.selector';
import { changeSetForm, sendMessage } from '../../chat.actions';
import socket from '../../../../utils/socket';

export const SendMessageForm = memo(() => {
  const dispatch = useDispatch();
  const { sendForm } = useSelector(chatSelector);

  const onChangeValue = (event) => {
    const fieldName = event.currentTarget.name;

    dispatch(changeSetForm({ [fieldName]: event.target.value }));
  };
  const onSendHandler = (event) => {
    event.preventDefault();
    socket.emit('SEND_MESSAGE', {
      ...sendForm,
    });
    dispatch(sendMessage(sendForm));
    dispatch(
      changeSetForm({
        name: '',
        message: '',
      })
    );
  };
  return (
    <form className={s.sendMessageForm} onSubmit={onSendHandler}>
      <div className={s.nameField}>
        <Input
          type="text"
          className={s.name}
          placeholder="Enter your name"
          name="name"
          value={sendForm.name}
          onChange={onChangeValue}
        />
      </div>
      <div className={s.messageField}>
        <Textarea
          className={s.message}
          name="message"
          placeholder="Enter your message"
          value={sendForm.message}
          onChange={onChangeValue}
        />
      </div>
      <div className={s.actions}>
        <button className={s.sendMessageButton}>
          <FontAwesomeIcon
            className={s.sendMessage}
            size={'lg'}
            icon={faPaperPlane}
          />
        </button>
      </div>
    </form>
  );
});
