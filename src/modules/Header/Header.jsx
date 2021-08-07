import React, { memo } from 'react';
import s from './header.module.scss';
import Logo from '../../components/icons/Logo/Logo';
import classNames from 'classnames';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { AuthBar } from './components/AuthBar/AuthBar';
import { SearchForm } from '../SearchForm';
import { Link } from 'react-router-dom';

export const Header = memo(() => {
  return (
    <div className={classNames(s.headerContainer, `bg-black`)}>
      <Link to={'/'} className={s.logo}>
        <Logo fill="#DC4055" />
      </Link>
      <HeaderMenu />
      <SearchForm />
      <AuthBar />
    </div>
  );
});
