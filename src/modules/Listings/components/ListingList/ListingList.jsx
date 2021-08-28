import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './listingList.module.scss';
import { listingsSelector } from '../../listings.selector';
import { ListingItem } from '../ListingItem/ListingItem';
import Loader from '../Loader/Loader';
import classNames from 'classnames';
import { getListingsRequest } from '../../listings.actions';
import { openModal } from '../../../BaseModal';

export const ListingList = () => {
  const dispatch = useDispatch();
  const {
    loadingListings,
    listings,
    currentPage,
    viewStatus,
    orderType,
    orderValue,
  } = useSelector(listingsSelector);

  useEffect(() => {
    dispatch(
      getListingsRequest({
        filters: null,
        orders: { orderType, orderValue },
        page: currentPage,
      })
    );
  }, [dispatch, orderType, orderValue, currentPage]);

  const addToCart = (event) => {
    console.log(event);
    dispatch(
      openModal({
        Content: {
          title: 'qwe',
          message: 'asd',
        },
      })
    );
  };
  return (
    <div
      className={classNames(
        s.listingList,
        viewStatus === 'grid' && s.listingListGrid
      )}
    >
      {loadingListings && <Loader />}
      {!!listings?.length
        ? listings.map((item) => {
            return (
              <ListingItem
                key={item.id}
                item={item}
                viewStatus={viewStatus}
                addToCart={addToCart}
              />
            );
          })
        : null}
    </div>
  );
};
