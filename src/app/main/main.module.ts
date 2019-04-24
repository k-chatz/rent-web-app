import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ThumbnailCarouselComponent} from './components/thumbnail-carousel/thumbnail-carousel.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SearchResultsModule} from './modules/search-results/search-results.module';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VarDirective} from '../shared/directives/VarDirective';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ConnectFormComponent} from './components/connect-form/connect-form.component';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ThumbnailCarouselComponent,
    VarDirective,
    ConnectFormComponent,
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    MainRoutingModule,
    SearchResultsModule,
    BsDropdownModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class MainModule {
}
