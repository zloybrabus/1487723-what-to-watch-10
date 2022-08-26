import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';

type AuthSliceTypes = {
    authorizationStatus: AuthorizationStatus,
    error: string | null | unknown,
}

const initialState: AuthSliceTypes = {
    authorizationStatus: AuthorizationStatus.Unknown,
    error: null,
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = 'error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.error = '';
      });
  },
});


export const { } = authSlice.actions;