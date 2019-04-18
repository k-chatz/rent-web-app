import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HomeService} from './home.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MainModule} from '../../main.module';

@NgModule({
  declarations: [HomeComponent, SearchBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
