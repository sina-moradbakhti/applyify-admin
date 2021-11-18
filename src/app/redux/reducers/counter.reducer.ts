import { ActionReducer, Action } from '@ngrx/store';
import { AppState } from 'src/app/test-counter/test-counter.state';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState: Readonly<AppState> = {
  count: 0,
  count2: 10
};

export const counterReducer: ActionReducer<AppState> = (state: AppState = initialState, action: any) => {
  switch (action.type) {
    case increment:
      if (action.playload == 1) {
        return { count: state.count! + 1, count2: state.count2! };
      }
      else {
        return { count2: state.count2! + 1, count: state.count! };
      }
    case decrement:
      if (action.playload == 1) {
        return { count: state.count! - 1, count2: state.count2! };
      }
      else {
        return { count2: state.count2! - 1, count: state.count! };
      }
    case reset:
      if (action.playload == 1)
        return { count: 0, count2: state.count2 };
      else
        return { count: state.count, count2: 0 };
    default:
      return state;
  }
}
