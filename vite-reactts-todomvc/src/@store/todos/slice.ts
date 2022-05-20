import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  list: [] as any,
  editingTodoId: null,
  editingTodoTitle: '',
};

// export type todosInitialStateType = typeof todosInitialState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {},
});

export const todosReducer = todosSlice.reducer;
// export const { setFilterAC } = todosSlice.actions;
