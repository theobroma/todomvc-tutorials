import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { TodoInterface } from '@/context/todos-context.interface';
import { FilterEnum } from '@/enums/filter.enum';

const toggleTodo = (todos: TodoInterface[], id: TodoInterface['id']): TodoInterface[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

const toggleTodos = (todos: TodoInterface[]): TodoInterface[] => {
  const activeTodoCount = todos.filter((item) => item.completed === false).length;

  return todos.map((todo) => ({
    ...todo,
    completed: activeTodoCount !== 0,
  }));
};

const deleteTodo = (todos: TodoInterface[], id: TodoInterface['id']): TodoInterface[] =>
  todos.filter((todo) => todo.id !== id);

const removeCompleted = (todos: TodoInterface[]): TodoInterface[] =>
  todos.filter((todo) => todo.completed === false);

const addTodo = (
  todos: TodoInterface[],
  title: TodoInterface['title'],
): TodoInterface[] => [
  ...todos,
  {
    id: crypto.randomUUID(),
    title,
    completed: false,
  },
];

const saveTodo = (
  todos: TodoInterface[],
  editingTodoId: TodoInterface['id'] | null,
  newTitle: TodoInterface['title'],
): TodoInterface[] => {
  const index = todos.findIndex((element) => element.id === editingTodoId);
  todos[index].title = newTitle;
  return todos;
};

// Zustand implementation
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

const useTodosStore = create<StoreInterface>()(
  devtools(
    persist(
      (set): StoreInterface => ({
        todos: [
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
          {
            id: crypto.randomUUID(),
            title: 'learn zustand',
            completed: true,
          },
        ],
        filter: FilterEnum.ShowAll,
        editingTodoId: null,
        changeFilter: (newFilter: FilterEnum) =>
          set((state) => ({
            ...state,
            filter: newFilter,
          })),
        editTodo: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            editingTodoId: id,
          })),
        deleteTodo: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            todos: deleteTodo(state.todos, id),
          })),
        removeCompleted: () =>
          set((state) => ({
            ...state,
            todos: removeCompleted(state.todos),
          })),
        toggleTodo: (id: TodoInterface['id']) =>
          set((state) => ({
            ...state,
            todos: toggleTodo(state.todos, id),
          })),
        toggleTodos: () =>
          set((state) => ({
            ...state,
            todos: toggleTodos(state.todos),
          })),
        addTodo: (text: TodoInterface['title']) =>
          set((state) => ({
            ...state,
            todos: addTodo(state.todos, text),
          })),
        saveTodo: (text: TodoInterface['title']) =>
          set((state) => ({
            ...state,
            todos: saveTodo(state.todos, state.editingTodoId, text),
            editingTodoId: null,
          })),
      }),
      {
        name: 'todo-app',
      },
    ),
  ),
);

export default useTodosStore;
