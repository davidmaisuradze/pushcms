import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface State {
  users: any[];
}

export const initialState: State = {
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserActions.GetUsersSuccess, (state, action) => ({
    ...state,
    users: action.payload
  }))
);

export function userReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
