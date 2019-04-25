import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersDetailComponent} from './users-detail/users-detail.component';
import {UsersInsertNewComponent} from './users-insert-new/users-insert-new.component';
import {UsersListResolver} from './users-list/users-list-resolver';
import {UsersDetailResolver} from './users-detail/users-detail-resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent,
        resolve: {
          users: UsersListResolver
        },
        children: [
          {
            path: ':uid',
            component: UsersDetailComponent,
            resolve: {
              observable: UsersDetailResolver
            }
          },
          {
            path: '',
            component: UsersInsertNewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {
}
