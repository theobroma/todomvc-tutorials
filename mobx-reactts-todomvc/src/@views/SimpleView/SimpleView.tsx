// https://codesandbox.io/s/dreamy-raman-k0r7f?file=/package.json
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

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
