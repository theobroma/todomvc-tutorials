// import { useAppDispatch } from '@store/configureStore';
// import { addTodoAC } from '@store/todos/slice';

import { useContext } from 'react';

import TodoStore from '../stores/TodoStore';

import TodoTextInput from './TodoTextInput';

const Header = () => {
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;
  // const dispatch = useAppDispatch();
  // const handleSave = (text: string) => {
  //   if (text.length !== 0) {
  //     dispatch(addTodoAC(text));
  //   }
  // };

  const handleSave = (text: string) => {
    if (text.length !== 0) {
      // dispatch(addTodoAC(text));
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
