// https://ru.stackoverflow.com/a/1070334/199121
import type { TodoType } from '../@types';

import { todosAxiosInstance } from './api';

export const todosAPI = {
  getAllTodos() {
    return todosAxiosInstance.get<TodoType[]>(`/todos`);
  },
  deleteTodoByID(id: TodoType['id']) {
    return todosAxiosInstance.delete<Record<string, never>>(`/todos/${id}`);
  },
  patchTodoByID(id: TodoType['id'], partialTodo: Partial<TodoType>) {
    return todosAxiosInstance.patch<TodoType>(`/todos/${id}`, partialTodo);
  },
};
