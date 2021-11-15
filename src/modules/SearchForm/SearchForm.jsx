import React, { memo, useState } from 'react';
import s from './searchForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changeSearchActiveItemDecrement,
  changeSearchActiveItemIncrement,
  changeSearchField,
  getSearchResultsRequest,
} from './searchForm.actions';
import { SearchIcon } from '@primer/octicons-react';
import SearchResults from './components/SearchResults/SearchResults';
import { debounce } from './searchForm.helpers';
import { searchFormSelector } from './searchForm.selector';

export const SearchForm = memo(() => {
  const dispatch = useDispatch();
  const { searchField, searchResults, searchActiveItem } =
    useSelector(searchFormSelector);

  const [searchListVisible, setSearchListVisible] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();
    if (searchResults && searchResults[searchActiveItem]?.id) {
      history.push(`/products/${searchResults[searchActiveItem].id}`);
      setSearchListVisible(false);
    } else {
      dispatch(getSearchResultsRequest(searchField));
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
  const history = useNavigate();

  const onChangeSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch(changeSearchField(value));
    debounce(() => dispatch(getSearchResultsRequest(value)), 500)(value);
  };

  const onFocusIn = () => {
    dispatch(getSearchResultsRequest(searchField));
    setSearchListVisible(true);
  };
  const onFocusOut = () => {
    // Hide list after redirect
    setTimeout(() => {
      setSearchListVisible(false);
      dispatch(changeSearchField(''));
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
          className={s.searchField}
          name="search"
          placeholder="Search..."
          onChange={onChangeSearch}
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
});
