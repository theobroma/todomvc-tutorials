import { TodoTextInput } from '@/components/todo-text-input/todo-text-input';
import { TodosContext } from '@/context/todos-context';
import { useContext } from 'react';

export const Header = () => {
  const { addTodo } = useContext(TodosContext);

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={addTodo} />
    </header>
  );
};
