import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Comments } from '../../types/review';
import { fetchCommentsFilm, addCommentFilm } from '../api-action';

type FilmsSliceState = {
  currentFilmComments: Comments;
  isCommentLoading: boolean;
};

const initialState: FilmsSliceState = {
  currentFilmComments: [],
  isCommentLoading: false,
};

export const commentSlice = createSlice({
  name: SliceName.Comment,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsFilm.pending, (state) => {
        state.isCommentLoading = true;
      })
      .addCase(fetchCommentsFilm.fulfilled, (state, action) => {
        state.currentFilmComments = action.payload;
        state.isCommentLoading = false;
      })
      .addCase(addCommentFilm.pending, (state) => {
        state.isCommentLoading = true;
      })
      .addCase(addCommentFilm.fulfilled, (state, action) => {
        state.currentFilmComments = action.payload;
        state.isCommentLoading = false;
      });
  },
});
