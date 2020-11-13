import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { FETCH } from '../actions/actionTypes';
import { sagaGenerator } from '../../utils/store';
import {
  fetchCategoriesError,
  fetchCategoriesSuccess,
  fetchProductByIdError,
  fetchProductByIdSuccess,
  fetchProductsError,
  fetchProductsSuccess,
  fetchSearchError,
  fetchSearchSuccess,
} from '../actions/productsActions';
import { SEARCH_ITEMS_LIMIT } from '../../utils/constants';

const HANDLERS = {
  *[FETCH.CATEGORIES.START]() {
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
  *[FETCH.PRODUCTS.START]({ payload }) {
    try {
      const params = { ...payload };
      if (params.categories) {
        params.categories = JSON.stringify(params.categories);
      }

      const response = yield call(axios, {
        method: 'GET',
        url: `/products`,
        params: params,
      });
      if (response.data?.success) {
        const products = response.data.products;
        yield put(fetchProductsSuccess(products));
      }
    } catch (error) {
      yield put(fetchProductsError(error.message));
    }
  },
  *[FETCH.SEARCH.START]({ payload }) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products/search`,
        params: {
          search: payload,
          limit: SEARCH_ITEMS_LIMIT,
        },
      });
      if (response.data?.success) {
        const { products } = response.data;
        yield put(fetchSearchSuccess(products));
      }
    } catch (error) {
      yield put(fetchSearchError(error.message));
    }
  },
  *[FETCH.PRODUCT_BY_ID.START]({ payload }) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products/product/${payload}`,
      });
      if (response.data?.success) {
        const { product } = response.data;
        yield put(fetchProductByIdSuccess(product));
      }
    } catch (error) {
      yield put(fetchProductByIdError(error.message));
    }
  },
};
export default sagaGenerator(HANDLERS);
