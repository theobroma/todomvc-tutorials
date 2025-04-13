import { useContext } from 'react';

import { TodoTextInput } from '@/components/todo-text-input/todo-text-input';
import { TodosContext } from '@/context/todos-context';

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
