import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../modules/todos/todo.model';
import { deleteTodoAC, toggleTodoAC } from '../modules/todos/todos.actions';

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

  checkField: FormControl;

  constructor(private store: Store<any>) {
    // this.textField = new FormControl('', [Validators.required]);
    this.checkField = new FormControl(false);
    this.checkField.valueChanges.subscribe((state) => {
      // console.log(state);
      this.store.dispatch(toggleTodoAC(this.todo.id));
    });
  }

  ngOnInit(): void {}

  deleteTodo() {
    const id = this.todo.id;
    this.store.dispatch(deleteTodoAC(id));
  }
}
