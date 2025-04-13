import { TodosContextProvider } from './context/todos-context.provider';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { TodoList } from './components/todo-list/todo-list';

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <section className="todoapp">
          <div>
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </div>
    </TodosContextProvider>
  );
}

export default App;
