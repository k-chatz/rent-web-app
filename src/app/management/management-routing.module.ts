import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagementComponent} from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManagementRoutingModule {
}
