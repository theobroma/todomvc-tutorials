import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentFilter$: Observable<string>;

  constructor(private store: Store<{ filter: string }>) {
    this.currentFilter$ = store.select('filter');
  }

  ngOnInit(): void {}
}
