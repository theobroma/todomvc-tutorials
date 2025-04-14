import { TodoTextInput } from '@/components/todo-text-input/todo-text-input';
import useTodosStore from '@/store/store';

export const Header = () => {
  const { addTodo } = useTodosStore();

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
