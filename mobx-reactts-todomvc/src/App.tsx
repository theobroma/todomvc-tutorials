import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MobX TodoMVC</h1>
      </header>
      <AddTodo />
      <br />
      <TodoList />
    </div>
  );
};

export default App;
