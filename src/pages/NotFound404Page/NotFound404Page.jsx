import React from 'react';
import s from './notFound404.module.scss';
import NotFound404Image from '../../assets/images/404.png';

export const NotFound404Page = () => {
  return (
    <div className={s.notFound404Container}>
      <img className={s.image} src={NotFound404Image} alt="404" />
    </div>
  );
};
