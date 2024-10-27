import { PropsWithChildren, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodosContext } from './todos-context';
import { initialTodos } from './todos-context.initial';
import { TodoInterface } from './todos-context.interface';

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoInterface[]>(initialTodos);

  const onAddTodo = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <TodosContext.Provider value={{ todos, onAddTodo }}>{children}</TodosContext.Provider>
  );
};
