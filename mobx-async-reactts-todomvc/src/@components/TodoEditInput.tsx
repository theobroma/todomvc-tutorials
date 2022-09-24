import React, { useContext, useEffect, useRef, useState } from 'react';

import TodoStore from '../stores/TodoStore';

const TodoEditInput = () => {
  const todoStore = useContext(TodoStore);
  const { todos, editingTodoId, saveEditTodo, cancelEditTodo } = todoStore;
  const editingTodoIndex = todos.findIndex(
    (element) => element.id === editingTodoId,
  );
  const [text, setText] = useState(todos[editingTodoIndex].title);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

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
