import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '@types';

const todosInitialState = {
  list: [
    {
      id: '1',
      title: 'drink coffee',
      completed: false,
    },
    {
      id: '2',
      title: 'be awesome',
      completed: true,
    },
  ] as TodoType[],
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
