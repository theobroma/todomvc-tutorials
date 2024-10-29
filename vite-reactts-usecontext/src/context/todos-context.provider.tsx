import { PropsWithChildren, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodosContext } from './todos-context';
import { initialTodos } from './todos-context.initial';
import { TodoInterface } from './todos-context.interface';

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoInterface[]>(initialTodos);

  const activeTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0),
    [todos],
  );

  const completedTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0),
    [todos],
  );

  const addTodo = (title: string) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: todo.id === id ? !todo.completed : todo.completed,
    }));

    setTodos(newTodos);
  };

  const toggleTodos = () => {
    const areAllCompleted = todos.length === completedTodoCount;

    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: !areAllCompleted,
    }));

    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        activeTodoCount,
        completedTodoCount,
        addTodo,
        toggleTodo,
        toggleTodos,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
