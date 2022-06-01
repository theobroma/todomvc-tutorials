import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../modules/todos/todo.model';

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

  constructor() {}

  ngOnInit(): void {}
}
