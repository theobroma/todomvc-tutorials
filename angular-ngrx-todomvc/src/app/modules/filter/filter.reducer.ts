import { createReducer, on } from '@ngrx/store';
import { setFilterAC } from './filter.actions';

export type FilterState = string;

export const initialState: FilterState = 'SHOW_ALL';

export const filterReducer = createReducer(
  initialState,
  on(setFilterAC, (state, action) => action.prop)
);
