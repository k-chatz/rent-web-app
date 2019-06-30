import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchResultsRoutingModule} from './search-results-routing.module';
import {FiltersComponent} from './components/filters/filters.component';
import {SearchResultsComponent} from './search-results.component';
import {HotelItemComponent} from './components/hotel-item/hotel-item.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchWidgetComponent} from '../../../shared/components/search-widget/search-widget.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AgmCoreModule} from '@agm/core';
import {Ng5SliderModule} from 'ng5-slider';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [
    SearchResultsComponent,
    FiltersComponent,
    HotelItemComponent,
    SearchWidgetComponent
  ],
  exports: [
    FiltersComponent,
    SearchWidgetComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    AngularFontAwesomeModule,
    AgmCoreModule,
    AgmJsMarkerClustererModule,
    Ng5SliderModule,
    GooglePlaceModule
  ]
})
export class SearchResultsModule {
}
