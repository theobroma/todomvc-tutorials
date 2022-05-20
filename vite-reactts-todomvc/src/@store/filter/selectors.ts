import { RootState } from '@store/configureStore';

export const filterSelector = (state: RootState) => {
  return state.filter;
};
