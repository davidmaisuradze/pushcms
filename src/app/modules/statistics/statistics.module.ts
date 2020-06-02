import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { statisticsReducer } from './reducers/statistics.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StatisticsEffects } from './effects/statistics.effects';

// ===== COMPONENTS =====
import { StatisticsComponent } from './statistics.component';

// ===== GUARDS =====
import { AuthGuard } from '../../core/guards/auth.guard';
import { NotificationStatisticsComponent } from './containers/notification-statistics/notification-statistics.component';

// ===== ROUTES =====
const ROUTES = [
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'notifications',
        pathMatch: 'full'
      },
      {
        path: 'notifications',
        component: NotificationStatisticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('statistics', statisticsReducer),
    EffectsModule.forFeature([StatisticsEffects])
  ],
  declarations: [StatisticsComponent, NotificationStatisticsComponent]
})
export class StatisticsModule {
}
