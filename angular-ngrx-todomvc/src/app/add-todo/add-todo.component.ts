import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  textField: FormControl;

  constructor(private store: Store<any>) {
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {}

  saveTodo() {
    if (this.textField.valid) {
      const text = this.textField.value;
      // this.store.dispatch(new TodoActions.AddTodoAction(text));
      this.textField.setValue('');
    }
  }
}
