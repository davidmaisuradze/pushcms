import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// ===== COMPONENTS =====
import { HomeComponent } from './containers/home/home.component';
import { RouterModule } from '@angular/router';

// ===== ROUTES =====
const ROUTES = [
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
  declarations: [HomeComponent],
  entryComponents: [],
  providers: []
})
export class HomeModule {}
