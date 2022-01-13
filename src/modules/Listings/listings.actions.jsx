import { LISTINGS, SET } from './listings.constants';

export const getListingsRequest = (payload) => {
  return {
    type: LISTINGS.REQUEST,
    payload,
  };
};
export const getListingsSuccess = (payload) => {
  return {
    type: LISTINGS.SUCCESS,
    payload,
  };
};
export const getListingsFailure = (payload) => {
  return {
    type: LISTINGS.FAILURE,
    payload,
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
