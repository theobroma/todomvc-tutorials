import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../modules/rootReducer';
import { addTodoAC } from '../modules/todos/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  textField: FormControl;

  constructor(private store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {}

  saveTodo() {
    if (this.textField.valid) {
      const text = this.textField.value;
      this.store.dispatch(addTodoAC(text));
      this.textField.setValue('');
    }
  }
}
