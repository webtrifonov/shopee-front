import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';
import baseModalReducer from '../../modules/BaseModal/baseModalReducer';

export default combineReducers({
  appReducer,
  authReducer,
  productsReducer,
  userReducer,
  baseModalReducer,
});
