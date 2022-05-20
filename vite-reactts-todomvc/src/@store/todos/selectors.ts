import { RootState } from '@store/configureStore';

export const todosSelector = (state: RootState) => {
  return state.todos;
};
