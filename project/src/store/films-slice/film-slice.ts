import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { CardFilm, CardFilms } from '../../types/card-film';
import {fetchFilmsDataAction, fetchFilm, fetchPromoAction, fetchFavoritesAction, changeToFavoriteAction, fetchSimilar } from '../api-action';
import { ALL_GENRES } from '../../const';

type FilmsSliceState = {
  genre: string,
  films: CardFilms,
  promoFilm: CardFilm | null,
  countRenderFilms: number,
  film: CardFilm | null,
  similarFilms: CardFilms,
  error: null,
  isDataLoading: boolean,
  isPromoLoading: boolean,
  isFilmLoading: boolean,
  isFavoritesLoading: boolean,
  favorites: CardFilms,
};

const initialState: FilmsSliceState = {
  genre: ALL_GENRES,
  films: [],
  film: null,
  promoFilm: null,
  error: null,
  countRenderFilms: 8,
  similarFilms: [],
  isDataLoading: false,
  isPromoLoading: false,
  isFilmLoading: false,
  isFavoritesLoading: false,
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
      .addCase(fetchSimilar.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isPromoLoading = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesLoading = false;
      })
      .addCase(changeToFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => (item.id !== action.payload.id));
        }
        if (action.payload.id === state.promoFilm?.id) {
          state.promoFilm = action.payload;
        }
        if (action.payload.id === state.film?.id) {
          state.film = action.payload;
        }
      });
  },
});

export const {
  incrementCounter,
  resetCounter,
  changeGenreAction,
} = filmsSlice.actions;
