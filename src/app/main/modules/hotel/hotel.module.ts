import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { ImagesCarouselComponent } from './components/images-carousel/images-carousel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import { HotelReviewsComponent } from './components/hotel-reviews/hotel-reviews.component';
import {AgmCoreModule} from '@agm/core';
import {SearchResultsModule} from '../search-results/search-results.module';

@NgModule({
  declarations: [HotelComponent, ImagesCarouselComponent, HotelDetailsComponent, HotelReviewsComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
    NgZorroAntdModule,
    AgmCoreModule,
    SearchResultsModule,
  ]
})
export class HotelModule { }
