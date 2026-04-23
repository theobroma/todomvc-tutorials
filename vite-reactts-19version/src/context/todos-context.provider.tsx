import { FilterEnum } from '@/enums/filter.enum';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { TodosContext } from './todos-context';
import { TodoInterface } from './todos-context.interface';

const LOCAL_STORAGE_KEY = 'react-todos';

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ShowAll);
  const [editingTodoId, setEditingTodoId] = useState<null | string>(null);
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
      id: crypto.randomUUID(),
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
    const isAllCompleted = todos.length === completedTodoCount;

    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: !isAllCompleted,
    }));

    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const removeCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const changeFilter = (filter: FilterEnum) => setFilter(filter);

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
    <TodosContext.Provider
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
    </TodosContext.Provider>
  );
};
