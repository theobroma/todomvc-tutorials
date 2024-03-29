import { createContext } from 'react';
import {
  action,
  computed,
  makeAutoObservable,
  observable,
  reaction,
} from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import type { TodoType } from '../@types';
import { FilterEnum } from '../@types';

class TodoStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.todos,
      (_) => console.log(this.todos.length),
    );
  }

  @observable todos: TodoType[] = [
    { id: uuidv4(), title: 'drink coffee', completed: false },
    { id: uuidv4(), title: 'be awesome', completed: true },
    { id: uuidv4(), title: 'Task #3', completed: true },
    { id: uuidv4(), title: 'Task #4', completed: false },
  ];

  @observable filter: FilterEnum = FilterEnum.SHOW_ALL;

  @observable editingTodoId: TodoType['id'] | null = null;

  @action editTodo = (id: TodoType['id']) => {
    this.editingTodoId = id;
  };

  @action cancelEditTodo = () => {
    this.editingTodoId = null;
  };

  @action saveEditTodo = (title: TodoType['title']) => {
    const index = this.todos.findIndex(
      (element) => element.id === this.editingTodoId,
    );
    this.todos[index].title = title;
    this.editingTodoId = null;
  };

  @action setFilter = (value: FilterEnum) => {
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
      case FilterEnum.SHOW_ALL:
        return this.todos;
      case FilterEnum.SHOW_COMPLETED:
        return this.todos.filter((todo) => todo.completed);
      case FilterEnum.SHOW_ACTIVE:
        return this.todos.filter((todo) => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${this.filter}`);
    }
  }
}

export default createContext(new TodoStore());
