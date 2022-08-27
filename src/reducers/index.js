import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import count from './count';

export default combineReducers({
  auth,
  message,
  count,
});
