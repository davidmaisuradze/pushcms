import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewFieldSet } from '../../../../shared/models/FieldSet';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createForm, validForm } from '../../../../shared/helpers/form.helpers';
import { Store } from '@ngrx/store';
import { RootState } from '../../../root-store/root-state';
import * as AuthActions from '../../actions/auth.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'pcms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();
  public loginForm: FormGroup;

  public formFields = {
    email: {
      value: null,
      label: 'Email',
      validators: { required: true, email: true },
      view: ViewFieldSet.vertical
    },
    password: {
      value: null,
      label: 'Password',
      validators: { required: true },
      view: ViewFieldSet.vertical
    }
  };

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>,
    private actions$: Actions,
    private router: Router
  ) {
    this.loginForm = createForm(fb, this.formFields);
    this.actions$
      .pipe(
        ofType(AuthActions.LoginUserSuccess),
        takeUntil(this._destroyed$),
        map(result => {
          this.router.navigate(['/']);
        })
      )
      .subscribe();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  login() {
    if (validForm(this.loginForm, this.formFields)) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(AuthActions.LoginUserRequest({ payload: { email, password } }));
    }
  }
}
