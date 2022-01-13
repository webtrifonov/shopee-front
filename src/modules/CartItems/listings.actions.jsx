import { CART_ITEMS, SET } from './listings.constants';

export const getListingsRequest = (payload) => {
  return {
    type: CART_ITEMS.REQUEST,
    payload,
  };
};
export const getListingsSuccess = (payload) => {
  return {
    type: CART_ITEMS.SUCCESS,
    payload,
  };
};
export const getListingsFailure = (error) => {
  return {
    type: CART_ITEMS.FAILURE,
    payload: error,
  };
};
export const changePage = (payload) => {
  return {
    type: SET.PAGE,
    payload,
  };
};
// for export
export const changeViewStatus = (payload) => {
  return {
    type: SET.VIEW_STATUS,
    payload,
  };
};
export const changeOrders = (payload) => {
  return {
    type: SET.ORDERS,
    payload,
  };
};
