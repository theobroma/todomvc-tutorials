import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setFilterAC } from '../modules/filter/filter.actions';
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

  constructor(private store: Store<{ filter: string }>) {
    this.currentFilter$ = store.select('filter');
    this.countTodos$ = store.select(activeTodoCountSelector);
  }

  ngOnInit(): void {}

  showAll() {
    this.store.dispatch(setFilterAC('SHOW_ALL'));
  }

  showActive() {
    this.store.dispatch(setFilterAC('SHOW_ACTIVE'));
  }

  showCompleted() {
    this.store.dispatch(setFilterAC('SHOW_COMPLETED'));
  }

  clearCompleted() {
    this.store.dispatch(clearCompletedTodoAC());
  }

  // completedAll() {
  //   this.store.dispatch(new TodoActions.CompletedAllAction());
  // }
}
