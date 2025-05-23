import { useContext } from 'react';
import clsx from 'clsx';

import { TodoEditInput } from '@/components/todo-edit-input/todo-edit-input';
import { TodosContext } from '@/context/todos-context';
import { TodoInterface } from '@/context/todos-context.interface';

interface Props {
  todo: TodoInterface;
}

export const TodoItem = ({ todo }: Props) => {
  const { editingTodoId, toggleTodo, deleteTodo, editTodo, saveTodo } =
    useContext(TodosContext);

  const isEditing = editingTodoId === todo.id;

  const handleToggleTodo = () => toggleTodo(todo.id);
  const handleDeleteTodo = () => deleteTodo(todo.id);
  const handleEditTodo = () => editTodo(todo.id);
  const handleSaveTodo = (title: TodoInterface['title']) => saveTodo(todo.id, title);

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
      {isEditing ? (
        <TodoEditInput currentTitle={todo.title} onSave={handleSaveTodo} />
      ) : null}
    </li>
  );
};
