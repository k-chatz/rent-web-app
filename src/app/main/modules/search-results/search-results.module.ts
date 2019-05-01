import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchResultsRoutingModule} from './search-results-routing.module';
import {FiltersComponent} from './components/filters/filters.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {SearchResultsComponent} from './search-results.component';
import {HotelListItemComponent} from './components/hotel-list-item/hotel-list-item.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {SearchWidgetComponent} from '../../../shared/components/search-widget/search-widget.component';
import {NzDatePickerModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    SearchResultsComponent,
    FiltersComponent,
    SearchFormComponent,
    HotelListItemComponent,
    SearchWidgetComponent
  ],
  exports: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    BsDropdownModule,
    FormsModule,
    NzDatePickerModule
  ]
})
export class SearchResultsModule {
}
