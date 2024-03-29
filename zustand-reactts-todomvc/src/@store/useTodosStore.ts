import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { TodoType } from '../@types';
import { FilterEnum } from '../@types';

const toggleTodo = (todos: TodoType[], id: TodoType['id']): TodoType[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

const toggleAllTodos = (todos: TodoType[]): TodoType[] => {
  const activeTodoCount = todos.filter(
    (item) => item.completed === false,
  ).length;
  const bool = activeTodoCount !== 0;

  return todos.map((todo) => ({
    ...todo,
    completed: bool,
  }));
};

const removeTodo = (todos: TodoType[], id: TodoType['id']): TodoType[] =>
  todos.filter((todo) => todo.id !== id);

const removeCompleted = (todos: TodoType[]): TodoType[] =>
  todos.filter((todo) => todo.completed === false);

const addTodo = (todos: TodoType[], title: TodoType['title']): TodoType[] => [
  ...todos,
  {
    id: uuidv4(),
    title,
    completed: false,
  },
];

const saveEditTodo = (
  todos: TodoType[],
  editingTodoId: TodoType['id'] | null,
  newTitle: TodoType['title'],
): TodoType[] => {
  const index = todos.findIndex((element) => element.id === editingTodoId);
  todos[index].title = newTitle;
  return todos;
};

// Zustand implementation
type Store = {
  todos: TodoType[];
  filter: FilterEnum;
  editingTodoId: TodoType['id'] | null;
  addTodo: (text: TodoType['title']) => void;
  saveEditTodo: (text: TodoType['title']) => void;
  setFilter: (newFilter: FilterEnum) => void;
  setEditTodoID: (id: TodoType['id']) => void;
  toggleTodo: (id: TodoType['id']) => void;
  toggleAllTodos: () => void;
  removeTodo: (id: TodoType['id']) => void;
  removeCompleted: () => void;
};

const useTodosStore = create<Store>()(
  devtools(
    persist(
      (set): Store => ({
        todos: [
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
        ],
        filter: FilterEnum.SHOW_ALL,
        editingTodoId: null,
        setFilter: (newFilter: FilterEnum) =>
          set((state) => ({
            ...state,
            filter: newFilter,
          })),
        setEditTodoID: (id: TodoType['id']) =>
          set((state) => ({
            ...state,
            editingTodoId: id,
          })),
        removeTodo: (id: TodoType['id']) =>
          set((state) => ({
            ...state,
            todos: removeTodo(state.todos, id),
          })),
        removeCompleted: () =>
          set((state) => ({
            ...state,
            todos: removeCompleted(state.todos),
          })),
        toggleTodo: (id: TodoType['id']) =>
          set((state) => ({
            ...state,
            todos: toggleTodo(state.todos, id),
          })),
        toggleAllTodos: () =>
          set((state) => ({
            ...state,
            todos: toggleAllTodos(state.todos),
          })),
        addTodo: (text: TodoType['title']) =>
          set((state) => ({
            ...state,
            todos: addTodo(state.todos, text),
          })),
        saveEditTodo: (text: TodoType['title']) =>
          set((state) => ({
            ...state,
            todos: saveEditTodo(state.todos, state.editingTodoId, text),
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
