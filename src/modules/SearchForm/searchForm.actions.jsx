import { SEARCH_RESULTS, SET } from './searchForm.constants';

export const getSearchResultsRequest = (search) => {
  return {
    type: SEARCH_RESULTS.REQUEST,
    payload: search,
  };
};
export const getSearchResultsSuccess = (products) => {
  return {
    type: SEARCH_RESULTS.SUCCESS,
    payload: products,
  };
};
export const getSearchResultsFailure = (error) => {
  return {
    type: SEARCH_RESULTS.FAILURE,
    payload: error,
  };
};
export const changeSearchField = (search) => {
  return {
    type: SET.SEARCH.FIELD,
    payload: search,
  };
};
export const changeSearchActiveItem = (num) => {
  return {
    type: SET.SEARCH.ACTIVE_ITEM,
    payload: num,
  };
};
export const changeSearchActiveItemIncrement = () => {
  return {
    type: SET.SEARCH.ACTIVE_ITEM_INCREMENT,
  };
};
export const changeSearchActiveItemDecrement = () => {
  return {
    type: SET.SEARCH.ACTIVE_ITEM_DECREMENT,
  };
};
