import { FilterEnum } from '@/enums/filter.enum';
import { PropsWithChildren, useMemo, useState } from 'react';

import { TodosContext } from './todos-context';
import { useTodos } from './todos-context.hook';
import { TodoInterface } from './todos-context.interface';

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ShowAll);
  const [editingTodoId, setEditingTodoId] = useState<null | string>(null);
  const { todos, setTodos } = useTodos();

  const activeTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0),
    [todos],
  );

  const completedTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0),
    [todos],
  );

  const changeFilter = (filter: FilterEnum) => setFilter(filter);

  const createTodo = (title: string): TodoInterface => ({
    id: crypto.randomUUID(),
    title,
    completed: false,
  });

  const addTodo = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    setTodos((prev) => [...prev, createTodo(trimmed)]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const toggleTodos = () => {
    setTodos((prevTodos) => {
      const isAllCompleted = prevTodos.every((todo) => todo.completed);

      return prevTodos.map((todo) => ({
        ...todo,
        completed: !isAllCompleted,
      }));
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const removeCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const editTodo = (id: string) => {
    setEditingTodoId(id);
  };

  const saveTodo = (id: string, title: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
    setEditingTodoId(null);
  };

  return (
    <TodosContext
      value={{
        todos,
        activeTodoCount,
        completedTodoCount,
        filter,
        editingTodoId,
        addTodo,
        toggleTodo,
        toggleTodos,
        deleteTodo,
        editTodo,
        removeCompleted,
        changeFilter,
        saveTodo,
      }}
    >
      {children}
    </TodosContext>
  );
};
