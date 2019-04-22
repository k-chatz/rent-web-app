import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login'
      },
      {
        path: 'login1',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register1',
        loadChildren: './register/register.module#RegisterModule'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
