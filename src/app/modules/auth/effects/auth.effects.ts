import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthModuleService } from '../../../core/services/auth-module.service';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthModuleService, private actions$: Actions) {}

  @Effect()
  loginUserRequest$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActions.LoginUserRequest),
    switchMap(action => {
      const { email, password } = action.payload;
      return this.authService.login(email, password).pipe(
        map(result => AuthActions.LoginUserSuccess({ payload: result })),
        catchError(err => of(AuthActions.LoginUserFailure({ payload: err })))
      );
    })
  );
}
