import { useContext } from 'react';

import { TodoItem } from '@/components/todo-item/todo-item';
import { ToggleAllButton } from '@/components/toggle-all-button/toggle-all-button';
import { TodosContext } from '@/context/todos-context';

import { getFilteredTodos } from './todo-list.util';

export const TodoList = () => {
  const { todos, activeTodoCount, filter, toggleTodos } = useContext(TodosContext);
  const filteredTodos = getFilteredTodos(todos, filter);

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
