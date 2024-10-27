import { TodosContextProvider } from "./context/todos-context.provider";
import { TodoList } from "./todo-list/todo-list";

const App = () => (
  <TodosContextProvider>
    <div className="App">
      <section className="todoapp">
        <div>
          {/* <Header /> */}
          <TodoList/>
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  </TodosContextProvider>
);

export default App
