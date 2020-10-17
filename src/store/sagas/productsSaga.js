import { call, put, select } from 'redux-saga/effects';
import axios from '../../utils/server';
import { FETCH } from '../actions/actionTypes';
import {sagaGenerator} from '../../utils/store';
import {
  fetchCategoriesError,
  fetchCategoriesSuccess,
  fetchProductsError,
  fetchProductsSuccess
} from '../actions/productsActions';

const HANDLERS = {
  * [FETCH.CATEGORIES.START]() {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products/categories/`,
      });
      if (response.data?.success) {
        const categories = response.data.categories;
        yield put(fetchCategoriesSuccess(categories));
      }
    } catch (error) {
      yield put(fetchCategoriesError(error.message));
    }
  },
  * [FETCH.PRODUCTS.START]({payload}) {

    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products`,
        params: {
          order: payload.order,
        },
      });
      if (response.data?.success) {
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
      }
    } catch (error) {
      yield put(fetchProductsError(error.message));
    }
  },
}
export default sagaGenerator(HANDLERS);
