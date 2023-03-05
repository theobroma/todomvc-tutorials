import React, { useContext, useState } from 'react';

import { useFocus } from '../@hooks/use-focus';
import TodoStore from '../stores/TodoStore';

const TodoEditInput = () => {
  const inputRef = useFocus();
  const todoStore = useContext(TodoStore);
  const { todos, editingTodoId, saveEditTodo, cancelEditTodo } = todoStore;
  const editingTodoIndex = todos.findIndex(
    (element) => element.id === editingTodoId,
  );
  const [text, setText] = useState(todos[editingTodoIndex].title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  // TODO: escape press also triggers this
  const handleBlur = () => {
    saveEditTodo(text);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: not working
    if (event.key === 'Escape') {
      cancelEditTodo();
    }
    if (event.key === 'Enter') {
      saveEditTodo(text);
    }
  };

  return (
    <input
      className="edit"
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKey}
      ref={inputRef}
    />
  );
};

export default TodoEditInput;
