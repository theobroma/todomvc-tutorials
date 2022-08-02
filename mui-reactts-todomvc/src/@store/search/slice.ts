// https://www.newline.co/@bespoyasov/how-to-use-thunks-with-redux-toolkit-and-typescript--1e65fc64
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchAPI } from '../../@api/search-api';

import {
  SearchPlaceResponseSchema,
  SearchPlaceResponseType,
} from '../../@types';

const searchInitialState = {
  data: [] as SearchPlaceResponseType,
};

export const searchTC = createAsyncThunk<SearchPlaceResponseType, string>(
  'search/searchTC',
  async (place, thunkAPI) => {
    try {
      const res = await searchAPI.place(place);

      // ZOD validation
      try {
        SearchPlaceResponseSchema.parse(res.data);
      } catch (error) {
        // TODO:
        // Log & alert error <-- very important!
        console.log(error);
      }

      return res.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    clearData(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
  },
});

export const searchReducer = searchSlice.reducer;
export const { clearData: clearDataAC } = searchSlice.actions;
