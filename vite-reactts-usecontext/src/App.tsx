import { TodosContextProvider } from './context/todos-context.provider';
import { TodoList } from './components/todo-list/todo-list';
import { Header } from './components/header/header';

const App = () => (
  <TodosContextProvider>
    <div className="App">
      <section className="todoapp">
        <div>
          <Header />
          <TodoList />
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  </TodosContextProvider>
);

export default App;
