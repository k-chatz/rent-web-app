import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {ManagementComponent} from './management.component';
import {ManagementRoutingModule} from './management-routing.module';
import {VarDirectiveModule} from '../shared/var-directive.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    ManagementComponent,
    ToolbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    VarDirectiveModule,
    ManagementRoutingModule,
    NgZorroAntdModule,
    AngularFontAwesomeModule
  ]
})
export class ManagementModule {
}
