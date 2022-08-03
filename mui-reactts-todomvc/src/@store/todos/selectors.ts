import type { RootState } from '../configureStore';

export const todosSelector = (state: RootState) => {
  return state.todos;
};
