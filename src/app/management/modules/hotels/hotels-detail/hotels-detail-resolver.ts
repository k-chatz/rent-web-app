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
export class HotelsDetailResolver implements Resolve<any> {
  constructor(
    private service: HotelService,
  ) {
  }

  resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = next.paramMap.get('id');
    return this.service.getHotel(id);
  }
}

