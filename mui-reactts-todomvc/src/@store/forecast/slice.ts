import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { forecastAPI } from '../../@api/forecast-api';
import {
  LocationType,
  CurrentWeatherType,
  ForecastType,
  ForecastResponseType,
} from '../../@types';
import { waitForMe } from '../../@utils/waitforme';
import { сoordinatesInitialStateType } from '../сoordinates/slice';

const forecastInitialState = {
  location: {} as LocationType,
  currentWeather: {} as CurrentWeatherType,
  forecast: {
    forecastday: [],
  } as ForecastType,
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export type forecastInitialStateType = typeof forecastInitialState;

// https://stackoverflow.com/questions/67279037/the-thunkapi-getstate-method-does-not-correctly-infer-the-state-type
export const getForecastTC = createAsyncThunk<
  ForecastResponseType,
  { days: number },
  { state: { сoordinates: сoordinatesInitialStateType } }
>('forecast/getForecast', async (param, thunkAPI) => {
  const state = thunkAPI.getState();
  try {
    await waitForMe(300);
    const res = await forecastAPI.dailyWeather(
      param.days,
      Number(state.сoordinates.lat || 0),
      Number(state.сoordinates.lon || 0),
    );
    return res.data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState: forecastInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getForecastTC.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getForecastTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.location = action.payload.location;
        state.currentWeather = action.payload.current;
        state.forecast = action.payload.forecast;
      }
      state.isFetching = false;
      state.isSuccess = true;
    });
    builder.addCase(getForecastTC.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      if (action.payload instanceof Error) {
        state.errorMessage = action.payload.message;
      }
    });
  },
});

export const forecastReducer = forecastSlice.reducer;
