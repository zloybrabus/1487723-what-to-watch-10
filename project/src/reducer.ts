import { createReducer } from '@reduxjs/toolkit';
import { cards } from './mocks/film';
import { chengeGenreAction, getFilmsWithGenreAction, resetFilterGenreAction, getMoreFilms } from './action';

const COUNT_RENDER_FILMS = 8;
const startRenderFilms = cards.slice(0, COUNT_RENDER_FILMS);
export const initialState = {
  genre: 'All genres',
  films: cards,
  filmsFilteredGenre: cards,
  isRenderShowMoreButton: cards.length > COUNT_RENDER_FILMS,
  countRenderFilms: 8,
  filmsForRender: startRenderFilms,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chengeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsWithGenreAction, (state) => {
      if (state.genre === 'All genres') {
        state.filmsFilteredGenre = cards;
      } else {
        state.filmsFilteredGenre = cards.filter((film) => film.genre === state.genre);
      }

      const filmsCount = state.filmsFilteredGenre.length;
      state.filmsForRender = state.filmsFilteredGenre.slice(0, COUNT_RENDER_FILMS);
      if (filmsCount > COUNT_RENDER_FILMS) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    })
    .addCase(getMoreFilms, (state) => {
      const newRenderedMovieCount = Math.max(state.countRenderFilms, state.countRenderFilms + COUNT_RENDER_FILMS);
      state.filmsForRender = state.filmsFilteredGenre.slice(0, newRenderedMovieCount);
      state.countRenderFilms = newRenderedMovieCount;
      const filmsCount = state.filmsFilteredGenre.length;
      if (filmsCount > state.countRenderFilms) {
        state.isRenderShowMoreButton = true;
      } else {
        state.isRenderShowMoreButton = false;
      }
    })
    .addCase(resetFilterGenreAction, (state) => {
      state.genre = 'All genres';
      state.films = cards;
    });
});

export default reducer;
