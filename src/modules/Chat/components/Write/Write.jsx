import React, { memo } from 'react';
import s from './write.module.scss';

export const Write = memo(({ author }) => {
  return (
    <div className={s.writeContainer}>
      <div className={s.write}>{author} write a message...</div>
    </div>
  );
});
