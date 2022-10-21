import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';

import type { TodoType } from '../@types';

// Zustand implementation
type Store = {
  todos: TodoType[];
};

const useStore = create<Store>(
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
    // removeTodo: (id: number) =>
    //   set((state) => ({
    //     ...state,
    //     todos: removeTodo(state.todos, id),
    //   })),
    // updateTodo: (id: number, text: string) =>
    //   set((state) => ({
    //     ...state,
    //     todos: updateTodo(state.todos, id, text),
    //   })),
    // toggleTodo: (id: number) =>
    //   set((state) => ({
    //     ...state,
    //     todos: toggleTodo(state.todos, id),
    //   })),
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

export default useStore;
