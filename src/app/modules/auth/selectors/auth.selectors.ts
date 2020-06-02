import { State } from '../reducers/auth.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getUser = (state: State) => state.user;

export const selectAuthState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'auth'
);

export const selectUser: MemoizedSelector<object, any> = createSelector(selectAuthState, getUser);
