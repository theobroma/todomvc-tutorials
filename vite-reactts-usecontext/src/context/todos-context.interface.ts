import { OnEventType, OnEventEmptyType } from '../types/on-event.type';

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosInterface {
  todos: TodoInterface[];
  activeTodoCount: number;
  addTodo: OnEventType<string>;
  toggleTodo: OnEventType<string>;
  toggleTodos: OnEventEmptyType;
  deleteTodo: OnEventType<string>;
}
