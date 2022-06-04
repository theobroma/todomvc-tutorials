import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { filterReducer, FilterState } from './filter/filter.reducer';
import { todosReducer, TodosState } from './todos/todos.reducer';

export interface AppState {
  filter: FilterState;
  todos: TodosState;
}

export const reducers: ActionReducerMap<AppState> = {
  filter: filterReducer,
  todos: todosReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
