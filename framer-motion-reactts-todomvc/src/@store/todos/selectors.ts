import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/configureStore';
import { filterSelector } from '@store/filter/selectors';
import { FilterEnum } from '@types';

export const todosSelector = (state: RootState) => {
  return state.todos;
};

export const todosListSelector = (state: RootState) => {
  return state.todos.list;
};

export const activeTodoCountSelector = createSelector(todosListSelector, (todos) =>
  todos.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0),
);

export const completedTodoCountSelector = createSelector(todosListSelector, (todos) =>
  todos.reduce((accum, todo) => {
    return todo.completed ? accum + 1 : accum;
  }, 0),
);

export const visibleTodosSelector = createSelector(
  [todosListSelector, filterSelector],
  (todosList, filter) => {
    switch (filter) {
      case FilterEnum.SHOW_ALL:
        return todosList;
      case FilterEnum.SHOW_COMPLETED:
        return todosList.filter((todo) => todo.completed);
      case FilterEnum.SHOW_ACTIVE:
        return todosList.filter((todo) => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  },
);
