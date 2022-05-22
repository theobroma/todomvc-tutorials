import { useAppDispatch, useAppSelector } from '@store/configureStore';
import {
  activeTodoCountSelector,
  completedTodoCountSelector,
} from '@store/todos/selectors';
import { pluralize } from '@utils/pluralize';
import React from 'react';

import FilterLink from './FilterLink';

const Footer = () => {
  const dispatch = useAppDispatch();
  const activeTodoCount = useAppSelector(activeTodoCountSelector);
  const completedTodoCount = useAppSelector(completedTodoCountSelector);

  const handleButtonClick = () => {
    // dispatch(actions.removeCompleted());
  };

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
            <FilterLink type="SHOW_ALL">All</FilterLink>
            <FilterLink type="SHOW_ACTIVE">Active</FilterLink>
            <FilterLink type="SHOW_COMPLETED">Completed</FilterLink>
          </ul>
          {renderClearButton()}
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
