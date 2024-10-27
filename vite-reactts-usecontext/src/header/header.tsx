import { TodoTextInput } from '../todo-text-input/todo-text-input';
import { noop } from '../utils/noop.util';

export const Header = () => {
  //   const dispatch = useAppDispatch();
  //   const handleSave = (text: string) => {
  //     if (text.length !== 0) {
  //       dispatch(addTodoAC(text));
  //     }
  //   };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={noop} />
    </header>
  );
};
