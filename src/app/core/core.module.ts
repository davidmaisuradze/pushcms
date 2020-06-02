import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModuleService } from './services/auth-module.service';
import { httpInterceptorProviders } from './interceptors';
import { ConfirmModalService } from './services/confirm-modal.service';
import { UserService } from './services/user.service';
import { StatisticsService } from './services/statistics.service';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthModuleService,
    httpInterceptorProviders,
    ConfirmModalService,
    UserService,
    StatisticsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule instance already exists');
    }
  }
}
