import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import {NzRateModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

@NgModule({
  declarations: [HotelComponent, ImagesCarouselComponent, HotelDetailsComponent, RoomsListComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    NzRateModule,
    FormsModule
  ]
})
export class HotelModule { }
