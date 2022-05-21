import { useAppDispatch } from '@store/configureStore';
import { addTaskAC } from '@store/todos/slice';
import React from 'react';

import TodoTextInput from './TodoTextInput';

const Header = (props) => {
  const dispatch = useAppDispatch();
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      dispatch(addTaskAC(text));
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={handleSave} />
    </header>
  );
};

export default Header;
