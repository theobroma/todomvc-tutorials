import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { FilterType } from '../../@types';
import { VisibilityFilters } from '../../@types';

const filterInitialState = {
  //   value: 'SHOW_ALL' as FilterType,
  value: VisibilityFilters.SHOW_ALL,
};

// export type filterInitialStateType = typeof filterInitialState;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterAC(state, action: PayloadAction<FilterType>) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterAC } = filterSlice.actions;
