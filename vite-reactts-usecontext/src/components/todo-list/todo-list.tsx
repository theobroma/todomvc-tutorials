import { useContext } from 'react';

import { TodosContext } from '../../context/todos-context';
import { TodoItem } from '../todo-item/todo-item';
import { ToggleAllButton } from '../toggle-all-button/toggle-all-button';
import { getFilteredTodos } from './todo-list.util';

export const TodoList = () => {
  const { todos, activeTodoCount, filter, isEditing, toggleTodos } =
    useContext(TodosContext);
  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <section className="main">
      {!!todos.length && (
        <ToggleAllButton onChange={toggleTodos} checked={activeTodoCount === 0} />
      )}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={isEditing}
            //   onChange={handleToggleTodo}
            //   onDoubleClick={handleEditTodo}
          />
        ))}
      </ul>
    </section>
  );
};
