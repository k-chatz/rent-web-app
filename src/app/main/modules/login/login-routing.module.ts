import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
