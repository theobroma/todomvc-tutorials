import useTodosStore from '../@store/useTodosStore';
import { FilterEnum } from '../@types';
import { pluralize } from '../@utils/pluralize';

import FilterLink from './FilterLink';

const Footer = () => {
  const store = useTodosStore((state) => state);
  const { todos } = store;
  const activeTodoCount = todos.filter(
    (item) => item.completed === false,
  ).length;
  const completedTodoCount = todos.filter(
    (item) => item.completed === true,
  ).length;

  const handleButtonClick = () => {
    store.removeCompleted();
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
            {pluralize(activeTodoCount, 'item')}&nbsp;left
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

export default Footer;
