import { Injectable } from '@angular/core';
import { StatisticsService } from '../../../core/services/statistics.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as StatisticsActions from '../actions/statistics.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class StatisticsEffects {
  constructor(private statisticsService: StatisticsService, private actions$: Actions) {}

  @Effect()
  getNotificationStatistics$: Observable<Action> = this.actions$.pipe(
    ofType(StatisticsActions.GetNotificationStatisticsRequest),
    switchMap(action =>
      this.statisticsService.getNotificationStatistics(action.payload).pipe(
        map(notificationStatistics =>
          StatisticsActions.GetNotificationStatisticsSuccess({ payload: notificationStatistics })
        ),
        catchError(err => of(StatisticsActions.GetNotificationStatisticsFailure({ payload: err })))
      )
    )
  );
}
