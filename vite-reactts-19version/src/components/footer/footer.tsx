import { TodosContext } from '@/context/todos-context';
import { useContext } from 'react';

import { FooterView } from './footer-view/footer-view';

export const Footer = () => {
  const { filter, activeTodoCount, completedTodoCount, removeCompleted, changeFilter } =
    useContext(TodosContext);

  const shouldRenderFooter = !!(activeTodoCount || completedTodoCount);

  return (
    <>
      {shouldRenderFooter && (
        <FooterView
          filter={filter}
          activeTodoCount={activeTodoCount}
          completedTodoCount={completedTodoCount}
          changeFilter={changeFilter}
          removeCompleted={removeCompleted}
        />
      )}
    </>
  );
};
