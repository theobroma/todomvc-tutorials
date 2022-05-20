import { useAppSelector } from '@store/configureStore';
import { visibleTodosSelector } from '@store/todos/selectors';
import React from 'react';

import TodoItem from './TodoItem';

const List = (props) => {
  const todos = useAppSelector(visibleTodosSelector);

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
      // isEditing={editingTodoId === todo._id}
      />
    ));
  };

  return (
    <section className="main">
      {/* {renderToggleAll()} */}
      <ul className="todo-list">{renderTodos()}</ul>
    </section>
  );
};

export default List;
