import { createReducer } from '@reduxjs/toolkit';
import { changeGenreAction, incrementCounter, resetCounter, loadFilms, setDataLoadedStatus } from './action';
import { CardFilms } from '../types/card-film';

type InitialState = {
  genre: string,
  films: CardFilms,
  countRenderFilms: number,
  isDataLoading: boolean,
}

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  countRenderFilms: 8,
  isDataLoading: false,
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
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});

export default reducer;
