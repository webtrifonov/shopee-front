import React from 'react';
import s from './Title.module.scss';

const Title = ({ children }) => {
  return (
    <div className={s.meta}>
      <div className={s.metaTitle}>{children}</div>
    </div>
  );
};

export default Title;
