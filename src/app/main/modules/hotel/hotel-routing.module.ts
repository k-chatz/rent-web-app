import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelComponent} from './hotel.component';

const routes: Routes = [
  {
    path: ':id',
    component: HotelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
