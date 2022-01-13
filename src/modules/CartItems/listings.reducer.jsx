import { reducerGenerator } from '../../utils/store';
import { CART_ITEMS, SET } from './listings.constants';

const HANDLERS = {
  [CART_ITEMS.REQUEST]: (state) => {
    return {
      ...state,
      loadingListings: true,
    };
  },
  [CART_ITEMS.SUCCESS]: (state, { listings, listingsCount }) => {
    return {
      ...state,
      loadingListings: false,
      listings,
      listingsCount,
    };
  },
  [CART_ITEMS.FAILURE]: (state, payload) => {
    return {
      ...state,
      loadingListings: false,
      errorListings: payload.error,
    };
  },
  [SET.PAGE]: (state, payload) => {
    return {
      ...state,
      currentPage: payload.page,
    };
  },
  // for export
  [SET.VIEW_STATUS]: (state, payload) => {
    return {
      ...state,
      viewStatus: payload.viewStatus,
    };
  },
  [SET.ORDERS]: (state, payload) => {
    return {
      ...state,
      orderType: payload.type,
      orderValue: payload.value,
    };
  },
};
const initialState = {
  listings: [],
  listingsCount: 0,
  loadingListings: false,
  errorListings: '',
  currentPage: 1,
  // for export
  viewStatus: 'list', // list | grid
  orderType: 'createdAt',
  orderValue: 'ASC', // ASC | DESC,
};
export const listings = reducerGenerator(initialState, HANDLERS);
