import { useAppDispatch, useAppSelector } from '@store/configureStore';
import {
  activeTodoCountSelector,
  todosSelector,
  visibleTodosSelector,
} from '@store/todos/selectors';
import { toggleAllTodoAC } from '@store/todos/slice';
import React from 'react';

import { TodoItem } from './TodoItem';
import { ToggleAll } from './ToggleAll';

export const List = React.memo(function List() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(visibleTodosSelector);
  const { editingTodoId } = useAppSelector(todosSelector);
  const activeTodoCount = useAppSelector(activeTodoCountSelector);

  const handleTodoToggleAll = () => {
    const bool = activeTodoCount !== 0;
    dispatch(toggleAllTodoAC(bool));
  };

  return (
    <section className="main">
      {!!todos.length && (
        <ToggleAll onChange={handleTodoToggleAll} checked={activeTodoCount === 0} />
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isEditing={editingTodoId === todo.id} />
        ))}
      </ul>
    </section>
  );
});
