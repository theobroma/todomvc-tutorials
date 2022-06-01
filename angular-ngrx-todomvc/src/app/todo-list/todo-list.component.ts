// https://stackoverflow.com/questions/39044156/how-can-i-console-log-the-value-of-a-observable
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../modules/todos/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todosList$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: Todo[] }>) {
    const getTodos = (state: any) => state.todos;
    const getList = (state: any) => state.list;

    this.todosList$ = store.select((state) => getList(getTodos(state)));
    this.todosList$.subscribe((res) => console.log(res));
    // this.todos$ = store.select('todos');
    // this.todos$.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}
