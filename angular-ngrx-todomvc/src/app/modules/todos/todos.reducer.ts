import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo.model';
// import { setFilterAC } from './filter.actions';

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
  initialState
  // on(setFilterAC, (state, action) => action.prop)
);
