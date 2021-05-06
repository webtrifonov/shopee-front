import { FILTER_CATEGORIES } from './listingsFiltersBar.constants';
import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { sagaGenerator } from '../../utils/store';

import {
  getFilterCategoriesFailure,
  getFilterCategoriesSuccess,
} from './listingsFiltersBar.actions';

const HANDLERS = {
  *[FILTER_CATEGORIES.REQUEST]() {
    try {
      const response = yield call(axios, {
        method: 'GET',
        url: `/products/categories/`,
      });
      if (response.data?.success) {
        const categories = response.data.categories;
        yield put(getFilterCategoriesSuccess(categories));
      }
    } catch (error) {
      yield put(getFilterCategoriesFailure(error.message));
    }
  },
};
export const listingsFiltersBarSaga = sagaGenerator(HANDLERS);
