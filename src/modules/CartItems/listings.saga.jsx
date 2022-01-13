import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';

import { CART_ITEMS, CART_ITEMS_PER_PAGE } from './listings.constants';
import { getListingsFailure, getListingsSuccess } from './listings.actions';

const HANDLERS = {
  *[CART_ITEMS.REQUEST]({ payload }) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products`,
        params: {
          ...payload.orders,
          ...payload.filters,
          limit: CART_ITEMS_PER_PAGE,
          offset: CART_ITEMS_PER_PAGE * (payload.page - 1),
        },
      });
      if (response.data?.success) {
        const { products, count } = response.data;
        yield put(
          getListingsSuccess({ listings: products, listingsCount: count })
        );
      }
    } catch (error) {
      yield put(getListingsFailure(error.message));
    }
  },
};
export const listingsSaga = sagaGenerator(HANDLERS);
