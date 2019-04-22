import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterComponent} from './register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ]
})
export class RegisterModule { }
