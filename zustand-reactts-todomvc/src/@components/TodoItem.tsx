import React from 'react';
import clsx from 'clsx';

import type { TodoType } from '../@types';

// import TodoEditInput from './TodoEditInput';

interface Props {
  todo: TodoType;
  isEditing: boolean;
}

const TodoItem = React.memo(function TodoItem({ todo, isEditing }: Props) {
  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        // onChange={() => dispatch(toggleTodoAC(todo.id))}
      />
      <label
        htmlFor="itself"
        // onDoubleClick={() => dispatch(editTodoAC(todo.id))}
      >
        {todo.title}
      </label>
      <button
        type="button"
        className="destroy"
        // onClick={() => dispatch(deleteTodoAC(todo.id))}
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
      {/* {isEditing ? <TodoEditInput /> : null} */}
    </li>
  );
});

export default TodoItem;
