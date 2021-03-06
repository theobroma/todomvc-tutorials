import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../modules/rootReducer';
import { Todo } from '../modules/todos/todo.model';
import {
  deleteTodoAC,
  toggleTodoAC,
  updateTodoAC,
} from '../modules/todos/todos.actions';

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
  // @ViewChild('textInput') textInput: ElementRef;
  textField: UntypedFormControl;
  checkField: UntypedFormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) {
    this.editing = false;
    this.textField = new UntypedFormControl('', [Validators.required]);
    this.checkField = new UntypedFormControl(false);
    this.checkField.valueChanges.subscribe((state) => {
      // console.log(state);
      this.store.dispatch(toggleTodoAC(this.todo.id));
    });
  }

  ngOnInit() {
    this.textField.setValue(this.todo.title);
    this.checkField.setValue(this.todo.completed, { emitEvent: false });
  }

  updateText() {
    console.log('updateText');
    if (this.textField.valid) {
      const id = this.todo.id;
      const newText = this.textField.value;
      this.store.dispatch(updateTodoAC(id, newText));
    }
  }

  activeEditMode() {
    this.editing = !this.editing;
    console.log(this.editing);
    // setTimeout(() => {
    //   this.textInput.nativeElement.focus();
    // });
  }

  deleteTodo() {
    const id = this.todo.id;
    this.store.dispatch(deleteTodoAC(id));
  }
}
