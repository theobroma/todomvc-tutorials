import { createContext } from 'react';
import { initialTodosContext } from './todos-context.initial';
import { TodosInterface } from './todos-context.interface';

export const TodosContext = createContext<TodosInterface>(initialTodosContext);
