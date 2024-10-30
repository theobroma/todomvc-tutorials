import { useContext } from 'react';

import { TodosContext } from '../../context/todos-context';
import { FilterEnum } from '../../enums/filter.enum';
import { pluralize } from '../../utils/pluralize.util';
import { FilterLink } from './filter-link/filter-link';
import { FooterButtonClear } from './footer-button-clear/footer-button-clear';

export const Footer = () => {
  const { filter, activeTodoCount, completedTodoCount, removeCompleted, changeFilter } =
    useContext(TodosContext);

  const commonProps = {
    currentFilter: filter,
    onClick: changeFilter,
  };

  return (
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
  );
};
