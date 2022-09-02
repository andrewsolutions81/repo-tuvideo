import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import count from './count';
import videoReducer from '../services/videoSlice';

export default combineReducers({
  auth,
  message,
  count,
  video: videoReducer,
});
