import React from 'react';
import s from './Title.module.scss';

const Title = ({ children, ...rest }) => {
  return (
    <div className={s.meta} {...rest}>
      <div className={s.metaTitle}>{children}</div>
    </div>
  );
};

export default Title;
