import { createAction } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

export const addTodoAC = createAction(
  '[Todos] AddTodo',
  (title: string = 'default text') => ({
    id: uuidv4(),
    title: title,
    completed: false,
  })
);

export const toggleTodoAC = createAction(
  '[Todos] Toggle Todo',
  (id: string) => ({ id })
);

export const updateTodoAC = createAction(
  '[Todos] Update Todo',
  (id: string, newTitle: string) => ({ id, newTitle })
);

export const toggleAllTodoAC = createAction(
  '[Todos] Toggle All Todos',
  (bool: boolean) => ({ bool })
);

export const deleteTodoAC = createAction(
  '[Todos] Delete Todo',
  (id: string) => ({ id })
);

export const clearCompletedTodoAC = createAction(
  '[Todos] Clear Completed Todo'
);
