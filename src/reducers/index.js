/* reducers.index  combineReducer */
import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import count from './count';
import videoReducer from '../services/videoSlice';
import donationReducer from './donation';

export default combineReducers({
  auth,
  message,
  count,
  video: videoReducer,
  donation: donationReducer,
});
