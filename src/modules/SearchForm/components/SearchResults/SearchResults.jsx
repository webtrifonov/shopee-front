import React, { memo } from 'react';
import s from './SearchResults.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchFormSelector } from '../../index';

const SearchResult = (props) => {
  const { id, title, image } = props.item;

  return (
    <Link
      className={`${s.searchResult} ${props.active && s.activeResult}`}
      to={`/products/${id}`}
    >
      <div className={s.image}>
        <img src={image} alt={title} />
      </div>
      <div className={s.body}>
        <div className={s.title}>{title}</div>
      </div>
    </Link>
  );
};

const SearchResults = (props) => {
  const { searchResults, searchActiveItem } = useSelector(searchFormSelector);

  return (
    props.visible && (
      <div
        className={`${s.searchResults} ${!!searchResults.length && s.visible}`}
      >
        {searchResults.map((item, index) => {
          return (
            <SearchResult
              key={item.id}
              item={item}
              active={index === searchActiveItem}
            />
          );
        })}
      </div>
    )
  );
};

export default memo(SearchResults);
