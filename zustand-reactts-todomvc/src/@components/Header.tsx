import useTodosStore from '../@store/useTodosStore';

import TodoTextInput from './TodoTextInput';

const Header = () => {
  const store = useTodosStore((state) => state);

  const handleSave = (text: string) => {
    if (text.length !== 0) {
      store.addTodo(text);
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
