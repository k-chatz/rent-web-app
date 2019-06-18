import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import {Observable} from 'rxjs';
import {HotelService} from '../../../../shared/services/hotel.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsListResolver implements Resolve<any> {
  constructor(
    private service: HotelService
  ) {
  }

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getHotelsByProvider({size: 17, page: 0});
  }
}
