import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class AccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const session = this.authenticationService.session;
    const canAccessLogin = route.data.canAccessLogin || false;

    console.log('canAccessLogin', canAccessLogin);

    if (canAccessLogin === true) {
      return true;
    } else {
      if (session) {
        this.toastr.warning('You are already logged in!', 'Not Allowed');
        return false;
      }
    }
    return true;

  }
}

