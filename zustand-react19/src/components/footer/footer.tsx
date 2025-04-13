// import { useContext } from 'react';

// import { TodosContext } from '@/context/todos-context';
import { useMemo } from 'react';

import { FilterEnum } from '@/enums/filter.enum';
import useTodosStore from '@/store/store';
import { pluralize } from '@/utils/pluralize.util';

import { FilterLink } from './filter-link/filter-link';
import { FooterButtonClear } from './footer-button-clear/footer-button-clear';

export const Footer = () => {
  // const { filter, activeTodoCount, completedTodoCount, removeCompleted, changeFilter } =
  //   useContext(TodosContext);

  const { todos, filter, changeFilter, removeCompleted } = useTodosStore();

  const activeTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 0 : 1), 0),
    [todos],
  );

  const completedTodoCount = useMemo(
    () => todos?.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0),
    [todos],
  );

  const commonProps = {
    currentFilter: filter,
    onClick: changeFilter,
  };

  const shouldRenderFooter = !!(activeTodoCount || completedTodoCount);

  return (
    <>
      {shouldRenderFooter && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodoCount}</strong>&nbsp;{pluralize(activeTodoCount, 'item')}
            &nbsp;left
          </span>
          <ul className="filters">
            <FilterLink filter={FilterEnum.ShowAll} {...commonProps}>
              All
            </FilterLink>
            <FilterLink filter={FilterEnum.ShowActive} {...commonProps}>
              Active
            </FilterLink>
            <FilterLink filter={FilterEnum.ShowCompleted} {...commonProps}>
              Completed
            </FilterLink>
          </ul>
          {completedTodoCount > 0 && <FooterButtonClear onClick={removeCompleted} />}
        </footer>
      )}
    </>
  );
};
