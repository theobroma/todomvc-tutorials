import { todosAxiosInstance } from './api';

export const todosAPI = {
  getAllTodos() {
    return todosAxiosInstance.get<any>(`/todos`);
  },
};
