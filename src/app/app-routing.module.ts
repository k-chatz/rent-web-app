import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Role} from './shared/models/role';
import {AuthenticationGuard} from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'management',
    loadChildren: './management/management.module#ManagementModule',
    canActivate: [AuthenticationGuard],
    data: {
      roles: [
        Role.Admin,
        Role.Provider
      ]
    }
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
