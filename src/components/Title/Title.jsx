import React, { memo } from 'react';
import s from './Title.module.scss';

export const Title = memo(({ children, ...rest }) => {
  return (
    <div className={s.meta} {...rest}>
      <div className={s.metaTitle}>{children}</div>
    </div>
  );
});
