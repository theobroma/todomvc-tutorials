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

  @action addTodo = (title: TodoType['title']) => {
    this.todos.push({ title, id: uuidv4(), completed: false });
  };

  @action toggleTodo = (id: string) => {
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

  @action removeTodo = (id: string) => {
    console.log(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
  };

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      notCompleted: this.todos.filter((todo) => !todo.completed).length,
    };
  }
}

export default createContext(new TodoStore());