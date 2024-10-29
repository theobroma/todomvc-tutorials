// TODO: try to replace with crypto.randomUUID()
import { v4 as uuidv4 } from 'uuid';

import { TodoInterface, TodosInterface } from './todos-context.interface';
import { noop } from '../utils/noop.util';

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
  addTodo: noop,
  toggleTodo: noop,
  toggleTodos: noop,
  deleteTodo: noop,
};
