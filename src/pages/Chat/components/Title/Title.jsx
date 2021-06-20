import React, { memo } from 'react';
import s from './Title.module.scss';

export const Title = memo(({ children }) => {
  return (
    <div className={s.meta}>
      <div className={s.metaTitle}>{children}</div>
    </div>
  );
});
