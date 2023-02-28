import React, { useState } from 'react';

import { useFocus } from '../@hooks/use-focus';
import useTodosStore from '../@store/useTodosStore';

const TodoEditInput = () => {
  const inputRef = useFocus();
  const store = useTodosStore();
  const { todos, editingTodoId } = store;
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
    store.saveEditTodo(text);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: not working
    if (event.key === 'Escape') {
      // dispatch(cancelEditTodoAC());
    }
    if (event.key === 'Enter') {
      store.saveEditTodo(text);
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
