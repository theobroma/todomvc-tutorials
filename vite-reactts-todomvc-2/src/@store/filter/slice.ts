import { FilterEnum } from "@/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filterInitialState = {
  value: FilterEnum.SHOW_ALL,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterAC(state, action: PayloadAction<FilterEnum>) {
      state.value = action.payload;
    },
  },
});

export const { setFilterAC } = filterSlice.actions;
