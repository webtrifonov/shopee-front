import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';
import {
  SEARCH_FORM_ITEMS_LIMIT,
  SEARCH_RESULTS,
} from './searchForm.constants';
import {
  getSearchResultsFailure,
  getSearchResultsSuccess,
} from './searchForm.actions';

const HANDLERS = {
  *[SEARCH_RESULTS.REQUEST]({ payload }) {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products/search`,
        params: {
          search: payload,
          limit: SEARCH_FORM_ITEMS_LIMIT,
        },
      });
      if (response.data?.success) {
        const { products } = response.data;
        yield put(getSearchResultsSuccess(products));
      }
    } catch (error) {
      yield put(getSearchResultsFailure(error.message));
    }
  },
};
export const searchFormSaga = sagaGenerator(HANDLERS);
