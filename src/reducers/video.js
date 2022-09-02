/* eslint-disable */
import {
  LIKE,
  DISLIKE,
} from '../actions/types';



const user = JSON.parse(localStorage.getItem('user'));
const initialState ={}
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
      case LIKE: (state, action) => {
        if (!state.currentVideo.likes.includes(action.payload)) {
          state.currentVideo.likes.push(action.payload);
          state.currentVideo.dislikes.splice(
            state.currentVideo.dislikes.findIndex(
              (userId) => userId === action.payload
            ),
            1
          );
        }
      };
      case DISLIKE: (state, action) => {
        if (!state.currentVideo.dislikes.includes(action.payload)) {
          state.currentVideo.dislikes.push(action.payload);
          state.currentVideo.likes.splice(
            state.currentVideo.likes.findIndex(
              (userId) => userId === action.payload
            ),
            1
          );
        }
      };
      default:
        return state;
    } 
  }

