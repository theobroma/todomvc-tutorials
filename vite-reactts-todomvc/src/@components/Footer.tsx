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

import FilterLink from './FilterLink';

const Footer = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(filterSelector);
  const activeTodoCount = useAppSelector(activeTodoCountSelector);
  const completedTodoCount = useAppSelector(completedTodoCountSelector);

  const handleButtonClick = () => {
    dispatch(removeCompletedAC());
  };

  const handleFilterChange = (filter: FilterEnum) => () => dispatch(setFilterAC(filter));

  const renderClearButton = () => {
    if (completedTodoCount > 0) {
      return (
        <button type="button" className="clear-completed" onClick={handleButtonClick}>
          Clear completed
        </button>
      );
    }
    return null;
  };

  return (
    <>
      {activeTodoCount || completedTodoCount ? (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodoCount}</strong> {pluralize(activeTodoCount, 'item')} left
          </span>
          <ul className="filters">
            <FilterLink
              filter={FilterEnum.SHOW_ALL}
              currentFilter={currentFilter}
              onClick={handleFilterChange}
            >
              All
            </FilterLink>
            <FilterLink
              filter={FilterEnum.SHOW_ACTIVE}
              currentFilter={currentFilter}
              onClick={handleFilterChange}
            >
              Active
            </FilterLink>
            <FilterLink
              filter={FilterEnum.SHOW_COMPLETED}
              currentFilter={currentFilter}
              onClick={handleFilterChange}
            >
              Completed
            </FilterLink>
          </ul>
          {renderClearButton()}
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
