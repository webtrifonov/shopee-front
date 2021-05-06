import { reducerGenerator } from '../../utils/store';
import {
  SEARCH_FORM_ITEMS_LIMIT,
  SEARCH_RESULTS,
  SET,
} from './searchForm.constants';

const calcSearchActiveItem = (searchActiveItem, income) => {
  let result = searchActiveItem + income;
  if (result < 0) {
    result = 0;
  } else if (result > SEARCH_FORM_ITEMS_LIMIT - 1) {
    result = 4;
  }
  return result;
};

const HANDLERS = {
  [SEARCH_RESULTS.REQUEST]: (state) => ({
    ...state,
  }),
  [SEARCH_RESULTS.SUCCESS]: (state, payload) => {
    return {
      ...state,
      searchResults: payload,
    };
  },
  [SET.SEARCH.FIELD]: (state, payload) => {
    return {
      ...state,
      searchField: payload,
    };
  },
  [SET.SEARCH.ACTIVE_ITEM]: (state, payload) => {
    return {
      ...state,
      searchActiveItem: payload,
    };
  },
  [SET.SEARCH.ACTIVE_ITEM.INCREMENT]: (state) => {
    return {
      ...state,
      searchActiveItem: calcSearchActiveItem(state.searchActiveItem, 1),
    };
  },
  [SET.SEARCH.ACTIVE_ITEM.DECREMENT]: (state) => ({
    ...state,
    searchActiveItem: calcSearchActiveItem(state.searchActiveItem, -1),
  }),
};
const initialState = {
  searchField: '',
  searchResults: [],
  searchActiveItem: 0,
};
export const searchForm = reducerGenerator(initialState, HANDLERS);
