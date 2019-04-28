import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment';
import {AgmCoreModule} from '@agm/core';
import {BsDropdownModule} from 'ngx-bootstrap';
import {JwtInterceptor} from './shared/interceptors/jwt.interceptor';
import {ErrorInterceptor} from './shared/interceptors/error.interceptor';
import {mockProvider} from './shared/interceptors/mock.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {TeximateModule} from 'ngx-teximate';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    NgProgressModule.withConfig({
      spinnerPosition: 'left',
      spinner: false,
      meteor: false,
      thick: false,
      color: '#e6ff00'
    }),
    NgProgressHttpModule,
    ToastrModule.forRoot({
      progressBar: true,
      progressAnimation: 'decreasing',
      tapToDismiss: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    }),
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    TeximateModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    mockProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
