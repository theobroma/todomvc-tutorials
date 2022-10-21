import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';

import type { TodoType } from '../@types';

const toggleTodo = (todos: TodoType[], id: TodoType['id']): TodoType[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

const removeTodo = (todos: TodoType[], id: TodoType['id']): TodoType[] =>
  todos.filter((todo) => todo.id !== id);

// Zustand implementation
type Store = {
  todos: TodoType[];
  toggleTodo: (id: TodoType['id']) => void;
  removeTodo: (id: TodoType['id']) => void;
};

const useTodosStore = create<Store>(
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
    // newTodo: '',
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
    // setNewTodo: (newTodo: string) =>
    //   set((state) => ({
    //     ...state,
    //     newTodo,
    //   })),
    // addTodo: () =>
    //   set((state) => ({
    //     ...state,
    //     todos: addTodo(state.todos, state.newTodo),
    //     newTodo: '',
    //   })),
  }),
);

export default useTodosStore;
