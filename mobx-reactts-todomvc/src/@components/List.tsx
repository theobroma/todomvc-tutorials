import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import TodoStore from '../stores/TodoStore';

import TodoItem from './TodoItem';

const List = () => {
  const todoStore = useContext(TodoStore);
  const {
    todos,
    toggleAllTodo,
    info: { activeTodoCount },
  } = todoStore;

  const renderToggleAll = () => {
    if (todos.length) {
      return (
        <>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={(_) => {
              toggleAllTodo();
            }}
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
      />
    ));
  };

  return (
    <section className="main">
      {renderToggleAll()}
      <ul className="todo-list"> {renderTodos()}</ul>
    </section>
  );
};

export default observer(List);
