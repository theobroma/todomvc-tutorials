import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../modules/todos/todo.model';
import { deleteTodoAC } from '../modules/todos/todos.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {
    id: 'abcdef',
    title: 'title',
    completed: false,
  };

  constructor(private store: Store<any>) {
    // this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  deleteTodo() {
    const id = this.todo.id;
    this.store.dispatch(deleteTodoAC(id));
  }
}
