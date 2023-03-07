import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

import { filterSlice } from './filter/slice';
import { todosSlice } from './todos/slice';

const logger = createLogger({
  collapsed: true,
});

const reducers = {
  [filterSlice.name]: filterSlice.reducer,
  [todosSlice.name]: todosSlice.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
