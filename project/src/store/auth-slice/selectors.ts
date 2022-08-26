import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectAuthorizationStatus = (state: State) => state[SliceName.Auth].authorizationStatus;

export const selectLoginError = (state: State) => state[SliceName.Auth].error;
