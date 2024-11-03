// TODO: try to replace with crypto.randomUUID()
import { v4 as uuidv4 } from 'uuid';

import { FilterEnum } from '../enums/filter.enum';
import { noop } from '../utils/noop.util';
import { TodoInterface, TodosInterface } from './todos-context.interface';

export const initialTodos: TodoInterface[] = [
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
