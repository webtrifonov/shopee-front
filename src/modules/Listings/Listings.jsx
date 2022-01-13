import React from 'react';
import { ListingList } from './components/ListingList/ListingList';
import { Pagination } from './components/Pagination/Pagination';
import s from './listings.module.scss';

export const Listings = () => {
  return (
    <div className={s.listings}>
      <ListingList />
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
};
