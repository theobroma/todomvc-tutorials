import { TodosContextProvider } from "./context/todos-context.provider";

const App = () => (
  <TodosContextProvider>
    <div className="App">
      <section className="todoapp">
        <div>
          todolist
          {/* <Header /> */}
          {/* <List /> */}
          {/* <Footer /> */}
        </div>
      </section>
    </div>
  </TodosContextProvider>
);

export default App
