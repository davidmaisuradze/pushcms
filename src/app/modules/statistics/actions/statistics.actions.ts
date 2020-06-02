import { createAction, props } from '@ngrx/store';

export const GetNotificationStatisticsRequest = createAction(
  '[Statistics] Get Notification Statistics Request',
  props<{ payload: { fromDate: string; toDate: string } }>()
);

export const GetNotificationStatisticsSuccess = createAction(
  '[Statistics] GEt Notification Statistics Success',
  props<{ payload: any }>()
);

export const GetNotificationStatisticsFailure = createAction(
  '[Statistics] Get Notification Statistics Failure',
  props<{ payload: any }>()
);
