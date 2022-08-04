import { createAction } from '@reduxjs/toolkit';
import { CardFilms } from '../types/card-film';

export const Action = {
  CHANGE_GANRE: 'CHANGE_GENRE',
  GET_FILMS_WITH_GENRE: 'GET_FILMS_WITH_GENRE',
  RESET_FILTER_GENRE:'RESET_FILTER_GENRE',
  GET_MORE_FILMS: 'RENDER_SHOW_MORE_BUTTON',
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  RESET_COUNTER: 'RESER_COUNTER',
};

export const changeGenreAction = createAction(Action.CHANGE_GANRE, (value)=> ({
  payload:value,
}));
export const incrementCounter = createAction(Action.INCREMENT_COUNTER, (value)=> ({
  payload:value,
}));
export const resetCounter = createAction(Action.RESET_COUNTER);
export const getFilmsWithGenreAction = createAction(Action.GET_FILMS_WITH_GENRE);
export const resetFilterGenreAction = createAction(Action.RESET_FILTER_GENRE);
export const getMoreFilms = createAction(Action.GET_MORE_FILMS);
export const loadFilms = createAction<CardFilms>('data/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
