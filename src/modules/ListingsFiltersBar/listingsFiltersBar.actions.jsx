import { FILTER_CATEGORIES, SET } from './listingsFiltersBar.constants';

export const getFilterCategoriesRequest = () => {
  return {
    type: FILTER_CATEGORIES.REQUEST,
  };
};
export const getFilterCategoriesSuccess = (payload) => {
  return {
    type: FILTER_CATEGORIES.SUCCESS,
    payload,
  };
};
export const getFilterCategoriesFailure = () => {
  return {
    type: FILTER_CATEGORIES.FAILURE,
  };
};

export const changeFilters = (filters) => {
  return {
    type: SET.FILTERS,
    payload: filters,
  };
};
