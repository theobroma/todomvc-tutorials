// https://stackoverflow.com/questions/61229562/react-eslint-error-component-definition-is-missing-display-name
import { TodoType } from '@types';
import clsx from 'clsx';
import { memo } from 'react';

import { TodoEditInput } from './TodoEditInput';

interface Props {
  todo: TodoType;
  isEditing: boolean;
  onChange: any;
  onDoubleClick: any;
  onClick: any;
}

export const TodoItem = memo(
  ({ todo, isEditing, onChange, onDoubleClick, onClick }: Props) => (
    <li
      className={clsx({
        completed: todo.completed,
        editing: isEditing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onChange(todo.id)}
        />
        <label htmlFor="itself" onDoubleClick={onDoubleClick(todo.id)}>
          {todo.title}
        </label>
        <button type="button" className="destroy" onClick={onClick(todo.id)} />
      </div>
      {/* isEditing */}
      {isEditing ? <TodoEditInput /> : null}
    </li>
  ),
);

TodoItem.displayName = 'TodoItem';
