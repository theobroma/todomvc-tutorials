// import { useAppDispatch, useAppSelector } from '@store/configureStore';
// import {
//   activeTodoCountSelector,
//   completedTodoCountSelector,
// } from '@store/todos/selectors';
// import { removeCompletedAC } from '@store/todos/slice';
// import { pluralize } from '@utils/pluralize';

import useTodosStore from '../@store/useTodosStore';
import { VisibilityFilters } from '../@types/filter';
import { pluralize } from '../@utils/pluralize';

import FilterLink from './FilterLink';

const Footer = () => {
  const store = useTodosStore((state) => state);
  const { todos } = store;
  const activeTodoCount = store.todos.filter(
    (item) => item.completed === false,
  ).length;
  const completedTodoCount = store.todos.filter(
    (item) => item.completed === true,
  ).length;
  // const dispatch = useAppDispatch();
  // const activeTodoCount = useAppSelector(activeTodoCountSelector);
  // const completedTodoCount = useAppSelector(completedTodoCountSelector);

  // const handleButtonClick = () => {
  //   dispatch(removeCompletedAC());
  // };

  // const renderClearButton = () => {
  //   if (completedTodoCount > 0) {
  //     return (
  //       <button
  //         type="button"
  //         className="clear-completed"
  //         onClick={handleButtonClick}
  //       >
  //         Clear completed
  //       </button>
  //     );
  //   }
  //   return null;
  // };

  return (
    <>
      {activeTodoCount || completedTodoCount ? (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodoCount}</strong>{' '}
            {pluralize(activeTodoCount, 'item')} left
          </span>
          <ul className="filters">
            <FilterLink type={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_COMPLETED}>
              Completed
            </FilterLink>
          </ul>
          {/* {renderClearButton()} */}
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
