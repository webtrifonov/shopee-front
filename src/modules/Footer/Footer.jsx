import React, { memo } from 'react';
import s from './footer.module.scss';

export const Footer = memo(() => {
  return <div className={s.footer}>Copyright by Trifonov 2020</div>;
});
