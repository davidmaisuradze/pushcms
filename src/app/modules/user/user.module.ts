import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';

// ===== COMPONENTS =====
import { UsersComponent } from './containers/users/users.component';

// ===== GUARDS =====
import { AuthGuard } from '../../core/guards/auth.guard';

// ===== ROUTES =====
const ROUTES = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UsersComponent]
})
export class UserModule {}
