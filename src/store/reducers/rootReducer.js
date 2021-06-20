import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import { baseModal } from '../../modules/BaseModal';
import { tooltip } from '../../modules/Tooltip';
import { homePage } from '../../pages/Home';
import { chatPage } from '../../pages/Chat';

export default combineReducers({
  authReducer,
  userReducer,
  baseModal,
  tooltip,
  ...homePage,
  ...chatPage,
});
