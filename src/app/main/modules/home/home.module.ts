import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../../../shared/interceptors/jwt.interceptor';
import {ErrorInterceptor} from '../../../shared/interceptors/error.interceptor';
import {mockProvider} from '../../../shared/interceptors/mock.interceptor';

@NgModule({
  declarations: [HomeComponent, SearchBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    mockProvider
  ]
})
export class HomeModule { }
