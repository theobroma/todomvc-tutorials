import { FilterEnum } from '@/enums/filter.enum';
import { noop } from '@/utils/noop.util';

import { TodoInterface, TodosInterface } from './todos-context.interface';

export const initialTodos: TodoInterface[] = [
  {
    id: crypto.randomUUID(),
    title: 'drink coffee',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'be awesome',
    completed: true,
  },
];

export const initialTodosContext: TodosInterface = {
  todos: initialTodos,
  activeTodoCount: 0,
  completedTodoCount: 0,
  filter: FilterEnum.ShowAll,
  editingTodoId: null,
  addTodo: noop,
  toggleTodo: noop,
  toggleTodos: noop,
  deleteTodo: noop,
  editTodo: noop,
  removeCompleted: noop,
  changeFilter: noop,
};
