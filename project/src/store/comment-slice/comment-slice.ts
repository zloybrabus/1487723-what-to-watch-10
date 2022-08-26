import { createSlice } from "@reduxjs/toolkit";
import { SliceName } from "../../const";
import { Comments } from "../../types/review";
import {
    getCommentsFilm,
    setCommentsFilm,
} from "../action";

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
    .addCase(getCommentsFilm, (state, action) => {
      state.currentFilmComments = action.payload;
    })
    .addCase(setCommentsFilm, (state, action) => {
      state.isCommentLoading = action.payload;
    });
  },
});

export const { } = commentSlice.actions;
