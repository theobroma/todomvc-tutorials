import { FilterEnum } from '@/enums/filter.enum';
import { TodoInterface } from '@/store/store.interface';

export const getFilteredTodos = (todos: TodoInterface[], filter: FilterEnum) => {
  switch (filter) {
    case FilterEnum.ShowAll:
      return todos;
    case FilterEnum.ShowActive:
      return todos.filter((todo) => !todo.completed);
    case FilterEnum.ShowCompleted:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
