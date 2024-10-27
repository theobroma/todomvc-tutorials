import { createContext } from 'react';
import { initialTodosContext } from './todos-context.initial';

export const TodosContext = createContext<any>(initialTodosContext);
