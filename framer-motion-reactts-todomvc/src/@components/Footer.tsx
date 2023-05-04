import { useAppDispatch, useAppSelector } from '@store/configureStore';
import { filterSelector } from '@store/filter/selectors';
import { setFilterAC } from '@store/filter/slice';
import {
  activeTodoCountSelector,
  completedTodoCountSelector,
} from '@store/todos/selectors';
import { removeCompletedAC } from '@store/todos/slice';
import { FilterEnum } from '@types';
import { pluralize } from '@utils/pluralize';

import { ButtonClear } from './ButtonClear';
import { FilterLink } from './FilterLink';

export const Footer = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(filterSelector);
  const activeTodoCount = useAppSelector(activeTodoCountSelector);
  const completedTodoCount = useAppSelector(completedTodoCountSelector);

  const handleButtonClick = () => {
    dispatch(removeCompletedAC());
  };

  const handleFilterChange = (filter: FilterEnum) => () => dispatch(setFilterAC(filter));

  const commonProps = {
    currentFilter: currentFilter,
    onClick: handleFilterChange,
  };

  return (
    <>
      {activeTodoCount || completedTodoCount ? (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodoCount}</strong>&nbsp;{pluralize(activeTodoCount, 'item')}
            &nbsp;left
          </span>
          <ul className="filters">
            <FilterLink filter={FilterEnum.SHOW_ALL} {...commonProps}>
              All
            </FilterLink>
            <FilterLink filter={FilterEnum.SHOW_ACTIVE} {...commonProps}>
              Active
            </FilterLink>
            <FilterLink filter={FilterEnum.SHOW_COMPLETED} {...commonProps}>
              Completed
            </FilterLink>
          </ul>
          {completedTodoCount > 0 && <ButtonClear onClick={handleButtonClick} />}
        </footer>
      ) : null}
    </>
  );
};
