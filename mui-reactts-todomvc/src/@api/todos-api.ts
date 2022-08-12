import type { TodoType } from '../@types';

import { todosAxiosInstance } from './api';

export const todosAPI = {
  getAllTodos() {
    return todosAxiosInstance.get<TodoType[]>(`/todos`);
  },
  deleteTodoByID(id: TodoType['id']) {
    return todosAxiosInstance.delete<Record<string, never>>(`/todos/${id}`);
  },
};
