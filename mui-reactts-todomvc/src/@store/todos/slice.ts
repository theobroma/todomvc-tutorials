import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { todosAPI } from '../../@api/todos-api';
import type { TodoType } from '../../@types';
import { waitForMe } from '../../@utils/waitforme';

const todosInitialState = {
  data: [] as TodoType[],
  // utils
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: '' as string | null,
};

export const getTodosTC = createAsyncThunk<
  TodoType[],
  void,
  { rejectValue: string }
>('todos/getTodosTC', async (param, thunkAPI) => {
  try {
    await waitForMe(300);
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
});

export const deleteTodoTC = createAsyncThunk<
  // TodoType[],
  Record<string, never>,
  { id: TodoType['id'] },
  { rejectValue: string }
>('todos/deleteTodoTC', async (param, thunkAPI) => {
  try {
    await waitForMe(100);
    const res = await todosAPI.deleteTodoByID(param.id);

    return res.data;
  } catch (err: any) {
    // return thunkAPI.rejectWithValue(err.response.data);
    return thunkAPI.rejectWithValue(
      `Server Error deleting todo. Error:
      ${JSON.stringify(err.response.data)}`,
    );
  }
});

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
      // delete
      .addCase(deleteTodoTC.pending, (state, action) => {
        state.isFetching = true;
        // console.log(action.meta.arg);
      })
      .addCase(deleteTodoTC.fulfilled, (state, action) => {
        state.isFetching = false;
        // console.log(action.meta.arg);
        state.data = state.data.filter(
          (item) => item.id !== action.meta.arg.id,
        );
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
