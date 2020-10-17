import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import appReducer from  './appReducer';

export default combineReducers({
  appReducer,
  productsReducer,
});
