import { createAction } from '@reduxjs/toolkit';
import { CardFilms } from '../types/card-film';

export const Action = {
  CHANGE_GENRE: 'app/changeGenre',
  INCREMENT_COUNTER: 'app/incrementCounter',
  RESET_COUNTER: 'app/resetCounter',
};

export const changeGenreAction = createAction<string>(Action.CHANGE_GENRE);

export const incrementCounter = createAction(
  Action.INCREMENT_COUNTER,
  (count: number) => ({
    payload: count
  }),
);

export const resetCounter = createAction(Action.RESET_COUNTER);
export const loadFilms = createAction<CardFilms>('data/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
