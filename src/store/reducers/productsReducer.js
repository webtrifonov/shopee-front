import {CHANGE_FILTERS, CHANGE_VIEW_STATUS, FETCH} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';


const HANDLERS = {
  [FETCH.PRODUCTS.START]: (state) => {
    return {
      ...state,
      loadingProducts: true,
      // filters: {
      //   ...state.filters,
      //   ...payload
      // }
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
  }
};
export default reducerGenerator(initialState, HANDLERS);
