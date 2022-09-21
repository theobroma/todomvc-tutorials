import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import TodoStore from '../stores/TodoStore';

import TodoItem from './TodoItem';

const List = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo } = todoStore;

  //   const dispatch = useAppDispatch();
  //   const todos = useAppSelector(visibleTodosSelector);
  //   const { editingTodoId } = useAppSelector(todosSelector);
  //   const activeTodoCount = useAppSelector(activeTodoCountSelector);

  //   const _handleTodoToggleAll = () => {
  //     const bool = activeTodoCount !== 0;
  //     dispatch(toggleAllTodoAC(bool));
  //   };

  //   const renderToggleAll = () => {
  //     if (todos.length) {
  //       return (
  //         <>
  //           <input
  //             id="toggle-all"
  //             className="toggle-all"
  //             type="checkbox"
  //             onChange={_handleTodoToggleAll}
  //             checked={activeTodoCount === 0}
  //           />
  //           <label htmlFor="toggle-all">Mark all as complete</label>
  //         </>
  //       );
  //     }
  //     return null;
  //   };

  const renderTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        // isEditing={editingTodoId === todo.id}
      />
    ));
  };

  return (
    <section className="main">
      {/* {renderToggleAll()} */}
      <ul className="todo-list"> {renderTodos()}</ul>
    </section>
  );
};

export default observer(List);
