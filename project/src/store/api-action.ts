import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { CardFilms, CardFilm } from '../types/card-film';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { loadFilms, loadFilm, redirectToRoute, requireAuth, setDataLoadedStatus, setError, getCommentsFilm, setCommentsFilm } from './action';
import { Comments, AnswerSendComments } from '../types/review';

export const fetchFilmsDataAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<CardFilms>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFilm = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<CardFilm>(`/films/${filmId}`);
    dispatch(loadFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsFilm = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'comments/fetchCommentsFilms',
  async (filmId, {dispatch, extra: api}) => {
  dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
      dispatch(getCommentsFilm(data));
      dispatch(setDataLoadedStatus(false));
    }catch{
      dispatch(setDataLoadedStatus(false));
    }
  },
);

// export const addCommentFilm = createAsyncThunk<void, CommentAdd, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'comments/addComment',
//   async ({id, comment, rating}, {dispatch, extra: api}) => {
//     const {data} = await api.post<AnswerSendComments>(`${APIRoute.Comments}/${id}`, {comment, rating});
//     dispatch(setCommentsFilm(data));
//     dispatch(redirectToRoute(`${APIRoute.Films}/${id}`));
//   },
// );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuth(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuth(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuth(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      setError(error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuth(AuthorizationStatus.NoAuth));
  },
);
