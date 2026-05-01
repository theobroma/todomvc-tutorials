import { TodoInterface } from '@/context/todos-context.interface';
import { FilterEnum } from '@/enums/filter.enum';

export const getFilteredTodos = (todos: TodoInterface[], filter: FilterEnum) => {
  switch (filter) {
    case FilterEnum.All:
      return todos;
    case FilterEnum.Active:
      return todos.filter((todo) => !todo.completed);
    case FilterEnum.Completed:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
