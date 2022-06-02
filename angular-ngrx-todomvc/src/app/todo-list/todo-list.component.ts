// https://stackoverflow.com/questions/39044156/how-can-i-console-log-the-value-of-a-observable
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../modules/todos/todo.model';
import { toggleAllTodoAC } from '../modules/todos/todos.actions';
import {
  activeTodoCountSelector,
  listSelector,
} from '../modules/todos/todos.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  activeTodoCount$: Observable<number>;
  activeTodoCount: number;
  todosList$: Observable<Todo[]>;
  checkField: FormControl;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todosList$ = store.select(listSelector);
    // this.todosList$.subscribe((res) => console.log(res));

    this.activeTodoCount$ = store.select(activeTodoCountSelector);
    this.activeTodoCount$.subscribe((res) => (this.activeTodoCount = res));
    this.activeTodoCount = 0;

    this.checkField = new FormControl(false);
    this.checkField.valueChanges.subscribe((state) => {
      console.log(state);
      // this.store.dispatch(toggleTodoAC(this.todo.id));
    });
  }

  ngOnInit(): void {}

  toggleAll() {
    this.store.dispatch(toggleAllTodoAC(this.activeTodoCount !== 0));
  }
}
