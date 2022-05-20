import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/configureStore';
import { filterSelector } from '@store/filter/selectors';
import { TodoType, VisibilityFilters } from '@types';

export const todosSelector = (state: RootState) => {
  return state.todos;
};

export const todosListSelector = (state: RootState) => {
  return state.todos.list;
};

export const visibleTodosSelector = createSelector(
  [todosListSelector, filterSelector],
  (todosList, filter) => {
    switch (filter.value) {
      case VisibilityFilters.SHOW_ALL:
        return todosList;
      case VisibilityFilters.SHOW_COMPLETED:
        return todosList.filter((todo: TodoType) => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todosList.filter((todo: TodoType) => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  },
);
