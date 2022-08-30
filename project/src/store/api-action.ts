import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { CardFilms, CardFilm } from '../types/card-film';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { Comments, CommentAdd } from '../types/review';
import { redirectToRoute } from './action';
import { toast } from 'react-toastify';
import { ChangeFavoritePayload } from '../types/change-favorite-payload';

export const fetchFilmsDataAction = createAsyncThunk<CardFilms, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<CardFilms>(APIRoute.Films);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<CardFilm, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (filmId, { extra: api}) => {
    const {data} = await api.get<CardFilm>(`/films/${filmId}`);
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<CardFilm, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<CardFilm>(APIRoute.Promo);
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<CardFilms, undefined, {
  extra: AxiosInstance,
}>(
  'favorite/fetchFavorites',
  async (_args, {extra: api}) => {
    const {data} = await api.get<CardFilms>(APIRoute.Favorite);
    return data;
  }
);

export const changeToFavoriteAction = createAsyncThunk<CardFilm, ChangeFavoritePayload, {
  extra: AxiosInstance
}>(
  'favorite/addToFavorite',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<CardFilm>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

export const fetchSimilar = createAsyncThunk<CardFilms, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/FilmSimilar',
  async (filmId, { extra: api}) => {
    const {data} = await api.get<CardFilms>(`/films/${filmId}/similar`);
    return data;
  }
);

export const fetchCommentsFilm = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'comments/fetchCommentsFilms',
  async (filmId, { extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
    return data;
  },
);

export const addCommentFilm = createAsyncThunk<Comments, CommentAdd, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'comments/addComment',
  async ({id, comment, rating}, { extra: api}) => {
    const {data} = await api.post<Comments>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    const { data } = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<User, Auth, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/login',
  async ({ login: email, password }, {dispatch, extra: api }) => {
    try {
      const { data } = await api.post<User>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
      }
      throw e;
    }

  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
