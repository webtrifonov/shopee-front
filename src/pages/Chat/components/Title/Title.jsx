import React, { memo } from 'react';
import s from './Title.module.scss';

export const Title = memo(({ children, ...args }) => {
  return (
    <div className={s.meta} {...args}>
      <div className={s.metaTitle}>{children}</div>
    </div>
  );
});
