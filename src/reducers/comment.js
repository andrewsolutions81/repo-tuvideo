/* eslint-disable default-param-last */
import {
  COMMENT,
} from '../actions/types';

const initialState = {
  user: '',
  commentText: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMMENT:
      return {
        ...state,
        user: action.payload.user,
        commentText: action.payload.commentText,
      };
    default:
      return state;
  }
}
