import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

// ===== COMPONENTS =====
import { LoginComponent } from './containers/login/login.component';

// ===== ROUTES =====
const ROUTES = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
