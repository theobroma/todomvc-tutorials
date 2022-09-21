// import { useAppDispatch } from '@store/configureStore';
// import { deleteTodoAC, editTodoAC, toggleTodoAC } from '@store/todos/slice';

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
  // const dispatch = useAppDispatch();
  const todoStore = useContext(TodoStore);
  const { toggleTodo, removeTodo } = todoStore;

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        // onChange={() => dispatch(toggleTodoAC(todo.id))}
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
        // onClick={() => dispatch(deleteTodoAC(todo.id))}
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
