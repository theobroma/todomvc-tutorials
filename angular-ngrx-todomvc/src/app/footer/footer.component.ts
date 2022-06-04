import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../modules/rootReducer';
import { clearCompletedTodoAC } from '../modules/todos/todos.actions';
import { activeTodoCountSelector } from '../modules/todos/todos.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentFilter$: Observable<string>;
  countTodos$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.currentFilter$ = store.select('filter');
    this.countTodos$ = store.select(activeTodoCountSelector);
  }

  ngOnInit(): void {}

  clearCompleted() {
    this.store.dispatch(clearCompletedTodoAC());
  }
}
