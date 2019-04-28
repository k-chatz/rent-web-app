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
        canActivate: [AuthenticationGuard],
        data: {
          title: 'profile',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Profile',
              url: ''
            }
          ]
        },
      },
      {
        path: 'search',
        loadChildren: './modules/search-results/search-results.module#SearchResultsModule',
        data: {
          title: 'search',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Search',
              url: ''
            }
          ]
        },
      },
      {
        path: 'hotel',
        loadChildren: './modules/hotel/hotel.module#HotelModule',
        data: {
          title: 'hotel',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Hotel',
              url: ''
            }
          ]
        },
      },
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule',
        canActivate: [AccessGuard],
        data: {
          canAccessLogin: false,
          title: 'login',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Sign In',
              url: ''
            }
          ]
        },
      },
      {
        path: 'apply',
        loadChildren: './modules/provider-application-form/provider-application-form.module#ProviderApplicationFormModule',
        canActivate: [ProviderGuard],
        data: {
          canAccessLogin: false,
          title: 'apply',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Provider application request',
              url: ''
            }
          ]
        },
      },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule',
        canActivate: [AccessGuard],
        data: {
          canAccessLogin: false,
          title: 'register',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Sign Up',
              url: ''
            }
          ]
        },
      },
      {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule',
        data: {
          canAccessLogin: false,
          title: 'about',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'About',
              url: ''
            }
          ]
        }
      },
      {
        path: '**',
        loadChildren: './modules/not-found/not-found.module#NotFoundModule',
      },
    ],
    data: {
      title: 'home',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        }
      ]
    },
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
