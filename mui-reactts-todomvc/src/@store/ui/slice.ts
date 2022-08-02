import { createSlice } from '@reduxjs/toolkit';
import {
  // ThemeColorsType,
  ThemeColors,
} from '../../@types';

const uiInitialState = {
  theme: ThemeColors.LIGHT,
  // theme: 'light' as ThemeColorsType,
};

export type UIInitialStateType = typeof uiInitialState;

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setThemeAC(state, action) {
      state.theme = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const { setThemeAC } = uiSlice.actions;
