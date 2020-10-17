import React from 'react';
import s from './BaseModal.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal} from '../../store/actions/appActions';

const BaseModal = () => {
  const {modal, ModalContent} = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const onClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  }

  const renderContent = () => {


    if (ModalContent?.title) {
      const {title, message} = ModalContent;
      return (
        <div className={s.ModalContent}>
          <div className={s.title}>{title}</div>
          {message && <div className={s.message}>{message}</div>}
        </div>
      );
    }
    if (ModalContent) {
      return ModalContent;
    }
  }
  return modal ? (
    <div onClick={onClose} className={s.wrapper}>
      <div onClick={(event) => event.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  ) : null;
};

export default BaseModal;
