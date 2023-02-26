// import { useAppDispatch } from '@store/configureStore';
// import { addTodoAC } from '@store/todos/slice';

import useTodosStore from '../@store/useTodosStore';

import TodoTextInput from './TodoTextInput';

const Header = () => {
  // const dispatch = useAppDispatch();
  // const handleSave = (text: string) => {
  //   if (text.length !== 0) {
  //     dispatch(addTodoAC(text));
  //   }
  // };
  const store = useTodosStore((state) => state);

  const handleSave = (text: string) => {
    if (text.length !== 0) {
      // console.log('text :>> ', text);
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
