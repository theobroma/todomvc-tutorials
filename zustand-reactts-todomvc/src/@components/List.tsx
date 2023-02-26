import React from 'react';

import useTodosStore from '../@store/useTodosStore';

import TodoItem from './TodoItem';

const List = React.memo(function List() {
  const store = useTodosStore();
  const { todos } = store;
  const activeTodoCount = store.todos.filter(
    (item) => item.completed === false,
  ).length;

  console.log('todos', todos);
  // const dispatch = useAppDispatch();
  // const todos = useAppSelector(visibleTodosSelector);
  // const { editingTodoId } = useAppSelector(todosSelector);
  // const activeTodoCount = useAppSelector(activeTodoCountSelector);

  const _handleTodoToggleAll = () => {
    store.toggleAllTodos();
  };

  const renderToggleAll = () => {
    if (todos.length) {
      return (
        <>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={_handleTodoToggleAll}
            checked={activeTodoCount === 0}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </>
      );
    }
    return null;
  };

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        // isEditing={editingTodoId === todo.id}
        isEditing={false}
      />
    ));
  };

  return (
    <section className="main">
      {renderToggleAll()}
      <ul className="todo-list"> {renderTodos()}</ul>
    </section>
  );
});

export default List;
