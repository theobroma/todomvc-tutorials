import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { todosAPI } from '../../@api/todos-api';
import { waitForMe } from '../../@utils/waitforme';

const todosInitialState = {
  data: [] as any,
  pictureSearch: 'nature',
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getTodosTC = createAsyncThunk<any, void, { rejectValue: string }>(
  'todos/getTodosTC',
  async (param, thunkAPI) => {
    try {
      await waitForMe(1000);
      const res = await todosAPI.getAllTodos();

      // ZOD validation
      //   try {
      //     PicturesDataResponseSchema.parse(res.data);
      //   } catch (error) {
      //     console.log(error);
      //   }

      return res.data;
    } catch (err: any) {
      // return thunkAPI.rejectWithValue(err.response.data);
      return thunkAPI.rejectWithValue(
        `Server Error fetching todos. Error:
      ${JSON.stringify(err.response.data)}`,
      );
    }
  },
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosTC.pending, (state) => {
        state.isFetching = true;
        //   clear data
        state.data = [];
        state.isSuccess = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(getTodosTC.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = action.payload;
        }
        state.isFetching = false;
        state.isSuccess = true;
      })
      // error
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isError = true;
        state.isFetching = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

// export const { setPictureSearch } = picturesSlice.actions;
