import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './listingList.module.scss';
import { listingsSelector } from '../../listings.selector';
import { ListingItem } from '../ListingItem/ListingItem';
import Loader from '../Loader/Loader';
import classNames from 'classnames';
import { getListingsRequest } from '../../listings.actions';
import { openModal } from '../../../BaseModal';
import { DefaultModal } from '../../../DefaultModal';
import { AlertMessage } from '../AlertMessage/AlertMessage';

export const ListingList = () => {
  const dispatch = useDispatch();

  const {
    loadingListings,
    listings,
    errorListings,
    currentPage,
    viewStatus,
    orderType,
    orderValue,
  } = useSelector(listingsSelector);

  const [visible, setVisible] = useState(false);
  const [currentListingId, setCurrentListingId] = useState(null);

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
  const buyNow = (id) => (event) => {
    setCurrentListingId(id);
    setVisible(true);
  };

  const renderList = () => {
    if (loadingListings) {
      return (<Loader />)
    } else if (errorListings) {
      return <AlertMessage type="error">{errorListings}</AlertMessage>
    } else if (!listings.length) {
      return <AlertMessage>No records</AlertMessage>
    } else {
      return listings.map((item) => {
        return (
          <ListingItem
            key={item.id}
            item={item}
            viewStatus={viewStatus}
            addToCart={addToCart}
            buyNow={buyNow(item.id)}
          />
        );
      })
    }
  }
  return (
    <div
      className={classNames(
        s.listingList,
        viewStatus === 'grid' && s.listingListGrid
      )}
    >
      <div className={s.list}>
        {renderList()}
      </div>
      <DefaultModal
        visible={visible}
        setVisible={setVisible}
        title={listings.find((item) => item.id === currentListingId)?.id}
        message={listings.find((item) => item.id === currentListingId)?.title}
        // children={<h1 style={{ color: '#FFF' }}>content</h1>}
      />
    </div>
  );
};
