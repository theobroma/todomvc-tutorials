import React, { useContext } from 'react';
import clsx from 'clsx';

import type { TodoType } from '../@types';
import TodoStore from '../stores/TodoStore';

// import TodoEditInput from './TodoEditInput';

interface Props {
  todo: TodoType;
  // isEditing: boolean;
}

const TodoItem = React.memo(function TodoItem({
  todo,
}: // isEditing
Props) {
  const todoStore = useContext(TodoStore);
  const { toggleTodo, removeTodo } = todoStore;

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onClick={(_) => toggleTodo(todo.id!)}
      />
      <label
        htmlFor="itself"
        //  onDoubleClick={() => dispatch(editTodoAC(todo.id))}
      >
        {todo.title}
      </label>
      <button
        type="button"
        className="destroy"
        onClick={(_) => removeTodo(todo.id!)}
      />
    </div>
  );

  return (
    <li
      className={clsx({
        completed: todo.completed,
        // editing: isEditing,
      })}
    >
      {element}
      {/* isEditing */}
      {/* {isEditing ? <TodoEditInput /> : null} */}
    </li>
  );
});

export default TodoItem;
