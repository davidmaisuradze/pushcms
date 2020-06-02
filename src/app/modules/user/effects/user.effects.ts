import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../../../core/services/user.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  @Effect()
  getUsersRequest$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.GetUsersRequest),
    switchMap(action =>
      this.userService.getUsers().pipe(
        map(users => UserActions.GetUsersSuccess({ payload: users })),
        catchError(err => of(UserActions.GetUsersFailure({ payload: err })))
      )
    )
  );
}
