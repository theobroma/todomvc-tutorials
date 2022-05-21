import { useAppSelector } from '@store/configureStore';
import { todosSelector, visibleTodosSelector } from '@store/todos/selectors';
import React from 'react';

import TodoItem from './TodoItem';

const List = () => {
  const todos = useAppSelector(visibleTodosSelector);
  const { editingTodoId } = useAppSelector(todosSelector);

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} isEditing={editingTodoId === todo.id} />
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
