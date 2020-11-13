import React, { useRef, useState } from 'react';
import s from './SearchForm.module.scss';
import { SearchIcon } from '@primer/octicons-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSearchActiveItemDecrement,
  changeSearchActiveItemIncrement,
  changeSearchField,
  fetchSearchStart,
} from '../../store/actions/productsActions';
import SearchResults from '../SearchResults/SearchResults';
import { debounce } from '../../utils/utils';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { searchField, searchResults, searchActiveItem } = useSelector(
    (state) => state.productsReducer
  );
  const searchFieldRef = useRef();
  const [searchListVisible, setSearchListVisible] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    if (searchResults && searchResults[searchActiveItem]?.id) {
      history.push(`/products/${searchResults[searchActiveItem].id}`);
      setSearchListVisible(false);
    } else {
      dispatch(fetchSearchStart(searchField));
    }
  };

  const searchListener = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      dispatch(changeSearchActiveItemIncrement());
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      dispatch(changeSearchActiveItemDecrement());
    }
    if (e.key === 'Enter') {
      searchHandler(e);
    }
  };
  const history = useHistory();

  const search = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(changeSearchField(value));
    debounce(() => dispatch(fetchSearchStart(value)), 500)(value);
  };

  const onFocusIn = (event) => {
    dispatch(fetchSearchStart(searchField));
    setSearchListVisible(true);
  };
  const onFocusOut = (event) => {
    // Hide list after redirect
    setTimeout(() => {
      setSearchListVisible(false);
    }, 100);
  };

  return (
    <form
      className={s.searchForm}
      name={searchActiveItem}
      onSubmit={searchHandler}
    >
      <div className={s.searchContainer}>
        <input
          ref={searchFieldRef}
          className={s.searchField}
          name="search"
          placeholder="Search..."
          onChange={search}
          value={searchField}
          onFocus={onFocusIn}
          onBlur={onFocusOut}
          autoComplete="off"
          onKeyDown={searchListener}
        />
        <button className={s.searchButton} type="submit">
          <SearchIcon size={30} className={s.searchIcon} />
        </button>
      </div>
      <SearchResults visible={searchListVisible} />
    </form>
  );
};

export default SearchForm;
