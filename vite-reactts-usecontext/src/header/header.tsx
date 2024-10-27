import { TodoTextInput } from '../todo-text-input/todo-text-input';

export const Header = () => {
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      console.log('text :>> ', text);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={handleSave} />
    </header>
  );
};
