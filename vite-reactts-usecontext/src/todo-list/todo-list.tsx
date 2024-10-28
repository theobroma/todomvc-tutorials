import { useContext } from 'react';

import { TodosContext } from '../context/todos-context';
import { TodoItem } from '../todo-item/todo-item';
import { ToggleAllButton } from '../toggle-all-button/toggle-all-button';

export const TodoList = () => {
  const { todos, activeTodoCount, toggleTodos } = useContext(TodosContext);

  return (
    <section className="main">
      {!!todos.length && (
        <ToggleAllButton onChange={toggleTodos} checked={activeTodoCount === 0} />
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            //   isEditing={editingTodoId === todo.id}
            //   onChange={handleToggleTodo}
            //   onDoubleClick={handleEditTodo}
          />
        ))}
      </ul>
    </section>
  );
};
