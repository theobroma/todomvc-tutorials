import { FilterEnum } from '@/enums/filter.enum';
import { OnEventEmptyType, OnEventType } from '@/types/on-event.type';

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

export interface StoreInterface {
  todos: TodoInterface[];
  filter: FilterEnum;
  editingTodoId: TodoInterface['id'] | null;
  addTodo: (text: TodoInterface['title']) => void;
  saveTodo: (text: TodoInterface['title']) => void;
  changeFilter: (newFilter: FilterEnum) => void;
  editTodo: (id: TodoInterface['id']) => void;
  toggleTodo: (id: TodoInterface['id']) => void;
  toggleTodos: () => void;
  deleteTodo: (id: TodoInterface['id']) => void;
  removeCompleted: () => void;
}
