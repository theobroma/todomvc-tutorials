import { useAppDispatch, useAppSelector } from '@store/configureStore';
import {
  activeTodoCountSelector,
  todosSelector,
  visibleTodosSelector,
} from '@store/todos/selectors';
import { toggleAllTodoAC } from '@store/todos/slice';
import React, { memo } from 'react';

import TodoItem from './TodoItem';

const List = React.memo(function List() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(visibleTodosSelector);
  const { editingTodoId } = useAppSelector(todosSelector);
  const activeTodoCount = useAppSelector(activeTodoCountSelector);

  const _handleTodoToggleAll = () => {
    const bool = activeTodoCount !== 0;
    dispatch(toggleAllTodoAC(bool));
  };

  const renderToggleAll = () => {
    if (todos.length) {
      return (
        <>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={_handleTodoToggleAll}
            checked={activeTodoCount === 0}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
      );
    }
    return null;
  };

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} isEditing={editingTodoId === todo.id} />
    ));
  };

  return (
    <section className="main">
      {renderToggleAll()}
      <ul className="todo-list"> {renderTodos()}</ul>
    </section>
  );
});

export default List;
