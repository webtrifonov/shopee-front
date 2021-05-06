import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { FETCH } from '../../store/actions/actionTypes';
import { sagaGenerator } from '../../utils/store';
import {
  fetchProductByIdError,
  fetchProductByIdSuccess,
  fetchProductsError,
  fetchProductsSuccess,
} from '../actions/productsActions';
// TODO REWRITE FILE
const HANDLERS = {
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
