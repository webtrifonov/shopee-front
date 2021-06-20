import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';

import { LISTINGS } from './default.constants';

const HANDLERS = {
  *[LISTINGS.REQUEST]({ payload }) {
    // try {
    //   const response = yield call(axios, {
    //     method: 'GET',
    //     url: `/products`,
    //     params: {
    //       ...payload.orders,
    //       ...payload.filters,
    //       limit: LISTINGS_PER_PAGE,
    //       offset: LISTINGS_PER_PAGE * (payload.page - 1),
    //     },
    //   });
    //   if (response.data?.success) {
    //     const { products, count } = response.data;
    //     yield put(
    //       getListingsSuccess({ listings: products, listingsCount: count })
    //     );
    //   }
    // } catch (error) {
    //   yield put(getListingsFailure(error.message));
    // }
  },
};
export const defaultSaga = sagaGenerator(HANDLERS);
