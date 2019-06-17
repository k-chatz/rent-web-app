import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import {HotelsListComponent} from './hotels-list/hotels-list.component';
import {HotelsDetailComponent} from './hotels-detail/hotels-detail.component';
import {HotelsInsertNewComponent} from './hotels-insert-new/hotels-insert-new.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HotelsComponent, HotelsListComponent, HotelsDetailComponent, HotelsInsertNewComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    NgZorroAntdModule,
    FormsModule
  ]
})
export class HotelsModule { }
