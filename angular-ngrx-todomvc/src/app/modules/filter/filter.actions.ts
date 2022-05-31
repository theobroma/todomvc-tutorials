import { createAction } from '@ngrx/store';

// export const setFilterAC = createAction('[Filter] SetFilter');

export const setFilterAC = createAction(
  '[Filter] SetFilter',
  (prop: string = 'My default value') => ({ prop })
);
