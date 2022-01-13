import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listingsSelector } from '../../listings.selector';
import { CART_ITEMS_PER_PAGE } from '../../listings.constants';
import s from './pagination.module.scss';
import { changePage } from '../../listings.actions';
import classNames from 'classnames';

export const Pagination = memo(() => {
  const dispatch = useDispatch();
  const { listingsCount, currentPage } = useSelector(listingsSelector);
  const countPages = Math.ceil(listingsCount / CART_ITEMS_PER_PAGE);

  const onChangePage = (pageNumber) => {
    dispatch(changePage({ page: pageNumber }));
  };
  return (
    <div className={s.pages}>
      {listingsCount
        ? Array(countPages)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={classNames(
                  s.pageNumber,
                  currentPage === index + 1 && s.currentPage
                )}
                onClick={() => onChangePage(index + 1)}
              >
                {index + 1}
              </div>
            ))
        : null}
    </div>
  );
});
