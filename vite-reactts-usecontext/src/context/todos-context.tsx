import { createContext } from "react";
import { TodoInterface } from "./todos-context.interface";
import { initialTodosContext } from "./todos-context.initial";

export const TodosContext = createContext<TodoInterface[]>(initialTodosContext);