import { Action, createReducer, on } from '@ngrx/store';
import * as StatisticsActions from '../actions/statistics.actions';

export interface State {
  notifications: any[];
}

export const initialState: State = {
  notifications: []
};

export const reducer = createReducer(
  initialState,
  on(StatisticsActions.GetNotificationStatisticsSuccess, (state, action) => ({
    ...state,
    notifications: action.payload
  }))
);

export function statisticsReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
