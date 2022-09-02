/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentVideo: [],
};

export const videoSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      state.currentVideo = action.payload;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload,
          ),
          1,
        );
      }
    },
    dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload,
          ),
          1,
        );
      }
    },
  },
});

export const {
  like, dislike, fetchSuccess,
} = videoSlice.actions;

export default videoSlice.reducer;
