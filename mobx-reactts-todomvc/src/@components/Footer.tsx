import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';

import { FilterEnum } from '../@types';
import { pluralize } from '../@utils/pluralize';
import TodoStore from '../stores/TodoStore';

import FilterLink from './FilterLink';

const Footer = () => {
  const todoStore = useContext(TodoStore);
  const {
    removeCompleted,
    info: { total, activeTodoCount, completedTodoCount },
  } = todoStore;

  useEffect(() => {
    console.log('total :>> ', total);
    console.log('activeTodoCount :>> ', activeTodoCount);
    console.log('completedTodoCount :>> ', completedTodoCount);
  }, [total, activeTodoCount, completedTodoCount]);

  const handleButtonClick = () => {
    removeCompleted();
  };

  const renderClearButton = () => {
    if (completedTodoCount > 0) {
      return (
        <button
          type="button"
          className="clear-completed"
          onClick={handleButtonClick}
        >
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
            <strong>{activeTodoCount}</strong>&nbsp;
            {pluralize(activeTodoCount, 'item')} left
          </span>
          <ul className="filters">
            <FilterLink type={FilterEnum.SHOW_ALL}>All</FilterLink>
            <FilterLink type={FilterEnum.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink type={FilterEnum.SHOW_COMPLETED}>Completed</FilterLink>
          </ul>
          {renderClearButton()}
        </footer>
      ) : null}
    </>
  );
};

export default observer(Footer);
