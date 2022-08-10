import { createReducer } from '@reduxjs/toolkit';
import { changeGenreAction, incrementCounter, resetCounter, loadFilms, setDataLoadedStatus, requireAuth, setError } from './action';
import { CardFilms } from '../types/card-film';
import { AuthorizationStatus } from '../const';

type InitialState = {
  genre: string,
  films: CardFilms,
  countRenderFilms: number,
  isDataLoading: boolean,
  error: string | null | unknown,
  authorizationStatus: AuthorizationStatus,
}

export const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  countRenderFilms: 8,
  error: null,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
