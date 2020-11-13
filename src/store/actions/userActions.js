import { FETCH } from './actionTypes';

export const fetchOrdersStart = () => {
  return {
    type: FETCH.ORDERS.START,
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: FETCH.ORDERS.SUCCESS,
    payload: orders,
  };
};
export const fetchOrdersError = (error) => {
  return {
    type: FETCH.ORDERS.ERROR,
    payload: error,
  };
};
