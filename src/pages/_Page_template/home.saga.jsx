import { fork } from 'redux-saga/effects';
import { listingsSaga } from '../../modules/Listings';
import { listingsFiltersBarSaga } from '../../modules/ListingsFiltersBar';
import { searchFormSaga } from '../../modules/SearchForm';

export const homePageSagas = [
  fork(searchFormSaga),
  fork(listingsSaga),
  fork(listingsFiltersBarSaga),
];
