import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagementComponent} from './management.component';
import {Role} from '../shared/models/role';
import {AuthenticationGuard} from '../shared/guards/authentication.guard';

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
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule',
        canActivate: [AuthenticationGuard],
        data: {
          roles: [
            Role.Admin
          ]
        }
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
