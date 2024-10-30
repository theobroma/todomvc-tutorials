import { useContext } from 'react';

import { TodosContext } from '../../context/todos-context';
import { TodoTextInput } from '../todo-text-input/todo-text-input';

export const Header = () => {
  const { addTodo } = useContext(TodosContext);

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
