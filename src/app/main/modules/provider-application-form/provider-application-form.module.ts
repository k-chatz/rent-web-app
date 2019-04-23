import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProviderApplicationFormRoutingModule} from './provider-application-form-routing.module';
import {ProviderApplicationFormComponent} from './provider-application-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [ProviderApplicationFormComponent],
  imports: [
    CommonModule,
    ProviderApplicationFormRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ]
})
export class ProviderApplicationFormModule {
}
