import { PropsWithChildren, useMemo, useState } from 'react';

import { FilterEnum } from '@/enums/filter.enum';

import { TodosContext } from './todos-context';
import { initialTodos } from './todos-context.initial';
import { TodoInterface } from './todos-context.interface';

export const TodosContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoInterface[]>(initialTodos);
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.ShowAll);
  const [editingTodoId, setEditingTodoId] = useState<null | string>(null);

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
    const tempTodos = [...todos];
    const index = tempTodos.findIndex((todo) => todo.id === id);
    tempTodos[index]['title'] = title;
    setTodos(tempTodos);
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
