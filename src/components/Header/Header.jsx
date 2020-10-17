import React from 'react';
import s from './Header.module.scss';

import Logo from '../icons/Logo/Logo';
import TopMenu from '../TopMenu/TopMenu';
import SearchForm from '../SearchForm/SearchForm';

const Header = (props) => {
  const {children} = props;

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Logo fill='#DC4055' />
      </div>
      <TopMenu />
      <SearchForm />
    </div>
  );
};

export default Header;
