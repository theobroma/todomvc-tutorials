import { createSelector } from '@ngrx/store';
import { AppState } from '../rootReducer';
import { Todo } from './todo.model';

export const getState = (state: AppState) => state;
export const getTodos = (state: AppState) => state.todos;

export const listSelector = createSelector(getTodos, (state) => state.list);

export const visibleTodosSelector = createSelector(getState, (state: any) => {
  switch (state.filter) {
    case 'SHOW_ALL':
      return state.todos.list;
    case 'SHOW_COMPLETED':
      return state.todos.list.filter((t: Todo) => t.completed);
    case 'SHOW_ACTIVE':
      return state.todos.list.filter((t: Todo) => !t.completed);
  }
});

export const activeTodoCountSelector = createSelector(listSelector, (todos) =>
  todos.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0)
);
