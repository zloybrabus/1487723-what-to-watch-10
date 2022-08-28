import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectFilms = (state: State) => state[SliceName.Films].films;

export const selectFilm = (state: State) => state[SliceName.Films].film;

export const selectIsLoadingFilms = (state: State) => state[SliceName.Films].isDataLoading;

export const selectActiveGenre = (state: State) => state[SliceName.Films].genre;

export const selectcountRenderFilms = (state: State) => state[SliceName.Films].countRenderFilms;

export const selectSimilarFilms = (state: State) => state[SliceName.Films].similarFilms;

export const selectPromoFilms = (state: State) => state[SliceName.Films].promoFilm;
