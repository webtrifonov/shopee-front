import React, { memo } from 'react';
import s from './baseModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './baseModal.actions';
import DefaultCentralModal from './components/DefaultCentralModal/DefaultCentralModal';
import { baseModalSelector } from './baseModal.selector';

let BaseModal = () => {
  const { visible, Content, onClose } = useSelector(baseModalSelector);
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
BaseModal = memo(BaseModal);
export { BaseModal };
