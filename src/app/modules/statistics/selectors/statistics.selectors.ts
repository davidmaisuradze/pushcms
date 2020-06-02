import { State } from '../reducers/statistics.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getNotificationStatistics = (state: State) => state.notifications;

export const selectStatisticsState: MemoizedSelector<object, State> = createFeatureSelector<State>(
  'statistics'
);

export const selectNotificationStatistics: MemoizedSelector<object, any> = createSelector(
  selectStatisticsState,
  getNotificationStatistics
);
