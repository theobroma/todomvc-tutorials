import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const сoordinatesInitialState = {
  lat: null as number | null, // lat: 51.5341714,
  lon: null as number | null, // lon: 33.3767724,
};

export type сoordinatesInitialStateType = typeof сoordinatesInitialState;

export const setUserCoordinatesTC = createAsyncThunk(
  'сoordinates/setUserCoordinatesTC',
  (_, thunkAPI) => {
    navigator.geolocation.getCurrentPosition((position) => {
      thunkAPI.dispatch(
        setCoordinatesAC({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      );
    });
  },
);

export const сoordinatesSlice = createSlice({
  name: 'сoordinates',
  initialState: сoordinatesInitialState,
  reducers: {
    setCoordinatesAC(
      state,
      action: PayloadAction<{ lat: number; lon: number }>,
    ) {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const сoordinatesReducer = сoordinatesSlice.reducer;
export const { setCoordinatesAC } = сoordinatesSlice.actions;
