import { useAppDispatch } from '@store/configureStore';
import { addTodoAC } from '@store/todos/slice';

import { TodoTextInput } from './TodoTextInput';

export const Header = () => {
  const dispatch = useAppDispatch();
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      dispatch(addTodoAC(text));
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={handleSave} />
    </header>
  );
};
