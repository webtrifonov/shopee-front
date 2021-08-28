import React from 'react';
import s from './home.module.scss';
import { Listings } from '../../modules/Listings';
import Title from './components/Title/Title';
import { ListingsStatusBar } from '../../modules/ListingsStatusBar';
import { ListingsFiltersBar } from '../../modules/ListingsFiltersBar';

export const HomePage = () => {
  return (
    <div className={s.mainContainer}>
      <Title>All products</Title>
      <ListingsStatusBar />
      <div className={s.filters}>
        <ListingsFiltersBar />
      </div>
      <div className={s.listings}>
        <Listings />
      </div>
    </div>
  );
};
