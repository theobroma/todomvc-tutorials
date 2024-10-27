import { OnEventType } from '../types/on-event.type';

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosInterface {
  todos: TodoInterface[];
  addTodo: OnEventType<string>;
  deleteTodo: OnEventType<string>;
}
