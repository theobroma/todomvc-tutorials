import { useEffect, useState } from 'react';

import { TodoInterface } from './todos-context.interface';

const LOCAL_STORAGE_KEY = 'react-todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoInterface[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return { todos, setTodos };
};
