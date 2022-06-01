import { createSelector } from '@ngrx/store';

export const getTodos = (state: any) => state.todos;

export const listSelector = createSelector(
  getTodos,
  (state: any) => state.list
);

export const activeTodoCountSelector = createSelector(listSelector, (todos) =>
  todos.reduce((accum: any, todo: any) => {
    return todo.completed ? accum : accum + 1;
  }, 0)
);
