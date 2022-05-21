import { useAppDispatch } from '@store/configureStore';
import React from 'react';

import TodoTextInput from './TodoTextInput';

const Header = (props) => {
  const dispatch = useAppDispatch();
  const handleSave = (text: string) => {
    console.log(text);
    // if (text.length !== 0) {
    //   dispatch(actions.addTodo(text));
    // }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={handleSave} />
    </header>
  );
};

export default Header;
