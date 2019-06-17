import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import {Observable} from 'rxjs';
import {BusinessService} from '../../../../shared/services/business.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsListResolver implements Resolve<any> {
  constructor(
    private service: BusinessService
  ) {
  }

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getMyBusinesses({size: 17, page: 0});
  }
}
