import { FETCH } from '../actions/actionTypes';
import { reducerGenerator } from '../../utils/store';

const HANDLERS = {
  [FETCH.ORDERS.START]: (state) => ({
    ...state,
    loadingOrders: true,
  }),
  [FETCH.ORDERS.SUCCESS]: (state, orders) => {
    return {
      ...state,
      loadingOrders: false,
      orders,
    };
  },
  [FETCH.ORDERS.ERROR]: (state, error) => {
    return {
      ...state,
      errorOrders: error,
    };
  },
};
const initialState = {
  loadingOrders: false,
  orders: [],
  errorOrders: null,
};
export default reducerGenerator(initialState, HANDLERS);
