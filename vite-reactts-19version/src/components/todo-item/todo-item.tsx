import { TodoEditInput } from '@/components/todo-edit-input/todo-edit-input';
import { TodoInterface } from '@/context/todos-context.interface';
import { OnEventType } from '@/types/on-event.type';
import { noop } from '@/utils/noop.util';
import clsx from 'clsx';

interface TodoItemProps extends TodoInterface {
  isEditing?: boolean;
  toggleTodo?: OnEventType<string>;
  deleteTodo?: OnEventType<string>;
  editTodo?: OnEventType<string>;
  saveTodo?: (id: string, title: string) => void;
}

export const TodoItem = ({
  id,
  title,
  completed,
  isEditing = false,
  toggleTodo = noop,
  deleteTodo = noop,
  editTodo = noop,
  saveTodo = noop,
}: TodoItemProps) => {
  const handleToggleTodo = () => toggleTodo(id);
  const handleDeleteTodo = () => deleteTodo(id);
  const handleEditTodo = () => editTodo(id);
  const handleSaveTodo = (title: TodoInterface['title']) => saveTodo(id, title);

  return (
    <li
      className={clsx({
        completed: completed,
        editing: isEditing,
      })}
      data-testid="todo-item"
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleToggleTodo}
        />
        <label htmlFor="itself" data-testid="todo-title" onDoubleClick={handleEditTodo}>
          {title}
        </label>
        <button
          type="button"
          className="destroy"
          aria-label="delete todo"
          onClick={handleDeleteTodo}
        />
      </div>
      {/* isEditing */}
      {isEditing ? <TodoEditInput currentTitle={title} onSave={handleSaveTodo} /> : null}
    </li>
  );
};
