import React, { useEffect, useRef } from 'react';
import s from './listingStatusBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAmountDown,
  faSortAmountUp,
  faThLarge,
  faThList,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewStatus, listingsSelector } from '../Listings';
import { changeOrders, getListingsRequest } from '../Listings/listings.actions';

export const ListingsStatusBar = () => {
  const dispatch = useDispatch();
  const {
    listings,
    viewStatus,
    orderType,
    orderValue,
    currentPage,
  } = useSelector(listingsSelector);
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      dispatch(
        getListingsRequest({
          filters: null,
          orders: { orderType, orderValue },
          page: currentPage,
        })
      );
    } else {
      didMount.current = true;
    }
  }, [dispatch, orderType, orderValue, currentPage]);
  const changeOrder = (type, value) => {
    dispatch(
      changeOrders({
        type,
        value,
      })
    );
  };
  const changeView = (viewStatus) => {
    dispatch(changeViewStatus({ viewStatus }));
  };

  return (
    <div className={`${s.statusBar} bg-black`}>
      <div className={s.statusBarTitle}>{listings.length} products</div>
      <div className={s.view}>
        <div className={s.statusBarTitle}>View</div>
        <FontAwesomeIcon
          onClick={() => changeView('list')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faThList}
          color={viewStatus === 'list' ? '#E3AB37' : '#fafafa'}
        />
        <FontAwesomeIcon
          onClick={() => changeView('grid')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faThLarge}
          color={viewStatus === 'grid' ? '#E3AB37' : '#fafafa'}
        />
      </div>
      <div className={s.sorting}>
        <div className={s.statusBarTitle}>Sorting</div>
        <FontAwesomeIcon
          onClick={() => changeOrder('createdAt', 'ASC')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faSortAmountUp}
          color={orderValue === 'ASC' ? '#E3AB37' : '#fafafa'}
        />
        <FontAwesomeIcon
          onClick={() => changeOrder('createdAt', 'DESC')}
          className={s.statusBarIcon}
          size={'lg'}
          icon={faSortAmountDown}
          color={orderValue === 'DESC' ? '#E3AB37' : '#fafafa'}
        />
      </div>
    </div>
  );
};
