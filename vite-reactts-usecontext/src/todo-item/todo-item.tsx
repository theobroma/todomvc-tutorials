import clsx from 'clsx';

import { TodoInterface } from '../context/todos-context.interface';

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
  // onClick
}: Props) => (
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
        // onChange={onChange(todo.id)}
      />
      <label
        htmlFor="itself"
        //    onDoubleClick={onDoubleClick(todo.id)}
      >
        {todo.title}
      </label>
      <button
        type="button"
        className="destroy"
        //   onClick={onClick(todo.id)}
      />
    </div>
    {/* isEditing */}
    {/* {isEditing ? <TodoEditInput /> : null} */}
  </li>
);
