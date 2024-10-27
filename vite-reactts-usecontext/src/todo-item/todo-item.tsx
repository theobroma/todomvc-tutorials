import clsx from 'clsx';

import { TodoInterface } from '../context/todos-context.interface';
import { TodosContext } from '../context/todos-context';
import { useContext } from 'react';

interface Props {
  todo: TodoInterface;
  // isEditing: boolean;
  // onChange: any;
  // onDoubleClick: any;
  // onClick: any;
}

export const TodoItem = ({
  todo,
  // isEditing,
  // onChange,
  // onDoubleClick,
  // onClick,
}: Props) => {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  const handleToggleTodo = () => toggleTodo(todo.id);
  const handleDeleteTodo = () => deleteTodo(todo.id);

  return (
    <li
      className={clsx({
        completed: todo.completed,
        //   editing: isEditing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleTodo}
        />
        <label
          htmlFor="itself"
          //    onDoubleClick={onDoubleClick(todo.id)}
        >
          {todo.title}
        </label>
        <button type="button" className="destroy" onClick={handleDeleteTodo} />
      </div>
      {/* isEditing */}
      {/* {isEditing ? <TodoEditInput /> : null} */}
    </li>
  );
};
