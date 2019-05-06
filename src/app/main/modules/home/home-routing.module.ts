import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeResolver} from './home-resolver';
import {FileUploaderComponent} from '../../../shared/components/file-uploader/file-uploader.component';
import {CommonModule} from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      observable: HomeResolver
    },
  }
];

@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TooltipModule
  ],
  exports: [
    RouterModule,
    FileUploaderComponent
  ]
})
export class HomeRoutingModule {
}
