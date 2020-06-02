import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../../root-store/root-state';
import { Observable, Subject } from 'rxjs';
import * as UserActions from '../../actions/user.actions';
import * as UserSelectors from '../../selectors/user.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pcms-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private _destroyed = new Subject();
  public users$: Observable<any>;

  constructor(private store: Store<RootState>) {
    this.users$ = this.store.pipe(takeUntil(this._destroyed), select(UserSelectors.selectUsers));
    this.users$.subscribe(data => {
      console.log(data, 'data');
    });
  }

  ngOnInit() {
    this.store.dispatch(UserActions.GetUsersRequest());
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }
}
