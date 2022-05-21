import { createSlice } from '@reduxjs/toolkit';
import { TodoType } from '@types';
import { v4 as uuidv4 } from 'uuid';

const todosInitialState = {
  list: [
    {
      id: uuidv4(),
      title: 'drink coffee',
      completed: false,
    },
    {
      id: uuidv4(),
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
  reducers: {
    addTaskAC: (state, action) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload,
        completed: false,
      };
      state.list.push(newTask);
    },
    // deleteTask: (state, action) => {
    //   return state.list.filter((item) => item.id !== action.payload.id);
    // },
  },
});

export const todosReducer = todosSlice.reducer;
export const { addTaskAC } = todosSlice.actions;
