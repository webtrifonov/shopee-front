import React from 'react';
import s from './DefaultCentralModal.module.scss';

const CentralModal = ({ title, message }) => {
  return (
    <div className={s.content}>
      {title && <div className={s.title}>{title}</div>}
      {message && <div className={s.message}>{message}</div>}
    </div>
  );
};

export default CentralModal;
