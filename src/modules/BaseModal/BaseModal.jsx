import React, { memo } from 'react';
import s from './BaseModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './baseModalActions';
import DefaultCentralModal from './components/DefaultCentralModal/DefaultCentralModal';

const BaseModal = () => {
  const { visible, Content, onClose } = useSelector(
    (state) => state.baseModalReducer
  );
  const dispatch = useDispatch();
  const onCloseHandler = (event) => {
    event.preventDefault();
    onClose && onClose();
    dispatch(closeModal());
  };
  if (visible) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
  const renderContent = () => {
    if (Content?.title) {
      const { title, message } = Content;
      return <DefaultCentralModal title={title} message={message} />;
    }
    if (Content) {
      return <Content />;
    }
  };
  return visible ? (
    <div onClick={onCloseHandler} className={s.wrapper}>
      <div onClick={(event) => event.stopPropagation()}>{renderContent()}</div>
    </div>
  ) : null;
};

export default memo(BaseModal);
