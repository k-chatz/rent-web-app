import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {ManagementComponent} from './management.component';
import {ManagementRoutingModule} from './management-routing.module';

@NgModule({
  declarations: [ManagementComponent, ToolbarComponent, SidebarComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    NgZorroAntdModule
  ]
})
export class ManagementModule {
}
