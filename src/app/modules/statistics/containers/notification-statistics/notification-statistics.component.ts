import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RootState } from '../../../root-store/root-state';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as StatisticsActions from '../../actions/statistics.actions';
import * as StatisticsSelectors from '../../selectors/statistics.selectors';
import { format } from 'date-fns';

enum CalendarTypes {
  fromDate = 1,
  toDate = 2
}

@Component({
  selector: 'pcms-notification-statistics',
  templateUrl: './notification-statistics.component.html',
  styleUrls: ['./notification-statistics.component.scss']
})
export class NotificationStatisticsComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject();
  public notificationStatistics$: Observable<any>;
  public calendarTypes = CalendarTypes;
  public filters = {
    fromDate: null,
    toDate: null
  };

  constructor(private store: Store<RootState>) {
    this.notificationStatistics$ = this.store.pipe(
      takeUntil(this._destroyed),
      select(StatisticsSelectors.selectNotificationStatistics)
    );
  }

  ngOnInit() {
    this.store.dispatch(
      StatisticsActions.GetNotificationStatisticsRequest({
        payload: this.filters
      })
    );
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  onFilterDateChange(date = null, type: CalendarTypes = null) {
    const value = format(date, 'yyyy-MM-dd');
    console.log(value, 'value');
    this.filters = {
      ...this.filters,
      [type === CalendarTypes.toDate ? 'toDate' : 'fromDate']: value
    };

    this.store.dispatch(
      StatisticsActions.GetNotificationStatisticsRequest({
        payload: this.filters
      })
    );
  }
}
