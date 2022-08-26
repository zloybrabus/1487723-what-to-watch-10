// import { createReducer } from '@reduxjs/toolkit';
// import { changeGenreAction, incrementCounter, resetCounter, loadFilms, loadFilm, setDataLoadedStatus, requireAuth, setError, getCommentsFilm, fetchSimilarFilms } from './action';
// import { CardFilm, CardFilms } from '../types/card-film';
// import { AuthorizationStatus } from '../const';
// import { Comments } from '../types/review';

// type InitialState = {
//   genre: string,
//   films: CardFilms,
//   countRenderFilms: number,
//   isDataLoading: boolean,
//   isFilmLoading: boolean,
//   isCommentLoading: boolean,
//   film: CardFilm | null,
//   similarFilms: CardFilms,
//   currentFilmComments: Comments,
//   error: string | null | unknown,
//   authorizationStatus: AuthorizationStatus,
// }

// export const initialState: InitialState = {
//   genre: 'All genres',
//   films: [],
//   currentFilmComments: [],
//   countRenderFilms: 8,
//   isCommentLoading: false,
//   isFilmLoading: false,
//   similarFilms: [],
//   film: null,
//   error: null,
//   isDataLoading: false,
//   authorizationStatus: AuthorizationStatus.Unknown,
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeGenreAction, (state, action) => {
//       state.genre = action.payload;
//     })
//     .addCase(incrementCounter, (state, action) => {
//       state.countRenderFilms = state.countRenderFilms + action.payload;
//     })
//     .addCase(resetCounter, (state) => {
//       state.countRenderFilms = initialState.countRenderFilms;
//     })
//     .addCase(loadFilms, (state, action) => {
//       state.films = action.payload;
//     })
//     .addCase(loadFilm, (state, action) => {
//       state.film = action.payload;
//     })
//     .addCase(setDataLoadedStatus, (state, action) => {
//       state.isDataLoading = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     .addCase(getCommentsFilm, (state, action) => {
//       state.currentFilmComments = action.payload;
//     })
//     .addCase(fetchSimilarFilms, (state, action) => {
//       state.similarFilms = action.payload;
//     })
//     .addCase(requireAuth, (state, action) => {
//       state.authorizationStatus = action.payload;
//     });
// });

// export default reducer;
