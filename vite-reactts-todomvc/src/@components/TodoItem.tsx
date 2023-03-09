import { useAppDispatch } from '@store/configureStore';
import { deleteTodoAC, editTodoAC, toggleTodoAC } from '@store/todos/slice';
import { TodoType } from '@types';
import clsx from 'clsx';
import React from 'react';

import { TodoEditInput } from './TodoEditInput';

interface Props {
  todo: TodoType;
  isEditing: boolean;
}

export const TodoItem = React.memo(function TodoItem({ todo, isEditing }: Props) {
  const dispatch = useAppDispatch();

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoAC(todo.id))}
      />
      <label htmlFor="itself" onDoubleClick={() => dispatch(editTodoAC(todo.id))}>
        {todo.title}
      </label>
      <button
        type="button"
        className="destroy"
        onClick={() => dispatch(deleteTodoAC(todo.id))}
      />
    </div>
  );

  return (
    <li
      className={clsx({
        completed: todo.completed,
        editing: isEditing,
      })}
    >
      {element}
      {/* isEditing */}
      {isEditing ? <TodoEditInput /> : null}
    </li>
  );
});
