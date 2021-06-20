import s from './default.module.scss';
import { memo } from 'react';

export const Default = memo(() => {
  return <div className={s.default}>123</div>;
});
