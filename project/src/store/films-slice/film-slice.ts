import { createSlice } from "@reduxjs/toolkit";
import { SliceName } from "../../const";
import { CardFilm, CardFilms } from "../../types/card-film";
import { Comments, CommentAdd } from "../../types/review";
import { changeGenreAction, incrementCounter, resetCounter, loadFilms, loadFilm, setDataLoadedStatus, requireAuth, setError, getCommentsFilm, fetchSimilarFilms }  from "../api-action";

type FilmsSliceState = {
  genre: string,
  films: CardFilms,
  countRenderFilms: number,
  film: CardFilm | null,
  similarFilms: CardFilms,
  currentFilmComments: Comments,
  isDataLoading: boolean,
  newReview: CommentAdd | null,
};

const initialState: FilmsSliceState = {
  genre: "All genres",
  films: [],
  film: null,
  countRenderFilms: 8,
  similarFilms: [],
  currentFilmComments: [],
  isDataLoading: false,
  newReview: null,
};

export const filmsSlice = createSlice({
  name: SliceName.Films,
  initialState,
  reducers: {
    clearSelectedGenre: (state) => {
      state.genre = "All genres";
    },
    setSelectedGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(loadFilms, (state, action) => {
        state.films = action.payload;
      })
      .addCase(loadFilm, (state, action) => {
        state.film = action.payload;
      })
      .addCase(changeGenreAction, (state, action) => {
        state.genre = action.payload;
      })
      .addCase(incrementCounter, (state, action) => {
        state.countRenderFilms = state.countRenderFilms + action.payload;
      })
      .addCase(resetCounter, (state) => {
        state.countRenderFilms = initialState.countRenderFilms;
      })
  },
});

export const {
  clearSelectedGenre,
  setSelectedGenre,
} = filmsSlice.actions;
