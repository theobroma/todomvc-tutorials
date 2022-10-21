import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';

export const useTodosStore = create<any>(() => ({
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
}));
