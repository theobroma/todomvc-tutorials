import { PropsWithChildren } from "react";
import { TodosContext } from "./todos-context";
import { initialTodosContext } from "./todos-context.initial";

export const TodosContextProvider = ({ children }: PropsWithChildren) => {


    return (
        <TodosContext.Provider value={initialTodosContext}>
            {children}
        </TodosContext.Provider>
    );
};