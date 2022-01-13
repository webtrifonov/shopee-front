import { reducerGenerator } from '../../utils/store';
import { LISTINGS, SET } from './listings.constants';

const initialState = {
  loadingListings: false,
  listings: [],
  errorListings: '',
  listingsCount: 0,
  currentPage: 1,
  // for export
  viewStatus: 'list', // list | grid
  orderType: 'createdAt',
  orderValue: 'ASC', // ASC | DESC,
};
const HANDLERS = {
  [LISTINGS.REQUEST]: (state) => {
    return {
      ...state,
      loadingListings: true,
      listings: initialState.listings,
      errorListings: initialState.errorListings,
    };
  },
  [LISTINGS.SUCCESS]: (state, { listings, listingsCount }) => {
    return {
      ...state,
      loadingListings: false,
      listings,
      listingsCount,
    };
  },
  [LISTINGS.FAILURE]: (state, payload) => {
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

export const listings = reducerGenerator(initialState, HANDLERS);
