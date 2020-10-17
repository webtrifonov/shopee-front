import React from 'react';
import s from './SearchForm.module.scss';
import {SearchIcon} from '@primer/octicons-react';

const SearchForm = () => {
  return (
    <form className={s.searchForm}>
      <div className={s.searchContainer}>
        <input
          className={s.searchField}
          type="search"
          placeholder="Search..."
        />
        <div className={s.searchButton}>
          <SearchIcon size={30} className={s.searchIcon} />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
