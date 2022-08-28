import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { CardFilm, CardFilms } from '../../types/card-film';
import {fetchFilmsDataAction, fetchFilm, fetchPromoAction, fetchFavoritesAction } from '../api-action';
import { ALL_GENRES } from '../../const';

type FilmsSliceState = {
  genre: string,
  IsFavorites: CardFilms,
  films: CardFilms,
  promoFilm: CardFilm | null,
  countRenderFilms: number,
  film: CardFilm | null,
  similarFilms: CardFilms,
  error: null,
  isDataLoading: boolean,
  favorites: CardFilms,
};

const initialState: FilmsSliceState = {
  genre: ALL_GENRES,
  films: [],
  IsFavorites: [],
  film: null,
  promoFilm: null,
  error: null,
  countRenderFilms: 8,
  similarFilms: [],
  isDataLoading: false,
  favorites: [],
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.countRenderFilms = state.countRenderFilms + action.payload;
    },
    resetCounter: (state) => {
      state.countRenderFilms = initialState.countRenderFilms;
    },
    changeGenreAction: (state, action) => {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsDataAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsDataAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isDataLoading = true;
      });
  },
});

export const {
  incrementCounter,
  resetCounter,
  changeGenreAction,
} = filmsSlice.actions;
