//https://stackoverflow.com/questions/52109465/angular-6-ngrx-how-to-add-new-item-to-array-in-state-object
import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo.model';
import {
  addTodoAC,
  clearCompletedTodoAC,
  deleteTodoAC,
  toggleAllTodoAC,
  toggleTodoAC,
  updateTodoAC,
} from './todos.actions';

const initialState = {
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
  ] as Todo[],
  // editingTodoId: null as TodoType['id'] | null,
};

export const todosReducer = createReducer(
  initialState,
  on(addTodoAC, (state, todo) => ({
    ...state,
    list: [...state.list, todo],
  })),
  on(deleteTodoAC, (state, { id }) => ({
    ...state,
    list: state.list.filter((todo) => id !== todo.id),
  })),
  on(toggleTodoAC, (state, { id }) => {
    const todoIndex = state.list.findIndex((todo) => todo.id === id);
    const newList = state.list.map((value, index) =>
      index === todoIndex ? { ...value, completed: !value.completed } : value
    );
    return {
      ...state,
      list: newList,
    };
  }),
  on(toggleAllTodoAC, (state, { bool }) => {
    const newList = state.list.map((todo) => {
      return { ...todo, completed: bool };
    });
    return {
      ...state,
      list: newList,
    };
  }),

  on(updateTodoAC, (state, { id, newTitle }) => {
    const todoIndex = state.list.findIndex((todo) => todo.id === id);
    const newList = state.list.map((value, index) =>
      index === todoIndex ? { ...value, title: newTitle } : value
    );
    return {
      ...state,
      list: newList,
    };
  }),

  on(clearCompletedTodoAC, (state) => ({
    ...state,
    list: state.list.filter((todo) => !todo.completed),
  }))
);
