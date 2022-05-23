import { useAppDispatch, useAppSelector } from '@store/configureStore';
import { cancelEditTodoAC, saveEditTodoAC } from '@store/todos/slice';
import React, { useEffect, useRef, useState } from 'react';

// import { actions } from '../@store/todos/actions';
import { todosSelector } from '../@store/todos/selectors';

const TodoEditInput = () => {
  const dispatch = useAppDispatch();
  const { editingTodoId } = useAppSelector(todosSelector);
  const [text, setText] = useState('');

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

  return (
    <input
      className="edit"
      value={text}
      // onBlur={() => dispatch(actions.saveEditingTodoTitle())}
      // onChange={(event) =>
      //   dispatch(actions.changeEditingTodoTitle(event.currentTarget.value))
      // }
      onChange={handleChange}
      onKeyDown={(event) => {
        console.log('event.code', event.code);
        console.log('event.key', event.key);
        if (event.key === 'Escape') {
          dispatch(cancelEditTodoAC());
        } else if (event.key === 'Enter') {
          dispatch(saveEditTodoAC(text));
        }
      }}
      ref={inputRef}
    />
  );
};

export default TodoEditInput;
