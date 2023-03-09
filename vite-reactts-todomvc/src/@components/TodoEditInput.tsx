import { useFocus } from '@hooks/use-focus';
import { useAppDispatch, useAppSelector } from '@store/configureStore';
import { cancelEditTodoAC, saveEditTodoAC } from '@store/todos/slice';
import React, { useState } from 'react';

import { todosSelector } from '../@store/todos/selectors';

export const TodoEditInput = () => {
  const inputRef = useFocus();
  const dispatch = useAppDispatch();
  const { editingTodoId, list } = useAppSelector(todosSelector);
  const editingTodoIndex = list.findIndex((element) => element.id === editingTodoId);
  const [text, setText] = useState(list[editingTodoIndex].title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    setText(value);
  };

  // TODO: escape press also triggers this
  const handleBlur = () => {
    dispatch(saveEditTodoAC(text));
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // TODO: not working
    if (event.key === 'Escape') {
      dispatch(cancelEditTodoAC());
    }
    if (event.key === 'Enter') {
      dispatch(saveEditTodoAC(text));
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
