import { Route, Routes } from 'react-router-dom';
import { UsersPage } from './pages/users';
import { TodoListPage } from './pages/todo-list';

function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Routes>
                <Route path="/" element={<UsersPage />}></Route>
                <Route path="/:userId/tasks" element={<TodoListPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
