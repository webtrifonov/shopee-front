import React, { memo } from 'react';
import s from './headerMenu.module.scss';
import { Link } from 'react-router-dom';

export const HeaderMenu = memo(() => {
  return (
    <nav className={s.headerMenu}>
      <ul>
        <li>
          <Link to={'/'}>Main</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/chat'}>Chat</Link>
        </li>
        <li>
          <Link to={'/order'}>Order</Link>
        </li>
      </ul>
    </nav>
  );
});
