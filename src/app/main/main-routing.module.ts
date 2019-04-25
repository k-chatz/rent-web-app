import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {AuthenticationGuard} from '../shared/guards/authentication.guard';
import {AccessGuard} from '../shared/guards/access.guard';
import {ProviderGuard} from '../shared/guards/provider.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule',
      },
      {
        path: 'profile',
        loadChildren: './modules/profile/profile.module#ProfileModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'search',
        loadChildren: './modules/search-results/search-results.module#SearchResultsModule',
      },
      {
        path: 'hotel',
        loadChildren: './modules/hotel/hotel.module#HotelModule',
      },
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule',
        data: {
          canAccessLogin: false
        },
        canActivate: [AccessGuard]
      },
      {
        path: 'apply',
        loadChildren: './modules/provider-application-form/provider-application-form.module#ProviderApplicationFormModule',
        canActivate: [ProviderGuard]
      },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule',
        data: {
          canAccessLogin: false
        },
        canActivate: [AccessGuard]
      },
      {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule',
      },
      {
        path: '**',
        loadChildren: './modules/not-found/not-found.module#NotFoundModule',
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
