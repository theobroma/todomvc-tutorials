import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { UsersPage } from './pages/users';
import { TodoListPage } from './pages/todo-list';

function App() {
    return (
        <BrowserRouter>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/:userId/tasks" element={<TodoListPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
