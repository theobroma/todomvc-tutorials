import { useAppDispatch } from '@store/configureStore';
import { deleteTodoAC, toggleTodoAC } from '@store/todos/slice';
import { TodoType } from '@types';
import clsx from 'clsx';
import React from 'react';

interface Props {
  todo: TodoType;
  isEditing: boolean;
}

const TodoItem = React.memo(function TodoItem({ todo, isEditing }: Props) {
  const dispatch = useAppDispatch();

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodoAC(todo.id))}
      />
      <label
        htmlFor="itself"
      // onDoubleClick={() => dispatch(actions.editTodo(todo._id))}
      >
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
      {/* {isEditing ? <TodoEditInput /> : null} */}
    </li>
  );
});

export default TodoItem;
