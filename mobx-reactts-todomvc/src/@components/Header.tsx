import { useContext } from 'react';

import TodoStore from '../stores/TodoStore';

import TodoTextInput from './TodoTextInput';

const Header = () => {
  const todoStore = useContext(TodoStore);
  const { addTodo } = todoStore;

  const handleSave = (text: string) => {
    if (text.length !== 0) {
      addTodo(text);
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
