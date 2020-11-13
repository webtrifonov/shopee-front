import {
  CHANGE_FILTERS,
  CHANGE_VIEW_STATUS,
  FETCH,
  SEARCH,
} from './actionTypes';

export function fetchProductsStart(filters) {
  return {
    type: FETCH.PRODUCTS.START,
    payload: filters,
  };
}
export function fetchProductsSuccess(products) {
  return {
    type: FETCH.PRODUCTS.SUCCESS,
    payload: products,
  };
}
export function fetchProductsError(error) {
  return {
    type: FETCH.PRODUCTS.ERROR,
    payload: error,
  };
}
export function fetchCategoriesStart() {
  return {
    type: FETCH.CATEGORIES.START,
  };
}
export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH.CATEGORIES.SUCCESS,
    payload: categories,
  };
}
export function fetchCategoriesError(error) {
  return {
    type: FETCH.CATEGORIES.ERROR,
    payload: error,
  };
}
export const changeViewStatus = (view) => {
  return {
    type: CHANGE_VIEW_STATUS,
    payload: view,
  };
};
export const changeFilters = (filters) => {
  return {
    type: CHANGE_FILTERS,
    payload: filters,
  };
};

export function fetchSearchStart(search) {
  return {
    type: FETCH.SEARCH.START,
    payload: search,
  };
}
export function fetchSearchSuccess(products) {
  return {
    type: FETCH.SEARCH.SUCCESS,
    payload: products,
  };
}
export function fetchSearchError(error) {
  return {
    type: FETCH.SEARCH.ERROR,
    payload: error,
  };
}
export function changeSearchField(search) {
  return {
    type: SEARCH.FIELD,
    payload: search,
  };
}
export function changeSearchActiveItem(num) {
  return {
    type: SEARCH.ACTIVE_ITEM.CHANGE,
    payload: num,
  };
}
export function changeSearchActiveItemIncrement() {
  return {
    type: SEARCH.ACTIVE_ITEM.INCREMENT,
  };
}
export function changeSearchActiveItemDecrement() {
  return {
    type: SEARCH.ACTIVE_ITEM.DECREMENT,
  };
}
export function fetchProductByIdStart(id) {
  return {
    type: FETCH.PRODUCT_BY_ID.START,
    payload: id,
  };
}
export function fetchProductByIdSuccess(product) {
  return {
    type: FETCH.PRODUCT_BY_ID.SUCCESS,
    payload: product,
  };
}
export function fetchProductByIdError(error) {
  return {
    type: FETCH.PRODUCT_BY_ID.ERROR,
    payload: error,
  };
}
