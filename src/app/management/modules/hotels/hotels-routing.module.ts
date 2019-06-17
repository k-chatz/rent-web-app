import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HotelsComponent} from './hotels.component';
import {HotelsListComponent} from './hotels-list/hotels-list.component';
import {HotelsInsertNewComponent} from './hotels-insert-new/hotels-insert-new.component';
import {HotelsDetailComponent} from './hotels-detail/hotels-detail.component';
import {HotelsListResolver} from './hotels-list/hotels-list-resolver';
import {HotelsDetailResolver} from './hotels-detail/hotels-detail-resolver';

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
    children: [
      {
        path: '',
        component: HotelsListComponent,
        resolve: {
          data: HotelsListResolver
        },
        children: [
          {
            path: ':username',
            component: HotelsDetailComponent,
            resolve: {
              data: HotelsDetailResolver
            }
          },
          {
            path: '',
            component: HotelsInsertNewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule {
}
