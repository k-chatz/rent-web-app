import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean  {
    return this.auth.currentUser$.pipe(
      take(1),
      map(user => {
          return !!user;
        }
      ),
      tap(loggedIn => {
        if (!loggedIn) {
          console.error('Access denied!');
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }
}
