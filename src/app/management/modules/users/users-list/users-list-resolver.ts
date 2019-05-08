import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../../../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersListResolver implements Resolve<any> {

  constructor(
    private service: UserService
  ) {
  }

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getAll({
      size: 10,
      page: 0,
    });
  }
}
