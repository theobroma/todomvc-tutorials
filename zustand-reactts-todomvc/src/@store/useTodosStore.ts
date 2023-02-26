import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import type { TodoType } from '../@types';

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

const addTodo = (todos: TodoType[], title: TodoType['title']): TodoType[] => [
  ...todos,
  {
    id: uuidv4(),
    title,
    completed: false,
  },
];

// Zustand implementation
type Store = {
  addTodo: (text: TodoType['title']) => void;
  todos: TodoType[];
  toggleTodo: (id: TodoType['id']) => void;
  toggleAllTodos: () => void;
  removeTodo: (id: TodoType['id']) => void;
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
        // setTodos: (todos: Todo[]) =>
        //   set((state) => ({
        //     ...state,
        //     todos,
        //   })),
        removeTodo: (id: TodoType['id']) =>
          set((state) => ({
            ...state,
            todos: removeTodo(state.todos, id),
          })),
        // updateTodo: (id: number, text: string) =>
        //   set((state) => ({
        //     ...state,
        //     todos: updateTodo(state.todos, id, text),
        //   })),
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
        // setNewTodo: (newTodo: string) =>
        //   set((state) => ({
        //     ...state,
        //     newTodo,
        //   })),
        addTodo: (text: TodoType['title']) =>
          set((state) => ({
            ...state,
            todos: addTodo(state.todos, text),
          })),
      }),
      {
        name: 'todo-app',
      },
    ),
  ),
);

export default useTodosStore;
