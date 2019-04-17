import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ThumbnailCarouselComponent} from './components/thumbnail-carousel/thumbnail-carousel.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [MainComponent, FooterComponent, NavbarComponent, ThumbnailCarouselComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
