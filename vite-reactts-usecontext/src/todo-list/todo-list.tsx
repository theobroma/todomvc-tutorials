import { useContext } from 'react';

import { TodosContext } from '../context/todos-context';
import { TodoItem } from '../todo-item/todo-item';

export const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <section className="main">
      {/* {!!todos.length && (
          <ToggleAll onChange={handleTodoToggleAll} checked={activeTodoCount === 0} />
        )} */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            //   isEditing={editingTodoId === todo.id}
            //   onChange={handleToggleTodo}
            //   onDoubleClick={handleEditTodo}
            //   onClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};
