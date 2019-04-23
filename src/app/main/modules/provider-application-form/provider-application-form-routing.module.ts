import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProviderApplicationFormComponent} from './provider-application-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderApplicationFormRoutingModule {
}
