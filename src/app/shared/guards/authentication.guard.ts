import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const session = this.authenticationService.session;
    console.log('session', session);
    if (session) {
      if (route.data.roles && route.data.roles.indexOf(session.user.role) === -1) {
        this.toastr.warning('No rights to access this route!', 'Protected route');
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
