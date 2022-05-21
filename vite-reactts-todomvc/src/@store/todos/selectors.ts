import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/configureStore';
import { filterSelector } from '@store/filter/selectors';
import { VisibilityFilters } from '@types';

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

export const visibleTodosSelector = createSelector(
  [todosListSelector, filterSelector],
  (todosList, filter) => {
    switch (filter.value) {
      case VisibilityFilters.SHOW_ALL:
        return todosList;
      case VisibilityFilters.SHOW_COMPLETED:
        return todosList.filter((todo) => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todosList.filter((todo) => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  },
);
