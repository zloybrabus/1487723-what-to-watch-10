import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { filmsSlice } from './films-slice/film-slice';
import { commentSlice } from './comment-slice/comment-slice';
import { SliceName } from '../const';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.Films]: filmsSlice.reducer,
  [SliceName.Comment]: commentSlice.reducer,
});
