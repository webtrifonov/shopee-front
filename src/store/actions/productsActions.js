import {CHANGE_ORDER_STATUS, CHANGE_VIEW_STATUS, FETCH} from './actionTypes';

export function fetchProductsStart(filters) {

  return {
    type: FETCH.PRODUCTS.START,
    payload: filters,
  }
}
export function fetchProductsSuccess(products) {
  return {
    type: FETCH.PRODUCTS.SUCCESS,
    payload: products,
  }
}
export function fetchProductsError(error) {
  return {
    type: FETCH.PRODUCTS.ERROR,
    payload: error,
  }
}
export function fetchCategoriesStart() {
  return {
    type: FETCH.CATEGORIES.START,
  }
}
export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH.CATEGORIES.SUCCESS,
    payload: categories,
  }
}
export function fetchCategoriesError(error) {
  return {
    type: FETCH.CATEGORIES.ERROR,
    payload: error,
  }
}
export const changeViewStatus = (view) => {
  return {
    type: CHANGE_VIEW_STATUS,
    payload: view
  }
}
export const changeOrderStatus = (order) => {
  return {
    type: CHANGE_ORDER_STATUS,
    payload: order
  }
}

