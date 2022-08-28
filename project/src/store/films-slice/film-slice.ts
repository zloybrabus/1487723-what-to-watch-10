import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { CardFilm, CardFilms } from '../../types/card-film';
import {fetchFilmsDataAction, fetchFilm, fetchPromoAction} from '../api-action';

type FilmsSliceState = {
  genre: string,
  films: CardFilms,
  promoFilm: CardFilm | null,
  countRenderFilms: number,
  film: CardFilm | null,
  similarFilms: CardFilms,
  isDataLoading: boolean,
};

const initialState: FilmsSliceState = {
  genre: 'All genres',
  films: [],
  film: null,
  promoFilm: null,
  countRenderFilms: 8,
  similarFilms: [],
  isDataLoading: false,
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
      });
  },
});

export const {
  incrementCounter,
  resetCounter,
  changeGenreAction,
} = filmsSlice.actions;
