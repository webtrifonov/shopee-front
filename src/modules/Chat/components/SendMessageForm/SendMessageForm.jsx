import React, { memo, useEffect } from 'react';
import s from './sendMessageForm.module.scss';
import Input from '../Input/Input';
import { Textarea } from '../Textarea/TextArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from '../../chat.selector';
import { changeSetForm } from '../../chat.actions';
import socket from '../../../../utils/socket';

export const SendMessageForm = memo(() => {
  const dispatch = useDispatch();
  const { sendForm } = useSelector(chatSelector);
  const { authUser } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (authUser?.email && sendForm.name === '') {
      dispatch(
        changeSetForm({
          name: authUser?.email.split('@')[0],
          message: '',
        })
      );
    }
  }, [dispatch, authUser]);

  const onChangeValue = (event) => {
    const fieldName = event.currentTarget.name;

    dispatch(changeSetForm({ [fieldName]: event.target.value }));
  };
  const onSendHandler = (event) => {
    event.preventDefault();

    if (sendForm.message) {
      socket.emit('SEND_MESSAGE', {
        ...sendForm,
      });
      // dispatch(sendMessage(sendForm));
      dispatch(
        changeSetForm({
          message: '',
        })
      );
    }
  };

  return (
    <div className={s.sendMessageFormContainer}>
      {/*<Write author={sendForm.name} />*/}
      <form onSubmit={onSendHandler}>
        <div className={s.sendMessageForm}>
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
              rows={4}
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
            <button className={s.sendMessageButton}>
              <FontAwesomeIcon
                className={s.sendMessage}
                size={'lg'}
                icon={faPaperclip}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});
