import React from 'react';
import s from './Title.module.scss';

const Title = ({ children }) => {
  return (
    <div className={s.titleContainer}>
      <div className={s.title}>{children}</div>
    </div>
  );
};

export default Title;
