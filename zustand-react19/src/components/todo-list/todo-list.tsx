import { useMemo } from 'react';

import { TodoItem } from '@/components/todo-item/todo-item';
import { ToggleAllButton } from '@/components/toggle-all-button/toggle-all-button';
import useTodosStore from '@/store/store';

import { getFilteredTodos } from './todo-list.util';

export const TodoList = () => {
  const { todos, filter, toggleTodos } = useTodosStore();
  const filteredTodos = getFilteredTodos(todos, filter);

  const activeTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0),
    [todos],
  );

  return (
    <section className="main">
      {!!todos.length && (
        <ToggleAllButton onChange={toggleTodos} checked={activeTodoCount === 0} />
      )}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
