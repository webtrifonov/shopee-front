import { reducerGenerator } from '../../utils/store';
import { FILTER_CATEGORIES } from './listingsFiltersBar.constants';
import { SET } from '../Listings/listings.constants';

const HANDLERS = {
  [FILTER_CATEGORIES.START]: (state) => ({
    ...state,
  }),
  [FILTER_CATEGORIES.SUCCESS]: (state, payload) => {
    return {
      ...state,
      categories: payload,
    };
  },
  [FILTER_CATEGORIES.ERROR]: (state, error) => {
    return {
      ...state,
      errorCategories: error,
    };
  },
  [SET.FILTERS]: (state, payload) => {
    return {
      ...state,
      filters: {
        ...state.filters,
        ...payload,
      },
    };
  },
};
const initialState = {
  categories: [],
  errorCategories: '',
  filters: {
    exists: 'all',
    categories: [],
    price: [0, 0],
  },
};
export const listingsFiltersBar = reducerGenerator(initialState, HANDLERS);
