import { useAppDispatch, useAppSelector } from '@store/configureStore';
import {
  activeTodoCountSelector,
  todosSelector,
  visibleTodosSelector,
} from '@store/todos/selectors';
import {
  deleteTodoAC,
  editTodoAC,
  toggleAllTodoAC,
  toggleTodoAC,
} from '@store/todos/slice';
import React from 'react';

import { TodoType } from '../@types/todos';
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

  const handleToggleTodo = (id: TodoType['id']) => () => dispatch(toggleTodoAC(id));
  const handleEditTodo = (id: TodoType['id']) => () => dispatch(editTodoAC(id));
  const handleDeleteTodo = (id: TodoType['id']) => () => dispatch(deleteTodoAC(id));

  return (
    <section className="main">
      {!!todos.length && (
        <ToggleAll onChange={handleTodoToggleAll} checked={activeTodoCount === 0} />
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={editingTodoId === todo.id}
            onChange={handleToggleTodo}
            onDoubleClick={handleEditTodo}
            onClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
});
