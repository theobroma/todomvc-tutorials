//https://stackoverflow.com/questions/52109465/angular-6-ngrx-how-to-add-new-item-to-array-in-state-object
import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo.model';
import { addTodoAC } from './todos.actions';

const initialState = {
  list: [
    {
      id: uuidv4(),
      title: 'drink coffee',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'be awesome',
      completed: true,
    },
  ] as Todo[],
  // editingTodoId: null as TodoType['id'] | null,
};

export const todosReducer = createReducer(
  initialState,
  on(addTodoAC, (state, { title }) => ({
    ...state,
    list: [
      ...state.list,
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
    ],
  }))
);
