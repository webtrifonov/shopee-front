import { call, put } from 'redux-saga/effects';
import axios from '../../utils/server';
import { FETCH } from '../actions/actionTypes';
import {sagaGenerator} from '../../utils/store';
import {STORAGE_TOKEN} from '../../utils/constants';
import {fetchOrdersError, fetchOrdersSuccess} from '../actions/userActions';

const HANDLERS = {
  * [FETCH.ORDERS.START]() {
    try {
      const token = localStorage.getItem(STORAGE_TOKEN);
      const response = yield call(axios, {
        method: 'GET',
        url: `/user/orders/`,
        headers: {
          Authorization: token,
        }
      });

      if (response.data?.success) {
        const {orders} = response.data;
        yield put(fetchOrdersSuccess(orders));
      }
    } catch (error) {
      yield put(fetchOrdersError(error.message));
    }
  },
}
export default sagaGenerator(HANDLERS);
