import { createSelector } from '@ngrx/store';
import { Todo } from './todo.model';

export const getState = (state: any) => state;
export const getTodos = (state: any) => state.todos;

export const listSelector = createSelector(
  getTodos,
  (state: any) => state.list
);

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
  todos.reduce((accum: any, todo: any) => {
    return todo.completed ? accum : accum + 1;
  }, 0)
);
