import { State } from '../../types/state';
import { SliceName } from '../../const';

export const selectComents = (state: State) => state[SliceName.Comment].Comment;
