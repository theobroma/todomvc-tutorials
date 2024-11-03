import clsx from 'clsx';
import { useContext } from 'react';

import { TodosContext } from '../../context/todos-context';
import { TodoInterface } from '../../context/todos-context.interface';
import { TodoEditInput } from '../todo-edit-input/todo-edit-input';

interface Props {
  todo: TodoInterface;
}

export const TodoItem = ({ todo }: Props) => {
  const { editingTodoId, toggleTodo, deleteTodo, editTodo } = useContext(TodosContext);

  const isEditing = editingTodoId === todo.id;

  const handleToggleTodo = () => toggleTodo(todo.id);
  const handleDeleteTodo = () => deleteTodo(todo.id);
  const handleEditTodo = () => editTodo(todo.id);

  return (
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
          onChange={handleToggleTodo}
        />
        <label htmlFor="itself" onDoubleClick={handleEditTodo}>
          {todo.title}
        </label>
        <button type="button" className="destroy" onClick={handleDeleteTodo} />
      </div>
      {/* isEditing */}
      {isEditing ? <TodoEditInput /> : null}
    </li>
  );
};
