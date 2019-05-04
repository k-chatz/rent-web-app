import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {ProfileImageComponent} from './profile-image/profile-image.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, ProfileImageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule {
}
