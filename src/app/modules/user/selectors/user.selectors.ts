import { State } from '../reducers/user.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getUsers = (state: State) => state.users;

export const selectUsersState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'user'
);

export const selectUsers: MemoizedSelector<object, any> = createSelector(
  selectUsersState,
  getUsers
);
