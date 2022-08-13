import type { RootState } from '../configureStore';

export const filterSelector = (state: RootState) => {
  return state.filter.value;
};
