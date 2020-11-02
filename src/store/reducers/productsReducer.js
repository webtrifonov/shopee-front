import {CHANGE_FILTERS, CHANGE_VIEW_STATUS, FETCH, SEARCH} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';
import {SEARCH_ITEMS_LIMIT} from '../../utils/constants';

const calcSearchActiveItem = (searchActiveItem, income) => {
  let result = searchActiveItem + income;
  if (result < 0) {
    result = 0
  } else if (result > SEARCH_ITEMS_LIMIT - 1) {
    result = 4;
  }
  return result;
}

const HANDLERS = {
  [FETCH.PRODUCTS.START]: (state) => {
    return {
      ...state,
      loadingProducts: true,
    };
  },
  [FETCH.PRODUCTS.SUCCESS]: (state, products) => {
    return {
      ...state,
      loadingProducts: false,
      products,
    };
  },
  [FETCH.PRODUCTS.ERROR]: (state, payload) => {
    return {
      ...state,
      loadingProducts: false,
      errorProducts: payload.error,
    };
  },
  [FETCH.CATEGORIES.START]: (state) => ({
    ...state
  }),
  [FETCH.CATEGORIES.SUCCESS]: (state, categories) => {
    return {
      ...state,
      categories,
    };
  },
  [FETCH.CATEGORIES.ERROR]: (state, error) => {
    return {
      ...state,
      errorCategories: error,
    };
  },
  [CHANGE_VIEW_STATUS]: (state, payload) => {
    return {
      ...state,
      viewStatus: payload,
    }
  },
  [CHANGE_FILTERS]: (state, payload) => {
    return {
      ...state,
      filters: {
        ...state.filters,
        ...payload
      }
    }
  },
  [SEARCH.FIELD]: (state, payload) => ({
    ...state,
    searchField: payload
  }),
  [FETCH.SEARCH.SUCCESS]: (state, payload) => {
    return {
      ...state,
      searchResults: payload,
    }
  },
  [SEARCH.ACTIVE_ITEM.CHANGE]: (state, payload) => {
    return {
      ...state,
      searchActiveItem: payload
    }
  },
  [SEARCH.ACTIVE_ITEM.INCREMENT]: (state) => {
    return {
      ...state,
      searchActiveItem: calcSearchActiveItem(state.searchActiveItem, 1)
    }
  },
  [SEARCH.ACTIVE_ITEM.DECREMENT]: (state) => ({
    ...state,
    searchActiveItem: calcSearchActiveItem(state.searchActiveItem, -1)
  }),
  [FETCH.PRODUCT_BY_ID.START]: (state) => ({
    ...state,
    loadingProduct: true,
  }),
  [FETCH.PRODUCT_BY_ID.SUCCESS]: (state, payload) => {
    return {
      ...state,
      loadingProduct: false,
      product: payload,
    };
  },
  [FETCH.PRODUCT_BY_ID.ERROR]: (state, payload) => {
    return {
      ...state,
      loadingProduct: false,
      errorProduct: payload,
    };
  },
}
const initialState = {
  products: [],
  categories: null,
  loadingProducts: false,
  errorProducts: '',
  errorCategories: '',
  viewStatus: 'list',
  filters: {
    order: 'ASC',
    exists: 'all',
    categories: [],
  },
  loadingProduct: false,
  product: {},
  errorProduct: '',
  searchField: '',
  searchResults: [],
  searchActiveItem: 0,
};
export default reducerGenerator(initialState, HANDLERS);
