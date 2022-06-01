import { createAction } from '@ngrx/store';

export const addTodoAC = createAction(
  '[Todos] AddTodo',
  (title: string = 'default text') => ({ title })
);
