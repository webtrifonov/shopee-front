import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import { baseModal } from '../../modules/BaseModal';
import { homePage } from '../../pages/Home';
import { tooltip } from '../../modules/Tooltip';

export default combineReducers({
  authReducer,
  userReducer,
  baseModal,
  tooltip,
  ...homePage,
});
