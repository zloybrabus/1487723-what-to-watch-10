import { createReducer } from '@reduxjs/toolkit';
import { cards } from './mocks/film';
import { changeGenreAction, incrementCounter, resetCounter } from './action';

export const COUNT_RENDER_FILMS = 8;

export const initialState = {
  genre: 'All genres',
  films: cards,
  countRenderFilms: 8,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(incrementCounter, (state, action) => {
      state.countRenderFilms = state.countRenderFilms + action.payload;
    })
    .addCase(resetCounter, (state) => {
      state.countRenderFilms = initialState.countRenderFilms;
    });
});

export default reducer;
