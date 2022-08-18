import { createAction } from '@reduxjs/toolkit';
import { CardFilms, CardFilm } from '../types/card-film';
import { Comments, AnswerSendComments } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../const';

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
export const loadFilm = createAction<CardFilm>('data/loadFilm');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuth = createAction<AuthorizationStatus>('user/requireAuth');
export const setError = createAction<string | null | unknown>('user/setError');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const getCommentsFilm = createAction<Comments>('comments/getCommentsFilm');
export const setCommentsFilm = createAction<AnswerSendComments>('comments/setCommentsFilm');
