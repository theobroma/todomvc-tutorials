// https://codesandbox.io/s/dreamy-raman-k0r7f?file=/package.json
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const SimpleView = () => {
  return (
    <div className="App">
      <header>
        <h1>MobX TodoMVC</h1>
      </header>
      <AddTodo />
      <br />
      <TodoList />
    </div>
  );
};

export default SimpleView;
