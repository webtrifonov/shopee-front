import {CHANGE_ORDER_STATUS, CHANGE_VIEW_STATUS, FETCH} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';


const HANDLERS = {
  [FETCH.PRODUCTS.START]: (state, payload) => {
    console.log('payload = ', payload);

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
  [CHANGE_ORDER_STATUS]: (state, payload) => {
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
  products: null,
  categories: null,
  loadingProducts: false,
  errorProducts: '',
  errorCategories: '',
  viewStatus: 'list',
  filters: {
    order: 'ASC'
  }
};
export default reducerGenerator(initialState, HANDLERS);
