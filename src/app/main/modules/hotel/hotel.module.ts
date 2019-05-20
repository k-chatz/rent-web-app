import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { HotelReviewsComponent } from './components/hotel-reviews/hotel-reviews.component';

@NgModule({
  declarations: [HotelComponent, ImagesCarouselComponent, HotelDetailsComponent, RoomsListComponent, HotelReviewsComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
    NgZorroAntdModule,
  ]
})
export class HotelModule { }
