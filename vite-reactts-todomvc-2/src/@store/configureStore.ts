import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['filter'], // will not be persisted
  // whitelist: ['filter'], // will be persisted
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([logger]),
  // devTools: process.env.NODE_ENV === 'development',
  devTools: true,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
