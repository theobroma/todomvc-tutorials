import { createContext } from 'react';
import {
  action,
  computed,
  makeAutoObservable,
  observable,
  reaction,
} from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import type { FilterType, TodoType } from '../@types';
import { VisibilityFilters } from '../@types';

class TodoStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.todos,
      (_) => console.log(this.todos.length),
    );
  }

  @observable todos: TodoType[] = [
    { id: uuidv4(), title: 'Item #1', completed: false },
    { id: uuidv4(), title: 'Item #2', completed: false },
    { id: uuidv4(), title: 'Item #3', completed: false },
    { id: uuidv4(), title: 'Item #4', completed: false },
    { id: uuidv4(), title: 'Item #5', completed: true },
    { id: uuidv4(), title: 'Item #6', completed: false },
  ];

  @observable filter: FilterType = 'SHOW_ALL';

  @action setFilter = (value: FilterType) => {
    this.filter = value;
  };

  @action addTodo = (title: TodoType['title']) => {
    this.todos.push({ title, id: uuidv4(), completed: false });
  };

  @action toggleTodo = (id: TodoType['id']) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  @action toggleAllTodo = () => {
    // TODO: mb use computed
    const activeTodoCount = this.todos.filter((todo) => !todo.completed).length;
    //
    this.todos = this.todos.map((todo) => {
      return { ...todo, completed: activeTodoCount !== 0 };
    });
  };

  @action removeTodo = (id: TodoType['id']) => {
    // console.log(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    // console.log(this.todos);
  };

  @action removeCompleted = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };

  @computed get info() {
    return {
      // just for back compatibility
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      notCompleted: this.todos.filter((todo) => !todo.completed).length,
      // new
      activeTodoCount: this.todos.filter((todo) => !todo.completed).length,
      completedTodoCount: this.todos.filter((todo) => todo.completed).length,
    };
  }

  @computed get filteredTodos() {
    switch (this.filter) {
      case VisibilityFilters.SHOW_ALL:
        return this.todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return this.todos.filter((todo) => todo.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return this.todos.filter((todo) => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${this.filter}`);
    }
  }
}

export default createContext(new TodoStore());
