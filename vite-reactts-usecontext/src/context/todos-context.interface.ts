import { FilterEnum } from '../enums/filter.enum';
import { OnEventEmptyType, OnEventType } from '../types/on-event.type';

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosInterface {
  todos: TodoInterface[];
  activeTodoCount: number;
  completedTodoCount: number;
  filter: FilterEnum;
  editingTodoId: null | string;
  addTodo: OnEventType<string>;
  toggleTodo: OnEventType<string>;
  toggleTodos: OnEventEmptyType;
  deleteTodo: OnEventType<string>;
  editTodo: OnEventType<string>;
  removeCompleted: OnEventEmptyType;
  changeFilter: OnEventType<FilterEnum>;
}
