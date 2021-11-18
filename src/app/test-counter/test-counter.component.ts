import { Component, OnInit } from '@angular/core';
import { ActionReducer, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../redux/actions/counter.actions';
import { AppState } from './test-counter.state';

@Component({
  selector: 'app-test-counter',
  templateUrl: './test-counter.component.html',
  styleUrls: ['./test-counter.component.scss']
})
export class TestCounterComponent implements OnInit {

  appState$: Observable<AppState>;

  constructor(private store: Store<any>) {
    this.appState$ = store.pipe(select('counterReducer'));
  }

  ngOnInit(): void { }

  increment(level = 1) {
    this.store.dispatch({ type: increment, playload: level });
  }
  decrement(level = 1) {
    this.store.dispatch({ type: decrement, playload: level });
  }
  reset(level = 1) {
    this.store.dispatch({ type: reset, playload: level });
  }

}
