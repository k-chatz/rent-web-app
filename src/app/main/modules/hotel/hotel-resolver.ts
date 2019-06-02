import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelService } from '../../../shared/services/hotel.service';

@Injectable({
  providedIn: 'root',
})
export class HotelResolver implements Resolve<Observable<any>> {
  constructor(
    private hotelService: HotelService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.hotelService.getHotelDetails(route.paramMap.get('id'));
  }
}
