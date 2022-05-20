import { createSlice } from '@reduxjs/toolkit';

import { FilterType } from '../../@types';

const filterInitialState = {
  value: 'SHOW_ALL' as FilterType, // replace with enum
};

// export type filterInitialStateType = typeof filterInitialState;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    // setFilterAC: (state, { payload }: PayloadAction<FilterType>) => payload,
    setFilterAC(state, action) {
      state.value = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterAC } = filterSlice.actions;
