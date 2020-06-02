import { Component } from '@angular/core';
import { RootState } from './modules/root-store/root-state';
import { Store } from '@ngrx/store';
import { LOCALSTORAGE_USER } from './core/constants/general.constants';
import { LoginUserFailure, LoginUserSuccess } from './modules/auth/actions/auth.actions';
import { AuthActions, AuthSelectors } from './modules/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'pcms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user$: Observable<any>;
  title = 'pushCMS';

  constructor(private store: Store<RootState>, private router: Router) {
    this.user$ = this.store.select(AuthSelectors.selectUser);
    this.user$.subscribe(data => {
      console.log(data, 'user');
    });
    const checkUser = localStorage.getItem(LOCALSTORAGE_USER);
    if (checkUser) {
      const { token, user } = JSON.parse(checkUser);
      this.store.dispatch(LoginUserSuccess({ payload: { token, user } }));
    } else {
      this.store.dispatch(LoginUserFailure({ payload: {} }));
    }
  }

  logout() {
    this.store.dispatch(AuthActions.LogoutUserRequest());
    this.router.navigate(['/']);
  }
}
