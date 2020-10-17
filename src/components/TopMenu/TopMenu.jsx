import React from 'react';
import s from './TopMenu.module.scss';
import {Link} from 'react-router-dom';

const TopMenu = () => {
  return (
    <nav className={s.topMenu}>
      <ul>
        <li>
          <Link to={'/'}>Main</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
