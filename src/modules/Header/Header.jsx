import React, { memo } from 'react';
import s from './header.module.scss';
import Logo from '../../components/icons/Logo/Logo';
import classNames from 'classnames';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { AuthBar } from './components/AuthBar/AuthBar';
import { SearchForm } from '../SearchForm';

export const Header = memo(() => {
  return (
    <div className={classNames(s.headerContainer, `bg-black`)}>
      <div className={s.logo}>
        <Logo fill="#DC4055" />
      </div>
      <HeaderMenu />
      <SearchForm />
      <AuthBar />
    </div>
  );
});
