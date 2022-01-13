import React, {memo} from 'react';
import s from './alertMessage.module.scss';

const types = {
  error: '#dc4055',
  warn: '#e3ab37',
  success: 'green',
}
export const AlertMessage = memo(({ type, children }) => {
  return (
    <div style={
      {...(type && { border: `1px solid ${types[type]}` })}
    } className={s.container}>
      <div className={s.text}>{children}</div>
    </div>
  );
});
AlertMessage.displayName = 'AlertMessage';
