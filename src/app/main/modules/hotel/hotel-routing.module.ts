import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelComponent} from './hotel.component';
import { HotelResolver } from './hotel-resolver';

const routes: Routes = [
  {
    path: ':id',
    component: HotelComponent,
    resolve: {
      data: HotelResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
