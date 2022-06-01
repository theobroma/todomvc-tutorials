// https://stackoverflow.com/questions/39044156/how-can-i-console-log-the-value-of-a-observable
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../modules/todos/todo.model';
import { listSelector } from '../modules/todos/todos.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todosList$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todosList$ = store.select(listSelector);
    // this.todosList$.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
