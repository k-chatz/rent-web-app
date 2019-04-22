import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Role} from './shared/models/role';
import {AuthenticationGuard} from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule'
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
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
    path: '**',
    redirectTo: '',
    /* TODO: not found component */
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
